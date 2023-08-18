import { createProxyMiddleware } from "http-proxy-middleware";

// // export default (app: any) => {

// // };
module.exports = function (app: any) {
  app.use(
    createProxyMiddleware("/auth", {
      target: "http://146.56.143.108",
      changeOrigin: true,
    })
  );
};
