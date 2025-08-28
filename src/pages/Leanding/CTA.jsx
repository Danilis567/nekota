// src/components/CTA.jsx

import React from 'react';

export default function CTA() {
  return (
    <section className="bg-[#110F0F] py-[80px] px-4 sm:px-[70px] font-['Poppins']">
      {/* Ana Turuncu Kapsayıcı */}
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-8 rounded-2xl bg-[#FFA800] py-16 px-8 text-center">
        
        {/* Başlık */}
        <h2 className="text-4xl font-bold text-black">
          Nekota'ya Katıl!
        </h2>
        
        {/* Açıklama */}
        <p className="max-w-2xl text-lg text-black/80">
          Uygulamamızın lansmanından, sanatçı duyurularına ve yeni içeriklere dair tüm gelişmelerden haberdar olmak için e-posta listemize katılın.
        </p>
        
        {/* E-posta Formu (Kapsül Tasarımı) */}
        <form className="mt-4 flex w-full max-w-lg items-center rounded-full bg-white p-2">
          <input
            type="email"
            placeholder="E-posta adresinizi girin"
            className="w-full flex-grow appearance-none border-none bg-transparent px-4 text-black placeholder:text-gray-500 focus:outline-none focus:ring-0"
            required
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-black px-8 py-3 font-bold text-white transition-opacity hover:opacity-90"
          >
            KATIL
          </button>
        </form>

      </div>
    </section>
  );
}