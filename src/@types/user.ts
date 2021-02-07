import api from "@src/api";
import { LOGIN_REDIRECT_URL, LOGOUT_REDIRECT_URL } from "@src/configs";
import Cookies from "js-cookie";
import Router from "next/router";

export interface User {
  ID: string | undefined;
  CreatedAt: Date | undefined;
  UpdatedAt: Date | undefined;
  DeletedAt: Date | undefined;
  name: string;
  email: string;
  socialID: string;
  social: string;
}

export function Login() {
  Router.push(LOGIN_REDIRECT_URL);
}

export function Logout() {
  Cookies.remove("accessToken");
  localStorage.removeItem("user");
  Router.push(LOGOUT_REDIRECT_URL);
}

export function isLoggedIn() {
  const accessToken = Cookies.get("accessToken");
  return Boolean(accessToken);
}

export async function QuitUser() {
  const { data } = await api.delete("/user/quit");
  return data;
}

export async function GetUserInfo(refresh) {
  if (refresh) localStorage.removeItem("user");

  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  const { data } = await api.get("/user");
  localStorage.setItem("user", JSON.stringify(data));
  return data;
}
