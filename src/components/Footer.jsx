function Footer() {

  return (
    <>
      <div className="w-full h-35 bg-gray-800 flex justify-around text-white items-center">
        <div className="w-100 h-auto">
          <p>     
            Adresimiz: <span className='underline'> <a href="https://www.google.com/maps/place/Ege+%C3%9Cniversitesi/@38.4566034,27.2281981,17z/data=!3m1!4b1!4m6!3m5!1s0x14b97cd613b60187:0x92f60c749816beea!8m2!3d38.4566034!4d27.2281981!16zL20vMGN0dDZj?entry=ttu&g_ep=EgoyMDI1MDYwOS4xIKXMDSoASAFQAw%3D%3D" target="_blank">
            Ege Üniversitesi Rektörlüğü Gençlik Caddesi No : 12 35040 Bornova - İZMİR</a></span>
          </p>
        </div>
        <div className="w-70 h-auto">
          © 2025 Mehmet Ali ŞEKER <br />
          Tüm Hakları Saklıdır.
        </div>
        <div className="w-100 h-auto">
          <div className="flex gap-5 ">
            <span className='mt-[5px]'>Bize Ulaşın: </span>
            <a href="tel:+902323111010" target="_blank"><img src="../public/whatsapp.png"  alt=""  className="w-6 h-6 mt-[5px] filter invert" /></a>
            <a href="https://www.instagram.com/universiteege/?hl=tr" target="_blank"><img src="../public/instagram.png" alt=""  className="w-6 h-6 mt-[5px] filter invert" /></a>
            <a href="https://x.com/universiteege" target="_blank"><img src="../public/twitter.png" alt=""  className="w-6 h-6 mt-[5px] filter invert" /></a>
            <a href="mailto:egeuniversitesi@egeuniversitesi.hs03.kep.tr" target="_blank"><img src="../public/email.png" alt=""  className="w-6 h-6 mt-[5px] filter invert" /></a>
          </div>
        </div>
      </div>    
    </>

  );
}

export default Footer;