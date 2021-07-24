import Head from "next/head";
import { useState } from "react";
import { selector, useRecoilValueLoadable } from "recoil";

import { Post } from "@/models";
import { postService } from "@/services";

import styles from "../styles/Home.module.css";

const posts = selector<Post[]>({
  key: "postAll",
  get: async () => {
    const res = await postService.fetchAll();
    return res;
  },
});

export default function Home(): JSX.Element {
  const [text, setText] = useState("");

  const onClick = () => {
    setText("テスト");
  };

  const FetchPost = () => {
    const fetchAllPost = useRecoilValueLoadable(posts);
    switch (fetchAllPost.state) {
      case "hasValue":
        return <div>{fetchAllPost.contents}</div>;
      case "loading":
        return <div>Loading...</div>;
      case "hasError":
        throw fetchAllPost.contents;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Versatil WebApi</title>
        <meta name="description" content="Versatil WebApi GUI App" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Versatil WebApp!</h1>
        <br />

        <textarea
          name="input"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="いまどうしてる？"
        ></textarea>
        <button onClick={() => onClick()}>つぶやく</button>
        <p>{text}</p>

        <FetchPost />
      </main>
    </div>
  );
}
