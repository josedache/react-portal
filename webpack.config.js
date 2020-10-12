const app_name = "react-portal";

const commons = {
  entry: "./lib/index.js",
  mode: "production",
};

const amd = {
  ...commons,
  name: "amd",
  output: { filename: `${app_name}.amd.js`, libraryTarget: "amd" },
};
const cjs = {
  ...commons,
  name: "cjs",
  output: { filename: `${app_name}.js`, libraryTarget: "commonjs" },
};
const umd = {
  ...commons,
  name: "umd",
  output: { filename: `${app_name}.umd.js`, libraryTarget: "umd" },
};

module.exports = [amd, cjs, umd];
