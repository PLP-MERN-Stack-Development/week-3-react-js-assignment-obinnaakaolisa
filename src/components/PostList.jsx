import { useEffect, useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
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
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
          {filtered.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow border dark:border-gray-700">
              <h3 className="font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
