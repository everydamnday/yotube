import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";
import globalRouter from "./router/globalRouter";
import { localMiddleware } from "./middleware";
import routes from "./router/routes";

const app = express();

// 설정
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));

//미들웨어
app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://archive.org"
  );
  return next();
});
app.use(helmet({ contentSecurityPolicy: false })); // 다른 옵션 없이 걍 깔아두고보는 보안 미들웨어
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); // request 정보 제공, 응답관련 정보 제공
app.use(localMiddleware);

//routes
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;

// 요청의 처리 경로
// request => app => router => controller => views => response
//
//
//
//미들웨어 예시용
// const between = (req, res, next) => {
//   console.log("between");
//   next();
// };
//
// app.use(between); 전역사용 시
// app.get("/", between, handleHome); : /접속 요청 후 handlehome 함수 실행 이전에 실행
