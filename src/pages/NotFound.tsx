

const NotFoundPage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Go to Home
        </a>
      </div>
    );
  };
  
  export default NotFoundPage;