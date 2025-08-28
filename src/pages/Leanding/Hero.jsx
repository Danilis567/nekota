import React from 'react';
import backgroundBlob from '../../assets/bg.svg'; // Dosya yolu, projenizin yapısına göre '..' sayısı değişebilir.

export default function Hero() {
  const gridStyle = {
    backgroundImage:
      'linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
    backgroundSize: '80px 80px',
  };

  return (
    <section 
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#111111] font-['Poppins']"
      style={gridStyle}
    >
      {/* 👇 DEĞİŞİKLİK: Arkaplan parlaklığı (blob) daha sağ alta çekildi ve boyutu artırılarak yoğunlaştırıldı */}
      <img
        src={backgroundBlob}
        alt="Arkaplan Deseni"
        className="absolute bottom-0 right-0  w-3/4 translate-x-1/3 translate-y-1/3 opacity-50 blur-3xl lg:w-2/3" // w-3/4 ve translate-x/y değerleri yoğunluğu artırır
      />
      {/* 👆 */}

      {/* Ana içerik - En üst katman olan z-30'da */}
      <div className="z-30 flex w-[523px] flex-col items-start gap-8 text-left text-white">
        
        <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
          Türkiye'nin <span className="bg-gradient-to-b from-[#E39848] to-[#DE6861] bg-clip-text text-transparent">Bağımsız Sanatçıları</span> için Dijital Kapınız.
        </h1>
        
        <p className="text-base text-white/70 md:text-lg">
          Türkiye'nin bağımsız sanatçılarını destekleyen, onların eserlerini okurlarla buluşturan yeni nesil bir mobil platform geliştiriyoruz. İlk haberdar olanlardan olmak için e-posta listemize katılın.
        </p>
        
        <form className="flex w-full flex-col items-center gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="E-posta adresiniz..."
            className="w-full flex-grow rounded-full border border-white/30 bg-white/5 px-6 py-3 text-white placeholder:text-white/50 transition-colors focus:border-[#FFA800] focus:outline-none focus:ring-1 focus:ring-[#FFA800]"
            required
          />
          <button
            type="submit"
            className="w-full shrink-0 rounded-full bg-[#FFA800] px-8 py-3 font-bold text-black transition-opacity hover:opacity-90 sm:w-auto"
          >
            HABERDAR OL
          </button>
        </form>
      </div>

      {/* Alttan karartma efekti - z-20 katmanında */}
      <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-[#111111] to-transparent z-20"></div>
    </section>
  );
}