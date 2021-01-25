import routes from "../router/routes";

export const getJoin = (req, res) => res.render("join", { pageTitle: "join" });
export const postJoin = (req, res) => {
  const { name, email, password, password2 } = req.body;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "join" });
  } else {
    // 유저 등록
    // 유저 로그인
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "login" });
export const postLogin = (req, res) => {
  // db 유저 정보 일치 여부 확인
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // log out logic
  res.redirect(routes.home);
};

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "userDetail" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "editProfile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "changePassword" });
