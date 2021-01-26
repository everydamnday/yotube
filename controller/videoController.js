import routes from "../router/routes";
import Video from "../model/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "home", videos });
  } catch (e) {
    console.log(e);
    res.render("home", { pageTitle: "home", videos: [] });
  }
};

export const search = async (req, res) => {
  const { term: searchingBy } = req.query;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" },
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description, // 나머지는 다 디폴트로 들어감.
  });
  res.redirect(routes.videoDetail(newVideo.id));
  // res.redirect(routes.videoDetail(324393));
};

export const videoDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: `${video.title}`, video });
  } catch (e) {
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description }); // 바꿀 대상의 id, 바꿀 내용(객체)
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  try {
    await Video.findOneAndDelete({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

// res.render("deleteVideo", { pageTitle: "deleteVideo" });

// const { id } = req.params; 저 id가 어디서 오는가? 언제 url에 파람을 줬지?
// edit 을 예를 들어보면,
// routes에 url을 함수로 생성하도록 했다. (id) => { if(id) {return `/videos/${id}/edit`}}
// 버튼 a(href=routes.editVideo(video.id)) Edit Video 누르면 id가 url로 전달되도록 되었다.
// get/post 둘다 url의 id를 req.params으로 접근하게 된다.
