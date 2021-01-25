import routes from "./router/routes";

export const localMiddleware = (req, res, next) => {
  (res.locals.siteName = "Yotube"),
    (res.locals.routes = routes),
    (res.locals.user = {
      isAuthenticated: true,
      id: 1,
    });
  next();
};
