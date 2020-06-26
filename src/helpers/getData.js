const cache = {};
const cachedFetch = async (url) => {
  if (cache[url]) {
    return cache[url];
  }
  const res = await fetch(url).then((res) => res.json());
  cache[url] = res;
  return res;
};

export const getData = async (url) => {
  try {
    const res = await cachedFetch(url);
    return res;
  } catch (error) {
    if (error) {
      console.error(error);
    }
  }
};
