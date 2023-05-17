import axios from "axios";

import { Config } from "@/config";
import { ApiConfig, Group, Post, User } from "./api.types";

const DefaultApiConfig: ApiConfig = {
  url: Config.API_URL,
  timeout: 5000,
};

const createClient = ({ url, timeout }: ApiConfig) => {
  console.log(url);
  return axios.create({
    baseURL: url,
    timeout: timeout,
    headers: {
      Accept: "application/json",
    },
  });
};

export const apiClient = (config: ApiConfig = DefaultApiConfig) => {
  const client = createClient(config);

  // TODO: Properly handle errors in the operations below
  const getAllUsers = async () => {
    const { data } = await client.get<User[]>("/users");
    return data;
  };

  const getUserByName = async (name: string) => {
    const { data } = await client.get<User>(`/users?name=${name}`);
    return data;
  };

  const getAllPosts = async () => {
    const { data } = await client.get<Post[]>("/posts");
    return data;
  };

  const post = async (data: Partial<Post>) => {
    const { data: result } = await client.post<Post>("/posts", data);
    return result;
  };

  const getAllGroups = async () => {
    const { data } = await client.get<Group[]>("/groups");
    return data;
  };

  return { getAllUsers, getUserByName, getAllPosts, post, getAllGroups };
};

export const Api = apiClient();
