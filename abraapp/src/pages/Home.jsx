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
import { BsEnvelope } from "react-icons/bs";

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
    <p className="mt-2 text-sm sm:text-base leading-7 text-gray-600 max-w-full sm:max-w-4xl">
      Abra Design Studio, 2014 yılında mimar Başak Bakkaloğlu ve yüksek iç mimar Cemal Çobanoğlu tarafından İstanbul'da kurulan; mimarlık, iç mimarlık, kamusal alan tasarımı ve mobilya tasarımı alanlarında çalışan bir tasarım stüdyosudur.
    </p>
    <p className="mt-4 text-sm sm:text-base leading-7 text-gray-600 max-w-full sm:max-w-4xl">
        Kuruluşundan itibaren sekiz yıl boyunca İstanbul merkezli çalışan Abra, 2022’de Ayvalık ofisinin açılmasıyla üretimini iki kent arasında sürdürmeye başlamıştır.
    </p>
    <p className="mt-4 text-sm sm:text-base leading-7 text-gray-600 max-w-full sm:max-w-4xl">
        Abra, Türkçe'de denge anlamına gelir ve denge stüdyonun tasarımları için bir başlangıç noktasıdır. İlk kavramsal fikrin ortaya çıkışından, tasarımın kullanıcıyla etkileşime geçtiği ana kadar bu "denge arayışı" Abra'ya rehberlik eder.
    </p> 
    <p className="mt-4 text-sm sm:text-base leading-7 text-gray-600 max-w-full sm:max-w-4xl">
     Farklı ölçek ve işlevlerde projeler üreten Abra,  bu sayede tasarım refleksini sürekli sınar, her projeyi kendi bağlamı içinde ele alır ve sabit bir dil tekrarının yerine proje özelinde geliştirilen çözümleri önceliklendirir. Kalıcılık ile güncel olma hâli arasındaki dengeyi kuran ve tasarımı ile öne çıkarken kullanıcısına ifade alanı açan üretimler ortaya çıkarmak, Abra’nın temel motivasyonlarındandır. Bu süreçte kurulan multidisipliner işbirlikleri, stüdyonun üretim sürecinin önemli bir parçasıdır. 
    </p> 
  </div>
</>
):(
  <>
    <div className="text-justify">
    <p className="mt-2 text-sm sm:text-base leading-7 text-gray-600 max-w-full sm:max-w-4xl">
    Abra Design Studio is an architecture and design practice founded in Istanbul in 2014 by architect Başak Bakkaloğlu and interior architect Cemal Çobanoğlu. The practice engages with projects across architecture, interiors, public space, and furniture design.
    </p>
    <p className="mt-4 text-sm sm:text-base leading-7 text-gray-600 max-w-full sm:max-w-4xl">
    Originally established in Istanbul, Abra maintained its practice in the city for eight years before expanding to Ayvalık in 2022, and has since continued to operate between the two locations.
    </p>
    <p className="mt-4 text-sm sm:text-base leading-7 text-gray-600 max-w-full sm:max-w-4xl">
      The word “Abra” refers to balance, a notion that lies at the core of the studio’s design approach. From the emergence of an initial concept to the stage at which the project is encountered by the user, this pursuit of balance continues to guide the studio’s process.
    </p>
    <p className="mt-4 text-sm sm:text-base leading-7 text-gray-600 max-w-full sm:max-w-4xl">
      Working across varying scales and programs enables Abra to critically re-evaluate its design approach, respond to the specific conditions of each project, and develop context-specific solutions rather than operating through a fixed formal logic. The practice is shaped by an interest in producing architectural responses that negotiate between permanence and contemporaneity, maintaining a distinct design character while allowing space for individual interpretation. Multidisciplinary collaborations throughout the process constitute an essential part of Abra’s working methodology.
    </p>
    </div>
</>
);

