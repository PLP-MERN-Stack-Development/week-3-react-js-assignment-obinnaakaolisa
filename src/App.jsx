import TaskManager from './components/TaskManager';
import PostList from './components/PostList';


function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">PLP Task Manager</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow max-w-3xl mx-auto py-6 px-4">
        <TaskManager />

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <PostList />
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
