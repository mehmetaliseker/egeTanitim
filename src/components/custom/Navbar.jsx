import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function Navbar() {
  const [is_menu_clicked, setIs_menu_clicked] = useState(false);

  const menuRef = useRef(null);    
  const buttonRef = useRef(null);  

  const updateMenu = () => setIs_menu_clicked(!is_menu_clicked);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&            
        !menuRef.current.contains(e.target) &&  
        buttonRef.current &&           
        !buttonRef.current.contains(e.target)   
      ) {
        setIs_menu_clicked(false);     
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [navbarData, setNavbarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/menuItems.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        return res.json();
      })
      .then((jsonData) => {
        setNavbarData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="pt-60 text-center">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="pt-60 text-center text-red-500">Hata: {error}</div>;
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-[75px] bg-[#2A3C7F] flex items-center px-5 z-80">

        <div
          ref={menuRef}
          className={`w-1/5 h-screen bg-[#2A3C7F] absolute top-[75px] left-0 z-10 transform transition-transform duration-300 ease-in-out rounded-br-lg ${
            is_menu_clicked ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <ul className="list-none flex flex-col gap-5">
            {navbarData.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="no-underline">
                  <span className="relative group text-[whitesmoke] p-4 block text-center text-xl transition duration-300 hover:scale-[1.05] hover:cursor-pointer leading-tight">
                    {item.label}
                    <span className="absolute left-1/2 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-2/3 group-hover:left-1/6"></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-1 items-center justify-between">
          <div
            ref={buttonRef}
            className="relative w-10 h-12 cursor-pointer"
            onClick={updateMenu}
          >
            <div
              className={`absolute top-1/2 left-0 w-full h-[0.2em] bg-white rounded transition-all duration-500 ${
                is_menu_clicked ? 'rotate-45' : '-translate-y-3'
              }`}
            />
            <div
              className={`absolute top-1/2 left-0 w-full h-[0.2em] bg-white rounded transition-all duration-500 ${
                is_menu_clicked ? 'opacity-0' : ''
              }`}
            />
            <div
              className={`absolute top-1/2 left-0 w-full h-[0.2em] bg-white rounded transition-all duration-500 ${
                is_menu_clicked ? '-rotate-45' : 'translate-y-3'
              }`}
            />
          </div>

          <h1 className="text-2xl italic text-white font-[600]">EGE ÜNİVERSİTESİ</h1>

          <a
            href="https://www.ege.edu.tr/"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src="/homeImg/ege.png"
              alt="Ege Üniversitesi Logo"
              className="w-[65px] h-[65px] hover:shadow-2xl rounded-full hover:scale-[1.01] cursor-pointer transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
