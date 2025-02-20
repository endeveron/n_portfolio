import Hero from '@/components/hero/Hero';
import Skills from '@/components/skills/Skills';

export default function Home() {
  return (
    <div className="flex flex-col m-auto max-w-[1400px] font-[family-name:var(--font-montserrat-sans)]">
      {/* <div className="flex sm:w-[640px]">
        <Endeveron />
      </div> */}

      <div className="flex flex-col md:flex-row font-[family-name:var(--font-montserrat-sans)]">
        <Hero />
        <Skills />
      </div>
      {/* <div className="min-h-screen"></div> */}
    </div>
  );
}
