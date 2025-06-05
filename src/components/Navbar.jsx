import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {

  const [is_menu_clicked, setIs_menu_clicked] = useState(false);
  const updateMenu = () => setIs_menu_clicked(!is_menu_clicked);

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-[100px] bg-[#2A3C7F] flex items-center justify-between z-30" >
        {/* burger */}
        <div className="relative w-12 h-12 cursor-pointer  ml-[20px]" onClick={updateMenu}> {/* hayatımı bitirdin menu */}
          <div className={`absolute top-1/2 left-0 w-full h-[0.3em] bg-white rounded transition-all duration-500 ${is_menu_clicked ? 'rotate-45' : '-translate-y-3'}`} />
          <div className={`absolute top-1/2 left-0 w-full h-[0.3em] bg-white rounded transition-all duration-500 ${is_menu_clicked ? 'opacity-0' : ''}`} />
          <div className={`absolute top-1/2 left-0 w-full h-[0.3em] bg-white rounded transition-all duration-500 ${is_menu_clicked ? '-rotate-45' : 'translate-y-3'}`} />
        </div>



        <div className={`w-1/4 h-fit bg-[#2A3C7F] absolute top-[100px] left-0 z-10 
          transition-transform duration-300 ease-in-out transform rounded-br-lg
          ${is_menu_clicked ? 'translate-x-0' : '-translate-x-full'}`}>


          <Link to="/" className="no-underline text-[rgba(70,70,70,0.8)]">
            <h3 className="text-[rgb(90,90,90)] p-4 text-center text-[1.2em] m-[10px] bg-[whitesmoke] rounded-[10px] transition duration-300 z-10 hover:bg-[rgb(209,218,223)] hover:scale-[1.05] hover:cursor-pointer hover:drop-shadow-[5px_5px_10px_grey]">
              Ana Sayfa
            </h3>
          </Link>
          

          <Link to="/myo" className="no-underline text-[rgba(70,70,70,0.8)]">
            <h3 className="text-[rgb(90,90,90)] p-4 text-center text-[1.2em] m-[10px] bg-[whitesmoke] rounded-[10px] transition duration-300 z-10 hover:bg-[rgb(209,218,223)] hover:scale-[1.05] hover:cursor-pointer hover:drop-shadow-[5px_5px_10px_grey]">
              MYO'lar
            </h3>
          </Link>

          <Link to="/fakulte" className="no-underline text-[rgba(70,70,70,0.8)]">
            <h3 className="text-[rgb(90,90,90)] p-4 text-center text-[1.2em] m-[10px] bg-[whitesmoke] rounded-[10px] transition duration-300 z-10 hover:bg-[rgb(209,218,223)] hover:scale-[1.05] hover:cursor-pointer hover:drop-shadow-[5px_5px_10px_grey]">
              Fakülteler
            </h3>
          </Link>

          <Link to="/bolum" className="no-underline text-[rgba(70,70,70,0.8)]">
            <h3 className="text-[rgb(90,90,90)] p-4 text-center text-[1.2em] m-[10px] bg-[whitesmoke] rounded-[10px] transition duration-300 z-10 hover:bg-[rgb(209,218,223)] hover:scale-[1.05] hover:cursor-pointer hover:drop-shadow-[5px_5px_10px_grey]">
              Bölümler
            </h3>
          </Link>
        </div>


        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center z-[5]">
          <h1 className='text-3xl italic text-white font-bold'>EGE ÜNİVERSİTESİ</h1>
        </div>


        <div className="mr-[15px]">
          <img src="../public/ege.png" alt="Ege Üniversitesi Logo" className="w-[100px] h-[100px]" />
        </div>
      </div>
    </>
  );
}

export default Navbar;