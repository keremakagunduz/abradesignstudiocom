import { useEffect, useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { fetchProjects } from '../api/portfolio';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState(null);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const projectsPerPage = 24; // Change this to your desired number of items per load

  useEffect(() => {
    fetchProjects().then(data => {
      setAllProjects(data.data);
      setProjects(data.data.slice(0, projectsPerPage)); // load initial set of projects
    });
  }, []);

  const loadMoreProjects = () => {
    setLoading(true);
    const nextPage = page + 1;

    setTimeout(() => {
      const nextProjects = allProjects.slice(
        (nextPage - 1) * projectsPerPage,
        nextPage * projectsPerPage
      );
      setProjects(prev => [...prev, ...nextProjects]);
      setPage(nextPage);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        !== document.documentElement.offsetHeight || loading
      ) {
        return;
      }
      loadMoreProjects();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, allProjects]);

  const visibleProjects = useMemo(() => {
    const filteredProjects = filter
      ? allProjects.filter(p => p.categories?.some(cat => cat.id === filter))
      : projects.filter(p => p.categories?.some(cat => cat.id !== 4));

    return filteredProjects.sort((a, b) => a.display_priority - b.display_priority);
  }, [projects, filter]);

  return (
    <>
      <Header />
      <main className="mx-auto p-2 sm:p-4">

          <>
            {visibleProjects.length === 0 ? (
              <p className="text-gray-600">No projects in this category. test deneme</p>
            ) : (
              <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-4 xl:columns-4 sm:gap-0 py-1 sm:py-3 mx-0 xl:mx-12">
                <Carousel projects={visibleProjects} />
              </div>
            )}
          </>
        
        {loading && <p className="text-gray-600">Loading more projects...</p>}
      </main>
      <Footer />
    </>
  );
}



