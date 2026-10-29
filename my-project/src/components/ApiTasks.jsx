import { useState, useEffect } from 'react';

export default function ApiTasks() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchPosts = async (isManual = false) => {
    if (isManual) setIsRefreshing(true);
    else setLoading(true);
    
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
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="bg-white shadow-xs rounded-xl p-6 border border-gray-100">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Practice Feed</h2>
          <p className="text-xs text-gray-500">Live sample data fetched via <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700">fetch()</code></p>
        </div>

        <button 
          onClick={() => fetchPosts(true)} 
          disabled={isRefreshing || loading}
          className="flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 font-medium text-xs rounded-lg transition disabled:opacity-50 cursor-pointer"
        >
          <svg 
            className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
        </button>
      </div>

      {/* Loading Skeleton State */}
      {loading && (
        <div className="space-y-3 animate-pulse">
          {[1, 2, 3].map((n) => (
            <div key={n} className="p-3 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
              <div className="h-3 bg-gray-200 rounded w-16"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="p-4 bg-red-50 text-red-700 text-xs flex justify-between items-center rounded-xl border border-red-100">
          <span>⚠️ Error loading feed: {error}</span>
          <button 
            onClick={() => fetchPosts(true)} 
            className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition"
          >
            Retry
          </button>
        </div>
      )}

      {/* Data Feed List */}
      {!loading && !error && (
        <div className="space-y-3">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="p-4 bg-gray-50/70 hover:bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-200 transition-all group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">
                  Post #{post.id}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-gray-800 group-hover:text-emerald-900 transition-colors line-clamp-1">
                {post.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                {post.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}