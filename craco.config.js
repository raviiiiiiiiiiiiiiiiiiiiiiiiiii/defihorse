module.exports = {
  webpack: {
    alias: {
      "@react-native-async-storage/async-storage": require.resolve("./src/utils/asyncStorageShim.js"),
    },
  },
};

