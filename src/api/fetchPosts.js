export async function fetchPosts(limit = 20) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}
