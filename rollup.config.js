const app_name = "dist/react-portal";
export default {
  input: "lib/index.js",
  external: ["react", "react-native"],
  output: [
    {
      file: `${app_name}.js`,
      format: "cjs",
    },
    {
      file: `${app_name}.es.js`,
      format: "es",
    },
    {
      file: `${app_name}.amd.js`,
      format: "amd",
    },
    {
      name: "reactPortal",
      file: `${app_name}.umd.js`,
      format: "umd",
    },
  ],
};
