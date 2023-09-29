import server from "./server";

export const getBagName = async () => await server.get("/products");

export const getHnadles = async (url) => await server.get(`/handles${url}`);

export const getMaterial = async (url) => await server.get(`/material${url}`);

export const getThicknees = async (url) =>
  await server.get(`/thicknees/${url}`);

export const getBagColor = async (url) => await server.get(`/bagColor${url}`);

export const getLogo = async (url) => await server.get(`/logoColor${url}`);

export const getDimesion = async (url) => await server.get(`/dimension${url}`);
