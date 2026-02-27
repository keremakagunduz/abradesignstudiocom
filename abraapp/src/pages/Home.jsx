import { useEffect, useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { fetchProjects } from '../api/portfolio';
import { Link, useLocation } from "react-router-dom";
import styles from '../home.css';
import ScrollToTop from '../components/ScrollToTop';
import { FaPhoneAlt } from "react-icons/fa";

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
<svg className="max-w-6" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 95 118.75" x="0px" y="0px">
<path d="M82.664,81.539a2.745,2.745,0,0,1-1.45,2.12L72.024,89.2a44.218,44.218,0,0,1-7.933.707c-14.785,0-30.433-7.085-43.22-19.871C5.766,54.932-1.381,
35.836,1.706,18.884l5.543-9.19a2.741,2.741,0,0,1,2.119-1.45,1.948,1.948,0,0,1,1.692.787L25.608,27.813c.3.39.72,1.112.132,1.574l-8.024,6.3a1.891,1.891,0,
0,0-.724,1.518c.1,6.6,5.022,15.407,13.162,23.547S47.1,73.814,53.7,73.916a1.909,1.909,0,0,0,1.519-.724l6.3-8.024c.461-.588,1.184-.17,1.573.132L81.877,79.848A1.951,
1.951,0,0,1,82.664,81.539ZM79.27,23.8,94,38.532V9.072ZM92.38,5.336a2.727,2.727,0,0,0-1.125-.244H50.55a2.731,2.731,0,0,0-1.125.244L70.9,26.814ZM47.805,9.072v29.46L62.535,
23.8ZM72.242,30.831a1.9,1.9,0,0,1-2.678,0L65.213,26.48,49.681,42.012a2.721,2.721,0,0,0,.869.144H91.255a2.716,2.716,0,0,0,.869-.144L76.592,26.48Z"/>
</svg>

            </div>
        </div>
            )}
<div>
<ScrollToTop />
</div>

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
                        <a href="" target="_blank" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">LinkedIn</span>
                <svg class="w-8 h-6 justify-self-center" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <g clip-path="url(#clip0_4062_37004)">
                  <path fill-rule="evenodd" d="M20.7076 20.4751H17.163V14.9241C17.163 13.6004 17.1394 11.8964 15.3194 11.8964C13.4733 11.8964 13.1908 13.3386 13.1908 14.8278V20.4748H9.64618V9.05963H13.049V10.6196H13.0966C13.4372 10.0374 13.9293 9.55839 14.5205 9.23369C15.1118 8.90895 15.78 8.7507 16.4541 8.77569C20.0467 8.77569 20.7091 11.1388 20.7091 14.213L20.7076 20.4751ZM5.64668 7.49926C5.23986 7.49934 4.84212 7.37878 4.50383 7.15281C4.16551 6.92684 3.9018 6.60565 3.74606 6.22981C3.59029 5.85397 3.54948 5.44039 3.62878 5.04137C3.70807 4.64234 3.90391 4.27577 4.19154 3.98802C4.47917 3.70031 4.84563 3.50434 5.24466 3.4249C5.64365 3.34546 6.05726 3.38612 6.43314 3.54174C6.80905 3.69736 7.13036 3.96096 7.35644 4.29918C7.58252 4.63739 7.70322 5.03509 7.70329 5.44191C7.70333 5.71204 7.6502 5.97954 7.54685 6.22911C7.44354 6.47871 7.29204 6.70549 7.10108 6.89653C6.91011 7.08757 6.68337 7.23914 6.43384 7.34256C6.18428 7.44598 5.91681 7.49922 5.64668 7.49926ZM7.41899 20.4751H3.87068V9.05963H7.41899V20.4751ZM22.4747 0.0936092H2.08951C1.62683 0.0883878 1.18099 0.267072 0.849979 0.590397C0.518971 0.913721 0.329866 1.35524 0.324219 1.81792V22.2877C0.329672 22.7506 0.518661 23.1924 0.849658 23.5161C1.18066 23.8398 1.6266 24.0188 2.08951 24.0138H22.4747C22.9386 24.0197 23.3857 23.8412 23.718 23.5175C24.0504 23.1939 24.2406 22.7515 24.247 22.2877V1.81644C24.2404 1.35284 24.0501 0.910826 23.7178 0.587509C23.3854 0.264192 22.9383 0.086018 22.4747 0.0921323V0.0936092Z"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_4062_37004">
                  <rect width="24.3692" height="24" fill="white" transform="translate(0 0.0921631)"/>
                  </clipPath>
                  </defs>
                  </svg>
            </a>
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
                <a href="" target="_blank" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">LinkedIn</span>
                <svg class="w-8 h-6 justify-self-center" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <g clip-path="url(#clip0_4062_37004)">
                  <path fill-rule="evenodd" d="M20.7076 20.4751H17.163V14.9241C17.163 13.6004 17.1394 11.8964 15.3194 11.8964C13.4733 11.8964 13.1908 13.3386 13.1908 14.8278V20.4748H9.64618V9.05963H13.049V10.6196H13.0966C13.4372 10.0374 13.9293 9.55839 14.5205 9.23369C15.1118 8.90895 15.78 8.7507 16.4541 8.77569C20.0467 8.77569 20.7091 11.1388 20.7091 14.213L20.7076 20.4751ZM5.64668 7.49926C5.23986 7.49934 4.84212 7.37878 4.50383 7.15281C4.16551 6.92684 3.9018 6.60565 3.74606 6.22981C3.59029 5.85397 3.54948 5.44039 3.62878 5.04137C3.70807 4.64234 3.90391 4.27577 4.19154 3.98802C4.47917 3.70031 4.84563 3.50434 5.24466 3.4249C5.64365 3.34546 6.05726 3.38612 6.43314 3.54174C6.80905 3.69736 7.13036 3.96096 7.35644 4.29918C7.58252 4.63739 7.70322 5.03509 7.70329 5.44191C7.70333 5.71204 7.6502 5.97954 7.54685 6.22911C7.44354 6.47871 7.29204 6.70549 7.10108 6.89653C6.91011 7.08757 6.68337 7.23914 6.43384 7.34256C6.18428 7.44598 5.91681 7.49922 5.64668 7.49926ZM7.41899 20.4751H3.87068V9.05963H7.41899V20.4751ZM22.4747 0.0936092H2.08951C1.62683 0.0883878 1.18099 0.267072 0.849979 0.590397C0.518971 0.913721 0.329866 1.35524 0.324219 1.81792V22.2877C0.329672 22.7506 0.518661 23.1924 0.849658 23.5161C1.18066 23.8398 1.6266 24.0188 2.08951 24.0138H22.4747C22.9386 24.0197 23.3857 23.8412 23.718 23.5175C24.0504 23.1939 24.2406 22.7515 24.247 22.2877V1.81644C24.2404 1.35284 24.0501 0.910826 23.7178 0.587509C23.3854 0.264192 22.9383 0.086018 22.4747 0.0921323V0.0936092Z"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_4062_37004">
                  <rect width="24.3692" height="24" fill="white" transform="translate(0 0.0921631)"/>
                  </clipPath>
                  </defs>
                  </svg>
            </a>
        </div>
    </div>
</div>


  
          </>
              </main>
      <Footer />
    </>
  );
}







