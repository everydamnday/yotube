import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const model = mongoose.model("Video", VideoSchema);
export default model;

// 다 하고 init.js 에서 import "./model/Video" 를 해줘야 모델이 생성된 걸 인식함.
//model config 관련 mongoose doc schema 에서 option 확인

// comments와 video를 연결시키는 방법
// 1. comment가 어떤 video의 코멘트인지 comment 테이블에 표기(foreign Key 설정 방식)
// 2. video 테이블에 특정 comment 테이블 전체를 담는 컬럼을 만든다.(여기서 쓴 방식)
