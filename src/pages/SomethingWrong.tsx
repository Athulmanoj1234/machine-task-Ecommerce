const SomethingWentWrongPage = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 px-4">
        <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Something Went Wrong</h2>
        <p className="text-center text-gray-600 max-w-md mb-6">
          We're sorry, but something went wrong on our end. Please try again later or return to the home page.
        </p>
        <a
          href="/"
          className="px-6 py-2 text-white bg-red-600 rounded-full hover:bg-red-700 transition-all"
        >
          Go Home
        </a>
      </div>
    );
  };
  
  export default SomethingWentWrongPage;