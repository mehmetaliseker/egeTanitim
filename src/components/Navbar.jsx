import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

function Navbar() {
  const [is_menu_clicked, setIs_menu_clicked] = useState(false);
  const updateMenu = () => setIs_menu_clicked(!is_menu_clicked);

  const menuItems = [
    { path: "/", label: "Ana Sayfa" },
    { path: "/myo", label: "MYO'lar" },
    { path: "/bolum", label: "Bölümler" },
    { path: "/fakulte", label: "Fakülteler" }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-[75px] bg-[#2A3C7F] flex items-center z-30">
        {/* Side menu */}
        <div className={`w-1/5 h-screen bg-[#2A3C7F] absolute top-[75px] left-0 z-10 
          transition-transform duration-300 ease-in-out transform rounded-br-lg
          ${is_menu_clicked ? 'translate-x-0' : '-translate-x-full'}`}>

          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="no-underline">
              <h3 className="relative group text-[whitesmoke] p-4 text-center text-xl m-[20px] transition duration-300 hover:scale-[1.05] hover:cursor-pointer leading-tight">
                {item.label}
                {/* alt cizgi */}
                <span className="absolute left-1/2 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-2/3 group-hover:left-1/6"></span>
              </h3>
            </Link>
          ))}
        </div>

        {/* burger */}
        <div className="flex items-center justify-between w-full flex-row text-center z-[5] ">
          <div className="relative w-12 h-12 cursor-pointer ml-[20px]" onClick={updateMenu}>
            <div className={`absolute top-1/2 left-0 w-full h-[0.3em] bg-white rounded transition-all duration-500 ${is_menu_clicked ? 'rotate-45' : '-translate-y-3'}`} />
            <div className={`absolute top-1/2 left-0 w-full h-[0.3em] bg-white rounded transition-all duration-500 ${is_menu_clicked ? 'opacity-0' : ''}`} />
            <div className={`absolute top-1/2 left-0 w-full h-[0.3em] bg-white rounded transition-all duration-500 ${is_menu_clicked ? '-rotate-45' : 'translate-y-3'}`} />
          </div>

          <h1 className='text-2xl italic text-white font-[600]'>EGE ÜNİVERSİTESİ</h1>

          <a href="https://www.ege.edu.tr/" target='_blank' className='flex items-center justify-center m-5'>
            <img src="../public/ege.png" alt="Ege Üniversitesi Logo" className="w-[65px] h-[65px] hover:shadow-2xl rounded-full hover:scale-[1.01] cursor-pointer transition-all duration-300" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;