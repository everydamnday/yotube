import express from "express";
import routes from "./routes";
import {
  videos,
  upload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo,
  getUpload,
  postUpload,
} from "../controller/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);
// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;

// url과 view의 연결
