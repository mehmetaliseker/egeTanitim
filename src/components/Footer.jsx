function Footer() {

  return (
    <>
      <div className="w-full h-35 bg-gray-800 flex justify-around text-white items-center">
        <div className="w-100 h-auto">
          <p>     
            Adresimiz: <span className='underline'>Ege Üniversitesi Rektörlüğü Gençlik Caddesi No : 12 35040 Bornova - İZMİR</span>
          </p>
        </div>
        <div className="w-70 h-auto">
          © 2025 Mehmet Ali ŞEKER <br />
          Tüm Hakları Saklıdır.
        </div>
        <div className="w-100 h-auto">
          <div className="flex gap-5 ">
            <span className='mt-[5px]'>Bize Ulaşın: </span>
            <a href="tel:+902323111010" target="_blank"><img src="../public/whatsapp.png"  alt=""  className="w-10 h-10 filter invert" /></a>
            <a href="https://www.instagram.com/universiteege/?hl=tr" target="_blank"><img src="../public/instagram.png" alt=""  className="w-10 h-10 filter invert" /></a>
            <a href="https://x.com/universiteege" target="_blank"><img src="../public/twitter.png" alt=""  className="w-10 h-10 filter invert" /></a>
            <a href="mailto:egeuniversitesi@egeuniversitesi.hs03.kep.tr" target="_blank"><img src="../public/email.png" alt=""  className="w-10 h-10 filter invert" /></a>
          </div>
        </div>
      </div>    
    </>

  );
}

export default Footer;