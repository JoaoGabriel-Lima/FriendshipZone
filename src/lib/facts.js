export async function getSortedPostsData() {
  const res = await fetch('http://localhost:3000/api/getpage')
  return res.json()
}