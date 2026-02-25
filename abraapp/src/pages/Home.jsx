import { useEffect, useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { fetchProjects } from '../api/portfolio';
import { Link, useLocation } from "react-router-dom";
import styles from '../home.css';

const imageLoader = (src, width, quality) => {
  return `${src}?format=auto${quality ? `&quality=${quality}` : ''}&width=${width}`;
};


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
      <main className="mx-auto p-2 sm:p-4">

          <>
            {allProjects.length === 0 ? (
              <p className="text-gray-600">No projects in this category. test deneme</p>
            ) : (
        <div className="relative w-full">
            <Carousel projects={allProjects} />
            <div className="absolute inset-0 bg-white bg-opacity-50 flex w-fit h-fit place-self-center p-24">
                <img
                    src={imageLoader("https://d3hojcyp0aupte.cloudfront.net/asset/Abra_Logo_png.png", 800)}
                    alt="Abra Design Studio"
                    className="max-w-50 mx-auto"
                />
            </div>
        </div>
            )}
<div className="block px-6 py-12 lg:px-48">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">ABRA DESIGN STUDIO</h2>
    <p className="mt-2 text-base leading-7 text-center text-gray-500 max-w-2xl mx-auto">
        2014 yılında Başak Bakkaloğlu ve Cemal Çobanoğlu tarafından İstanbul’da kurulan ABRA Design Studio, mobilya ve ürün tasarımının yanında, mimarlık, iç mimarlık ve kamusal mekan tasarımı disiplinlerinde üretimler yapmaktadır.
    </p>
    <p className="mt-4 text-base leading-7 text-center text-gray-500 max-w-2xl mx-auto">
        ABRA, Türkçe’de denge anlamına gelmektedir ve denge tüm ABRA tasarımları için bir başlangıç noktasıdır. Hem bir tasarım fikrinin ortaya çıkışında hem de kullanıcı-tasarım ve tasarım-mekan arasında bir etkileşim yaratma sürecinde, bu “denge arayışı” ABRA’ya rehberlik etmektedir.
    </p>
    <p className="mt-4 text-base leading-7 text-center text-gray-500 max-w-2xl mx-auto">
        ABRA, çeşitli ürünleri ile bugüne kadar Milano Design Week, Design Week Turkey, Design Spirit, States of Materials, Yan, Deka II gibi pek çok ulusal ve uluslararası fuar ve sergide küratör ya da katılımcı olarak yer aldı, yurt içi ve yurt dışında birçok basın organında tasarımları ile yer buldu, İstanbul Senin Kent Mobilyaları Yarışması birinciliği başta olmak üzere, çeşitli yarışmalarda farklı derecelerde ödüller aldı.
    </p>

    <div className="flex flex-col lg:flex-row items-center justify-center mt-12 space-y-12 lg:space-y-0 lg:space-x-12">
        <div className="block text-center bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <img 
                src={imageLoader("https://d3hojcyp0aupte.cloudfront.net/asset/Başak_Bakkaloğlu.jpg", 400)} 
                alt="Başak Bakkaloğlu" 
                className="rounded-full mb-4 h-32 w-32 object-cover mx-auto" // Centering added
            />
            <h3 className="text-xl font-semibold text-gray-800">Başak Bakkaloğlu</h3>
            <p className="mt-2 text-base leading-6 text-gray-600">
                Lisans eğitimini İ.T.Ü. Mimarlık Fakültesi, Mimarlık Bölümü’nde tamamladı. Mezuniyeti sonrasında, çeşitli mimarlık ofislerinde, kentsel tasarım, konut, ofis ve mağaza tasarımı gibi farklı fonksiyon ve ölçekler üzerine çalışma imkanı buldu, deneyim kazandı. Eş zamanlı olarak mobilya ve ürün tasarımına ağırlık verdi. Mimarlık, iç mimarlık ve ürün tasarımı çalışmalarını tek bir isim altında sürdürme isteğiyle, 2014 yılında Cemal Çobanoğlu ile “ABRA Design Studio”yu kurdu. Kadir Has Üniversitesi, MEF Üniversitesi ve Beykent Üniversitesi’nde temel tasarım, mobilya tasarımı, mobilya tarihi ve ileri sunum teknikleri dersleri verdi. Tasarımları yurt içinde ve yurt dışında pek çok farklı sergi ve yayında yer aldı. Mobilya tasarımı yarışmalarında çeşitli ödüller aldı. Pek çok konferans ve söyleşide konuşmacı olarak yer aldı.
            </p>
        </div>

        <div className="block text-center bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <img 
                src={imageLoader("https://d3hojcyp0aupte.cloudfront.net/asset/Cemal_Çobanoğlu.jpg", 400)} 
                alt="Cemal Çobanoğlu" 
                className="rounded-full mb-4 h-32 w-32 object-cover mx-auto" // Centering added
            />
            <h3 className="text-xl font-semibold text-gray-800">Cemal Çobanoğlu</h3>
            <p className="mt-2 text-base leading-6 text-gray-600">
                Lisans eğitimini İ.T.Ü. Mimarlık Fakültesi, İç Mimarlık Bölümü’nde, yüksek lisans eğitimini ise IMIAD’da tamamladı. IMIAD kapsamında İ.T.Ü ile birlikte, Finlandiya’da Lahti University of Applied Sciences’da, İskoçya’da Edinburgh College of Art’da eğitim aldı. Bu süreçte yüzyıl ortası mobilya tasarımı ve İskandinav tasarımı üzerine tezini yazdı. Katıldığı kentsel tasarım, iç mimarlık ve mobilya tasarımı yarışmalarında birçok farklı ödül aldı. Mezuniyeti sonrasında, çeşitli iç mimarlık ve tasarım ofislerinde deneyim kazandı. 2014 senesinde Başak Bakkaloğlu ile birlikte “ABRA Design Studio”yu kurdu. Tasarım yarışmalarında jüri başkanı ve jüri üyesi olarak bulundu, yurt içi ve yurt dışındaki tasarım haftalarında ve sergilerinde katılımcı ve küratör olarak yer aldı. Farklı mimarlık ve tasarım yayınlarında köşe yazarlığı yaptı, üniversitelerde mobilya tasarımı, mobilya tarihi ve temel tasarım dersleri verdi. Pek çok farklı konferans ve söyleşide konuşmacı ve moderatör olarak yer aldı.
            </p>
        </div>
    </div>
</div>


  
          </>
              </main>
      <Footer />
    </>
  );
}







