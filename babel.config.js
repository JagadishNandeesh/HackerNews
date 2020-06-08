module.exports = (api) => {
  if (api.env("test")) {
    return {
      presets: [
        ["@babel/preset-env", { loose: true, modules: false }],
        "@babel/react",
      ],
      plugins: [
        "@babel/proposal-class-properties",
        [
          "css-modules-transform",
          {
            camelCase: true,
            extensions: [".css"],
          },
        ],
        "dynamic-import-node",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-modules-commonjs",
      ],
    };
  }
  if (api.env(["client", "production", "development"])) {
    return {
      presets: [
        ["@babel/preset-env", { loose: true, modules: false }],
        "@babel/react",
      ],
      plugins: [
        "@babel/proposal-class-properties",
        [
          "css-modules-transform",
          {
            camelCase: true,
            extensions: [".css"],
          },
        ],
        "dynamic-import-node",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-modules-commonjs",
      ],
    };
  }

  if (api.env(["server", "production", "development"])) {
    return {
      presets: [
        ["@babel/preset-env", { loose: true, modules: false }],
        "@babel/react",
      ],
      plugins: [
        "@babel/proposal-class-properties",
        [
          "css-modules-transform",
          {
            camelCase: true,
            extensions: [".css"],
          },
        ],
        "dynamic-import-node",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-modules-commonjs",
      ],
    };
  }
};
