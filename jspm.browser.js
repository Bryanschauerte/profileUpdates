SystemJS.config({
  baseURL: ".",
  trace: true,
  production: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "jspm-react-component/": "src/"
  }
});
