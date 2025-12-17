
import React from 'react';
import Section from './components/Section';

const App: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto px-4">
      {/* 1. Opening Screen */}
      <Section className="text-center">
        <p className="text-[10px] tracking-[0.4em] text-stone-400 mb-6 lowercase font-light">just for a moment.</p>
        <h1 className="text-3xl md:text-4xl font-light leading-snug text-stone-800 lowercase italic serif">
          hey, ara. <br />
          slow down for a bit, <br />
          u're safe here.
        </h1>
        <div className="mt-12 opacity-40">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto animate-bounce">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </Section>

      {/* 2. Reflections */}
      <Section className="text-left items-start">
        <div className="space-y-10">
          <p className="text-lg md:text-xl font-light leading-relaxed lowercase text-stone-600">
            aku tahu isi kepalamu seringkali terlalu berisik. <br />
            kayak ombak yang nggak pernah benar-benar tenang, <br />
            selalu ada yang harus dipikirkan, selalu ada yang harus dijaga.
          </p>
          
          <div className="pl-6 border-l border-[#D9C5B2] py-2">
            <p className="text-stone-500 italic serif lowercase text-lg">
              "it must be tiring to be so strong all the time."
            </p>
          </div>

          <p className="text-lg md:text-xl font-light leading-relaxed lowercase text-stone-600">
            tapi kamu nggak harus 'selesai' hari ini. <br />
            kamu nggak harus punya semua jawabannya sekarang. <br />
            di sini, nggak ada yang nuntut kamu jadi apa-apa.
          </p>
        </div>
      </Section>

      {/* 3. Birthday Highlight */}
      <Section className="text-center">
        <div className="relative py-16 px-8 md:px-12 rounded-[2rem] overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[#F0EAE6] opacity-60 -z-10" />
          
          <p className="text-[10px] tracking-[0.3em] text-[#B07D62] uppercase mb-4 font-medium">december 17, 2025</p>
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-8 lowercase serif">
            happy birthday, ara.
          </h2>
          <div className="w-8 h-[1px] bg-[#B07D62] mx-auto mb-8 opacity-50" />
          <p className="text-stone-600 leading-relaxed lowercase text-lg font-light">
            semoga hari ini rasanya kayak narik napas panjang <br />
            setelah sekian lama menahannya. <br />
            thank u for being exactly who u are.
          </p>
        </div>
      </Section>

      {/* 4. Wishes */}
      <Section className="text-left items-start">
        <h3 className="serif italic text-2xl text-stone-700 mb-12 lowercase">my little wishes for u :</h3>
        <ul className="space-y-12">
          <li className="group">
            <span className="text-[10px] text-[#B07D62] block mb-2 font-medium tracking-widest">01</span>
            <p className="text-stone-600 lowercase leading-relaxed text-lg font-light group-hover:text-stone-800 transition-colors">
              tidur yang nyenyak tanpa mimpi-mimpi yang bikin capek.
            </p>
          </li>
          <li className="group">
            <span className="text-[10px] text-[#B07D62] block mb-2 font-medium tracking-widest">02</span>
            <p className="text-stone-600 lowercase leading-relaxed text-lg font-light group-hover:text-stone-800 transition-colors">
              enough courage to say 'no' to things that drain your soul.
            </p>
          </li>
          <li className="group">
            <span className="text-[10px] text-[#B07D62] block mb-2 font-medium tracking-widest">03</span>
            <p className="text-stone-600 lowercase leading-relaxed text-lg font-light group-hover:text-stone-800 transition-colors">
              setiap kali kamu merasa 'kecil', semoga ada hal sederhana yang bikin kamu sadar kalau kamu berharga.
            </p>
          </li>
        </ul>
      </Section>

      {/* 5. Closing */}
      <Section className="text-center pb-32">
        <div className="space-y-8">
          <p className="text-xl font-light text-stone-700 lowercase leading-relaxed serif italic">
            i'm always a chat away, <br />
            tapi nggak apa-apa kalau kamu lagi mau menghilang sebentar.
          </p>
          <div className="pt-8">
            <p className="text-stone-400 text-xs lowercase tracking-widest font-light">
              take all the time u need. <br />
              happy birthday, human.
            </p>
          </div>
        </div>
      </Section>

      {/* Decorative persistent element */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 opacity-20">
        <div className="w-1 h-1 rounded-full bg-stone-400" />
        <div className="w-1 h-1 rounded-full bg-stone-400" />
        <div className="w-1 h-1 rounded-full bg-stone-400" />
      </div>
    </div>
  );
};

export default App;
