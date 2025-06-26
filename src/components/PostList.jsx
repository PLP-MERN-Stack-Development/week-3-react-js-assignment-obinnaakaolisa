import { useEffect, useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, []);

  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mt-4">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts..."
        className="w-full px-4 py-2 mb-4 border rounded dark:bg-gray-700 dark:border-gray-600"
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {filtered.map((post) => (
            <li key={post.id} className="p-4 border rounded dark:border-gray-600">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
