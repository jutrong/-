const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api/v1", {
      target: "http://146.56.143.108",
      changeOrigin: true,
    })
  );
};