const basak_cv = userLocale.startsWith('tr') ? (
  <p className="text-sm sm:text-base leading-7 text-gray-600 p-3 sm:p-4 rounded-lg text-justify flex-1">
    Lisans eğitimini İ.T.Ü. Mimarlık Fakültesi Mimarlık Bölümü'nde tamamladı. Çeşitli mimarlık ofislerinde kentsel tasarım, konut, ofis ve ticari mekân projelerinde görev aldı; 
    eş zamanlı olarak mobilya ve ürün tasarımı alanında çalışmalar yürüttü. Mimarlık, iç mimarlık ve ürün tasarımı çalışmalarını tek bir çatı altında sürdürme isteğiyle, 
    2014 yılında Cemal Çobanoğlu ile birlikte ABRA Design Studio'yu kurdu. Kadir Has Üniversitesi, MEF Üniversitesi ve Beykent Üniversitesi'nde temel tasarım, mobilya tasarımı, 
    mobilya tarihi ve ileri sunum teknikleri dersleri verdi. Tasarımları yurt içinde ve yurt dışında çeşitli sergi ve yayınlarda yer aldı; mobilya tasarımı alanındaki yarışmalarda 
    ödüller kazandı. Mimarlık ve tasarım alanlarında düzenlenen konferans ve söyleşilerde konuşmacı olarak yer aldı.
  </p>
) : (
  <p className="text-sm sm:text-base leading-7 text-gray-600 p-3 sm:p-4 rounded-lg text-justify flex-1">
    Following her graduation from the Department of Architecture at Istanbul Technical University, she worked on urban design, residential, office and commercial projects at 
    various architectural practices, while also focusing on furniture and product design. In 2014, she co-founded ABRA Design Studio with Cemal Çobanoğlu, aiming to unite her 
    work in architecture, interior architecture and product design. Alongside her studio practice, she led courses in Basic Design, Furniture Design, Furniture History and 
    Visual Communication at Kadir Has University, MEF University and Beykent University. Her work has been featured in various exhibitions and publications in Turkey and abroad 
    and has received awards in furniture design competitions. She participated in conferences and talks on architecture and design as a guest speaker.
  </p>
);

const cemal_cv = userLocale.startsWith('tr') ? (
  <p className="text-sm sm:text-base leading-7 text-gray-600 p-3 sm:p-4 rounded-lg text-justify flex-1">
    Lisans eğitimini İ.T.Ü. Mimarlık Fakültesi İç Mimarlık Bölümü'nde, yüksek lisans eğitimini ise IMIAD'da tamamladı. 
    IMIAD kapsamında Finlandiya'daki Lahti University of Applied Sciences ve İskoçya'daki Edinburgh College of Art'ta eğitim aldı. 
    süreçte yüzyıl ortası mobilya tasarımı ve İskandinav tasarımı üzerine tezini yazdı. Katıldığı kentsel tasarım, iç mimarlık ve mobilya tasarımı yarışmalarında ödüller kazandı. 
    Çeşitli iç mimarlık ve tasarım ofislerinde çalıştıktan sonra, 2014 yılında Başak Bakkaloğlu ile birlikte ABRA Design Studio'yu kurdu. 
    Stüdyo pratiğine paralel olarak, Kadir Has Üniversitesi ve MEF Üniversitesi'nde temel tasarım, mobilya tasarımı ve mobilya tarihi dersleri verdi; 
    Design Week Turkey ve Furnishing & Design Istanbul başta olmak üzere tasarım etkinliklerinde danışmanlık yaptı, 
    mobilya ve iç mekân tasarımı alanındaki yarışmalarda jüri üyeliği görevlerini üstlendi ve tasarım sergilerinde küratöryel çalışmalar yürüttü.
  </p>
) : (
  <p className="text-sm sm:text-base leading-7 text-gray-600 p-3 sm:p-4 rounded-lg text-justify flex-1">
    Educated in Interior Architecture at Istanbul Technical University, he received his master's degree from IMIAD. As part of the IMIAD program, 
    he studied at Lahti University of Applied Sciences in Finland and Edinburgh College of Art in Scotland. His thesis focused on mid-century furniture design and 
    Scandinavian design. He also received awards in urban design, interior architecture, and furniture design competitions. 
    In 2014, he co-founded ABRA Design Studio with Başak Bakkaloğlu, following several years of experience in interior architecture and design offices. 
    In parallel his studio practice, he led courses in Basic Design, Furniture Design and Furniture History at Kadir Has University and MEF University. 
    His work includes consultancy for design events such as Design Week Turkey and Furnishing & Design Istanbul, jury memberships for furniture and interior design competitions, 
    and the curation of design exhibitions.
  </p>
);


