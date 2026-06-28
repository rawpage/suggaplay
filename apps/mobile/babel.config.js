module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // Monorepo: babel-preset-expo is hoisted to root and misses expo-router,
      // so EXPO_ROUTER_APP_ROOT never gets inlined without this plugin.
      require("babel-preset-expo/build/expo-router-plugin").expoRouterBabelPlugin,
    ],
  };
};
