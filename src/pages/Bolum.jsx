import BolumSlider from "../components/bolum/BolumSlider";

function Bolum() {
  return (
    <div className="min-h-screen flex flex-col overflow-y-hidden">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <h1 className="text-3xl font-bold pt-10 pb-5 text-center">Bölümler</h1>        
        <BolumSlider />
      </div>
    </div>
  );
}

export default Bolum;