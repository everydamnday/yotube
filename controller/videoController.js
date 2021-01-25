import { videos } from "../db";

export const home = (req, res) =>
  res.render("home", { pageTitle: "home", videos });

export const search = (req, res) => {
  const { term } = req.query;
  res.render("search", { pageTitle: "search", searchingBy: term, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });

export const postUpload = (req, res) => {
  const { file, title, description } = req.body;
  res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
