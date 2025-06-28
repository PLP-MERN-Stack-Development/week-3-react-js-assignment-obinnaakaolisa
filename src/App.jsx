import Layout from './Layout';
import TaskManager from './pages/TaskManager';
import PostList from './pages/PostList';

function App() {
  return (
    <Layout>
      <TaskManager />
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">API Data</h2>
        <PostList />
      </section>
    </Layout>
  );
}

export default App;
