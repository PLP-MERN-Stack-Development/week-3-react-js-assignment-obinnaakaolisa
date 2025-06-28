import { useEffect, useState } from 'react';
import { fetchPosts } from '../api/fetchPosts';
import Card from '../components/Card';
import PropTypes from 'prop-types';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts(6)
    .then(setPosts)
    .catch(() => setError(true))
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
            <Card key={post.id} title={post.title}>
              <p className="text-sm text-gray-600 dark:text-gray-400">{post.body}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
