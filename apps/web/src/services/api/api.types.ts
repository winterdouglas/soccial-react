export type Post = {
  id: number;
  title: string;
  group: number;
  creatorId: number;
  createdAt: string;
};

export type User = {
  id: number;
  name: string;
  birthday: string;
};

export type Group = {
  id: number;
  name: string;
  admins: number[];
  members: number[];
};

export type ApiConfig = {
  url: string;
  timeout: number;
};
