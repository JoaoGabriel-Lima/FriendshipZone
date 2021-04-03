async function fetchQuery(name) {
  const fetcher = url => fetch(url).then(r => r.json())
  // const env = process.env.NODE_ENV
  var url;
  url = `https://friendshipzone.vercel.app/api/${name}`
  const response = await fetcher(url)
  const data = await response
  return data
}
export {fetchQuery}