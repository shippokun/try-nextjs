/**
 * Qiita: https://qiita.com/HawkClaws/items/599d7666f55e79ef7f56
 * GitHub: https://github.com/HawkClaws/versatileapi
 */
export type Post = {
  id: string;
  _created_at: Date;
  _updated_at: Date;
  _user_id: string;
  description: string;
  name: string;
};

export type PostCreateDto = {
  description: string;
  _user_id?: string;
  name?: string;
};

export type User = {
  id: string;
  name: string;
  description: string;
  _user_id: string;
  _created_at: string;
  _updated_at: string;
};

export type UserCreateDto = {
  name: string;
  description: string;
};

export type UsertUpdateDto = UserCreateDto;
