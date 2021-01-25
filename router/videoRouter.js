import express from "express";
import routes from "./routes";
import {
  videos,
  upload,
  videoDetail,
  editVideo,
  deleteVideo,
  getUpload,
  postUpload,
} from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.get(routes.upload, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;

// url과 view의 연결
