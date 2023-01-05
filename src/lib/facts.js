async function fetchQuery(name) {
  const fetcher = (url) => fetch(url).then((r) => console.log(r.json));
  const env = process.env.NODE_ENV;
  let url;
  if (env == "development") {
    url = `http://localhost:3000/api/${name}`;
  } else if (env == "production") {
    url = `https://jaospace.vercel.app/api/${name}`;
  }
  const response = await fetcher(url);
  const data = await response;
  return data;
}
export { fetchQuery };
