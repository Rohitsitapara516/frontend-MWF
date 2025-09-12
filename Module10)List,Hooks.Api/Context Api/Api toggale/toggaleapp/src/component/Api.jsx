export const fetchTheme = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("light"); // API returns "light" by default
    }, 500);
  });
};

