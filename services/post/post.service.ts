import { Post, PostCreateDto } from "@/models";

export class PostService {
  async fetchAll(limit = 2): Promise<Post[]> {
    const url = new URL(
      `${this.baseUrl}/text/all?$orderby=_created_at+desc&$limit=${limit}`
    );
    return await fetch(url.toString(), {
      method: "GET",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      return res.json();
    });
  }

  async fetch(id: string): Promise<Post> {
    const url = new URL(`${this.baseUrl}/text/${id}`);
    return await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }

  async create(post: PostCreateDto): Promise<Post> {
    const url = new URL(`${this.baseUrl}/text`);

    return await fetch(url.toString(), {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        Authorization: "HelloWorld",
      },
    }).then((res) => res.json());
  }

  constructor(private readonly baseUrl: string) {}
}
