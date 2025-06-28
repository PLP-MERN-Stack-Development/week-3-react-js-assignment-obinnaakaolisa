import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-3xl mx-auto py-6 px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}