const basak_title = userLocale.startsWith('tr') ? (
<p className="text-xl font-semibold text-gray-600">Mimar - İTÜ<br></br>co-Founder</p>
) : (
<p className="text-xl font-semibold text-gray-600">Architect - ITU<br></br>co-Founder</p>
);

const cemal_title = userLocale.startsWith('tr') ? (
<p className="text-xl font-semibold text-gray-600">Y. İç Mimar - İTÜ<br></br>co-Founder</p>
) : (
<p className="text-xl font-semibold text-gray-600">M.Sc. Interior Architect - ITU<br></br>co-Founder</p>
);

  return (
    <>
      <main className="mx-auto">
          <>
          
            {allProjects.length === 0 ? (
              <p className="text-gray-600">No projects in this category.</p>
            ) : (
            <Carousel projects={allProjects} />
            )}
      <div id="abra-icon" className="block md:sticky md:top-0 md:left-0 md:z-50 p-4">
        <ScrollToTop />
      </div>

  <button
      onClick={toggleLanguage}
      className="mt-4 flex self-end px-4 py-2 rounded ml-auto mr-0"
  >

      <span className={userLocale.startsWith('tr') ? 'font-bold' : ''}>TR</span>
      <span className="mx-2">|</span>
      <span className={userLocale.startsWith('tr') ? '' : 'font-bold'}>EN</span>
  </button>
  <div className="block px-6 py-12 pt-24 sm:pt-12 px-4 sm:px-6 md:px-12 lg:px-48 place-self-center">

<h2 className="text-2xl sm:text-3xl font-light text-gray-600 mb-8 sm:mb-12 mt-16 sm:mt-24 underline underline-offset-4 decoration-1 w-fit">Studio</h2>
    {about_text}


<h2 className="text-2xl sm:text-3xl font-light text-gray-600 mb-8 sm:mb-12 mt-16 sm:mt-24 underline underline-offset-4 decoration-1 w-fit">Team</h2>
<div className="flex flex-col lg:grid lg:grid-cols-2 justify-center mt-12 gap-8 lg:gap-12 w-full max-w-4xl mx-auto px-4">
    <div className="flex flex-col bg-white p-4 sm:p-6 rounded-lg shadow-sm">
        <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-600">Başak Bakkaloğlu</h3>
            {basak_title}
        </div>
        <div className="flex items-center mt-3 gap-2">
            <BsEnvelope className="flex-shrink-0 text-gray-400" />
            <p className="text-xs sm:text-sm leading-6 text-gray-400 break-all">basak@abradesignstudio.com</p>
        </div>
        <img 
            src={imageLoader("https://d3hojcyp0aupte.cloudfront.net/asset/Başak_Bakkaloğlu.jpg", 1200)} 
            alt="Başak Bakkaloğlu" 
            className="my-4 object-cover w-full aspect-square sm:aspect-auto sm:max-h-96 rounded"
        />
        
        <div className="w-full text-sm sm:text-base">{basak_cv}</div>
        
        <a href="https://www.linkedin.com/in/ba%C5%9Fak-bakkalo%C4%9Flu-8502b6126/" target="_blank" rel="noreferrer" className="flex justify-center mt-6 text-gray-400 hover:text-gray-600 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-6 h-6" />
        </a>
    </div>

    <div className="flex flex-col bg-white p-4 sm:p-6 rounded-lg shadow-sm">
        <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-600">Cemal Çobanoğlu</h3>
            {cemal_title}
        </div>
        <div className="flex items-center mt-3 gap-2">
            <BsEnvelope className="flex-shrink-0 text-gray-400" />
            <p className="text-xs sm:text-sm leading-6 text-gray-400 break-all">cemal@abradesignstudio.com</p>
        </div>
        <img 
            src={imageLoader("https://d3hojcyp0aupte.cloudfront.net/asset/Cemal_Çobanoğlu.jpg", 1200)} 
            alt="Cemal Çobanoğlu" 
            className="my-4 object-cover w-full aspect-square sm:aspect-auto sm:max-h-96 rounded"
        />
        <div className="w-full text-sm sm:text-base">{cemal_cv}</div>
        
        <a href="https://www.linkedin.com/in/cem-cemal-cobanoglu-71aa3531/" target="_blank" rel="noreferrer" className="flex justify-center mt-6 text-gray-400 hover:text-gray-600 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-6 h-6" />
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







