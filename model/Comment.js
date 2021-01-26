import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Comment", CommentSchema);
export default model;

// 다 하고 init.js 에서 import "./model/Video" 를 해줘야 모델이 생성된 걸 인식함.
//model config 관련 mongoose doc schema 에서 option 확인
