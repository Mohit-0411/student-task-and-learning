import { useState, useEffect } from 'react';

export default function ApiTasks() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      if (!response.ok) throw new Error(`Status: ${response.status}`);
      
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className=" shadow rounded-lg p-6 mb-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Practice Feed</h2>
          <p className="text-xs font-semibold text-gray-500">Fetching sample posts using <code className="text-gray-900">fetch()</code></p>
        </div>
        <button onClick={fetchPosts} className="px-3 py-1.5 bg-emerald-500 font-bold text-white text-xs rounded-md">
          Refresh
        </button>
      </div>

      {loading && <div className="p-6 text-center text-gray-500">Loading posts...</div>}

      {error && (
        <div className="p-4 bg-red-50 text-red-700 text-sm flex justify-between items-center rounded-md">
          <span> Error: {error}</span>
          <button onClick={fetchPosts} className="px-3 py-1 bg-red-600 text-white text-xs rounded">Retry</button>
        </div>
      )}

      {!loading && !error && (
        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.id} className="p-3 bg-gray-50 rounded-md border border-gray-200">
              <span className="text-xs font-bold text-blue-600">Post #{post.id}</span>
              <h4 className="text-sm font-medium text-gray-800 mt-0.5">{post.title}</h4>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}