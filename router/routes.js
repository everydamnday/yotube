// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/:id/change-password";
// Videos
const VIDEOS = "/videos";
const VIDEO_UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const VIDEO_EDIT = "/:id/edit";
const VIDEO_DELETE = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: VIDEO_UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: (id) => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return VIDEO_EDIT;
    }
  },
  deleteVideo: (id) => {
    if (id) {
      return `/videos/${id}/delete`;
    } else {
      return VIDEO_DELETE;
    }
  },
};

export default routes;
