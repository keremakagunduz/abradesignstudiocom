import { useEffect, useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { fetchProjects } from '../api/portfolio';
import { Link, useLocation } from "react-router-dom";
import styles from '../home.css';
import ScrollToTop from '../components/ScrollToTop';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const imageLoader = (src, width, quality) => {
  return `${src}?format=auto${quality ? `&quality=${quality}` : ''}&width=${width}`;
};

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState(null);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const projectsPerPage = 24;

  useEffect(() => {
    fetchProjects().then(data => {
      setAllProjects(data.data);
      setProjects(data.data.slice(0, projectsPerPage));
    });
  }, []);

  const visibleProjects = useMemo(() => {
    const filteredProjects = filter
      ? allProjects.filter(p => p.categories?.some(cat => cat.id === filter))
      : projects.filter(p => p.categories?.some(cat => cat.id !== 4));

    return filteredProjects.sort((a, b) => a.display_priority - b.display_priority);
  }, [projects, filter]);

  const [userLocale, setUserLocale] = useState(navigator.language || navigator.userLanguage);
  const toggleLanguage = () => {
          setUserLocale((prevLocale) => (prevLocale.startsWith('tr') ? 'en-US' : 'tr-TR'));
      };

  const about_text = userLocale.startsWith('tr') ? (
  <>
  <div className="text-justify">
    <p className="mt-2 text-base leading-7 text-gray-500 max-w-2xl mx-auto">
        2014 yılında Başak Bakkaloğlu ve Cemal Çobanoğlu tarafından İstanbul’da kurulan ABRA Design Studio, mobilya ve ürün tasarımının yanında, mimarlık, iç mimarlık ve kamusal mekan tasarımı disiplinlerinde üretimler yapmaktadır.
    </p>
    <p className="mt-4 text-base leading-7 text-gray-500 max-w-2xl mx-auto">
        ABRA, Türkçe’de denge anlamına gelmektedir ve denge tüm ABRA tasarımları için bir başlangıç noktasıdır. Hem bir tasarım fikrinin ortaya çıkışında hem de kullanıcı-tasarım ve tasarım-mekan arasında bir etkileşim yaratma sürecinde, bu “denge arayışı” ABRA’ya rehberlik etmektedir.
    </p>
    <p className="mt-4 text-base leading-7 text-gray-500 max-w-2xl mx-auto">
        ABRA, çeşitli ürünleri ile bugüne kadar Milano Design Week, Design Week Turkey, Design Spirit, States of Materials, Yan, Deka II gibi pek çok ulusal ve uluslararası fuar ve sergide küratör ya da katılımcı olarak yer aldı, yurt içi ve yurt dışında birçok basın organında tasarımları ile yer buldu, İstanbul Senin Kent Mobilyaları Yarışması birinciliği başta olmak üzere, çeşitli yarışmalarda farklı derecelerde ödüller aldı.
    </p> 
  </div>
</>
):(
  <>
    <div className="text-justify">
    <p className="mt-2 text-base leading-7 text-gray-500 max-w-2xl mx-auto">
    ABRA Design Studio, founded in 2014 in Istanbul by Başak Bakkaloğlu and Cemal Çobanoğlu, engages in furniture and product design as well as architecture, interior architecture, and public space design. 
    </p>
    <p className="mt-4 text-base leading-7 text-gray-500 max-w-2xl mx-auto">
    The name ABRA means "balance" in Turkish, and balance serves as a starting point for all ABRA designs. This "quest for balance" guides the studio both in the emergence of design ideas and in creating interactions between users, design, and space.
    </p>
    <p className="mt-4 text-base leading-7 text-gray-500 max-w-2xl mx-auto">
      To date, ABRA has participated as a curator or exhibitor in many national and international fairs and exhibitions, including Milan Design Week, Design Week Turkey, Design Spirit, States of Materials, Yan, and Deka II. The studio has also been featured in various press outlets both domestically and internationally, and it has received different levels of awards in various competitions, notably winning first place in the Istanbul Your City Furniture Competition.
    </p>
    </div>
</>
);


const basak_cv = userLocale.startsWith('tr') ? (
  <div className="max-w-3xl mx-auto sm:px-4 md:px-8 sm:py-8">
    <div className="flex flex-col sm:flex-row sm:space-x-8">
      <div className="flex-1 mb-4 sm:mb-0 text-justify">
        <p className="mt-2 text-base md:text-lg leading-7 text-gray-600 p-4 sm:p-6 rounded-lg">
          Lisans eğitimini İ.T.Ü. Mimarlık Fakültesi, Mimarlık Bölümü’nde tamamladı. Mezuniyeti sonrasında, çeşitli mimarlık ofislerinde, kentsel 
          tasarım, konut, ofis ve mağaza tasarımı gibi farklı fonksiyon ve ölçekler üzerine çalışma imkanı buldu, deneyim kazandı. Eş zamanlı olarak 
          mobilya ve ürün tasarımına ağırlık verdi. Mimarlık, iç mimarlık ve ürün tasarımı çalışmalarını tek bir isim altında sürdürme isteğiyle, 2014 
          yılında Cemal Çobanoğlu ile “ABRA Design Studio”yu kurdu.

          Kadir Has Üniversitesi, MEF Üniversitesi ve Beykent Üniversitesi’nde temel tasarım, mobilya tasarımı, mobilya tarihi ve ileri sunum teknikleri 
          dersleri verdi. Tasarımları yurt içinde ve yurt dışında pek çok farklı sergi ve yayında yer aldı. Mobilya tasarımı yarışmalarında çeşitli 
          ödüller aldı. Pek çok konferans ve söyleşide konuşmacı olarak yer aldı.
        </p>
      </div>
    </div>
  </div>
) : (
  <div className="max-w-3xl mx-auto sm:px-4 md:px-8 sm:py-8">
    <div className="flex flex-col sm:flex-row sm:space-x-8">
      <div className="flex-1 mb-4 sm:mb-0 text-justify">
        <p className="mt-2 text-base md:text-lg leading-7 text-gray-600 p-4 sm:p-6 rounded-lg">
          She completed her bachelor’s degree in I.T.U. Architecture Faculty, Architecture Department. After graduation, she worked in several 
          architecture offices, where she had the opportunity to work and gained experience on different functions and scales like urban design, 
          residence, office, and showroom designs.

          In the meanwhile, she continued to explore the world of furniture and product design. In 2014, aiming to go on with her works on 
          architecture, interior design, and product design, under a single name, she founded “ABRA Design Studio” with Cemal Cobanoğlu. She gave 
          basic design, furniture design, furniture history, and advanced representation techniques courses at Kadir Has University, MEF University, 
          and Beykent University.
        </p>
      </div>
    </div>
  </div>
);

const cemal_cv = userLocale.startsWith('tr') ? (
  <div className="max-w-3xl mx-auto sm:px-4 md:px-8 sm:py-8">
    <div className="flex flex-col sm:flex-row sm:space-x-8">
      <div className="flex-1 mb-4 sm:mb-0 text-justify">
        <p className="mt-2 text-base md:text-lg leading-7 text-gray-600 p-4 sm:p-6 rounded-lg">
          Lisans eğitimini İ.T.Ü. Mimarlık Fakültesi, İç Mimarlık Bölümü’nde, yüksek lisans eğitimini ise IMIAD’da tamamladı. IMIAD kapsamında İ.T.Ü 
          ile birlikte, Finlandiya’da Lahti University of Applied Sciences’da, İskoçya’da Edinburgh College of Art’da eğitim aldı. Bu süreçte yüzyıl 
          ortası mobilya tasarımı ve İskandinav tasarımı üzerine tezini yazdı.
          Katıldığı kentsel tasarım, iç mimarlık ve mobilya tasarımı yarışmalarında birçok farklı ödül aldı. Mezuniyeti sonrasında, çeşitli iç 
          mimarlık ve tasarım ofislerinde deneyim kazandı. 2014 senesinde Başak Bakkaloğlu ile birlikte “ABRA Design Studio”yu kurdu.
        </p>
      </div>
    </div>
  </div>
) : (
  <div className="max-w-3xl mx-auto sm:px-4 md:px-8 sm:py-8">
    <div className="flex flex-col sm:flex-row sm:space-x-8">
      <div className="flex-1 mb-4 sm:mb-0 text-justify">
        <p className="mt-2 text-base md:text-lg leading-7 text-gray-600 p-4 sm:p-6 rounded-lg">
          He completed his bachelor’s degree in I.T.U. Architecture Faculty, Interior Architecture Department and his postgraduate degree in IMIAD, 
          where he studied in I.T.U, in Finland, Lahti University of Applied Sciences and in Scotland, Edinburgh College of Art.

          In this period, he wrote his thesis on mid-century furniture design and Scandinavian design. He won several different prizes in urban design, 
          interior design and furniture design competitions. After graduation, he gained experience in several interior architecture and design studios. 
          In 2014, he founded “ABRA Design Studio” with Başak Bakkaloğlu.
        </p>
      </div>
    </div>
  </div>
);


  return (
    <>
      <main className="mx-auto">
          <>
            {allProjects.length === 0 ? (
              <p className="text-gray-600">No projects in this category. test deneme</p>
            ) : (
            <Carousel projects={allProjects} />
            )}
      <div id="abra-icon">
        <img
            src={imageLoader("https://d3hojcyp0aupte.cloudfront.net/asset/Abra_Icon_png.png", 400)}
            alt="Abra Design Studio"
            className="max-w-40 ml-0 mr-auto absolute pt-0 sm:pt-6"
        />
      </div>

  <button
      onClick={toggleLanguage}
      className="mt-4 flex self-end px-4 py-2 rounded ml-auto mr-0"
  >

      <span className={userLocale.startsWith('tr') ? 'font-bold' : ''}>TR</span>
      <span className="mx-2">|</span>
      <span className={userLocale.startsWith('tr') ? '' : 'font-bold'}>EN</span>
  </button>
  <div className="block px-6 py-12 pt-24 sm:pt-12 lg:px-48">

    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">ABRA DESIGN STUDIO</h2>
    {about_text}

<div className="flex flex-col xl:flex-row justify-center mt-12 space-y-12 xl:space-y-0 xl:space-x-12">
    <div className="block text-center bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <img 
            src={imageLoader("https://d3hojcyp0aupte.cloudfront.net/asset/Başak_Bakkaloğlu.jpg", 400)} 
            alt="Başak Bakkaloğlu" 
            className="rounded-full mb-4 h-32 w-32 object-cover mx-auto"
        />
        <h3 className="text-xl font-bold text-gray-800">Başak Bakkaloğlu</h3>
        {basak_cv}
        <a href="https://www.linkedin.com/in/ba%C5%9Fak-bakkalo%C4%9Flu-8502b6126/" target="_blank" className="flex justify-center text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-8 h-6" />
        </a>
    </div>

    <div className="block text-center bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <img 
            src={imageLoader("https://d3hojcyp0aupte.cloudfront.net/asset/Cemal_Çobanoğlu.jpg", 400)} 
            alt="Cemal Çobanoğlu" 
            className="rounded-full mb-4 h-32 w-32 object-cover mx-auto"
        />
        <h3 className="text-xl font-bold text-gray-800">Cemal Çobanoğlu</h3>
        {cemal_cv}
        <a href="https://www.linkedin.com/in/cem-cemal-cobanoglu-71aa3531/" target="_blank" className="flex justify-center text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-8 h-6" />
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







