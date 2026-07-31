
import { ArrowUpRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';

export const ProfilePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 overflow-hidden font-inter">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-6 lg:px-[60px] py-[40px] flex flex-col justify-start min-h-[80vh]">
          {/* Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] lg:text-[14rem] font-black text-[#edf4ff] whitespace-nowrap pointer-events-none select-none z-0">
            FRONTEND DEV
          </div>
          
          <div className="relative z-10">
            <div className="text-[#0a3d91] text-[13px] tracking-[6px] font-bold mb-[20px] uppercase">
              Freelance Developer
            </div>
            <h1 className="m-0 text-[5rem] lg:text-[10rem] leading-[0.85] font-black tracking-[-4px] max-w-[1000px] uppercase">
              FEBIN RAJ
            </h1>
          </div>

          <div className="mt-[60px] flex flex-col lg:grid lg:grid-cols-[420px_1fr] gap-[60px] items-end relative z-10">
            <div className="overflow-hidden aspect-[3/4] w-full max-w-[420px]">
              <img
                src="/pfp.jpeg"
                alt="Febin Raj"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-end h-full">
              <div className="text-[3rem] lg:text-[6rem] font-black leading-[0.9] text-[#0a3d91] uppercase">
                FRONTEND DEVELOPER
              </div>
              <div className="mt-[12px] text-[1.5rem] lg:text-[3rem] font-bold leading-[0.95] text-slate-500 uppercase">
                NEHRU ARTS AND SCIENCE COLLEGE
              </div>
              <div className="mt-[8px] text-[1rem] lg:text-[1.5rem] font-bold leading-[1] text-slate-400 uppercase tracking-[2px]">
                SELF TAUGHT - MERN STACK DEVELOPER
              </div>
              <div className="mt-[24px] text-[1.2rem] lg:text-[1.75rem] font-bold text-slate-400 tracking-[6px] uppercase">
                BCA BA (FIRST YEAR)
              </div>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="px-6 lg:px-[60px] pt-[80px] pb-[140px] border-t border-slate-200">
          <SocialLink href="https://www.linkedin.com/in/febin-raj03" label="LINKEDIN" />
          <SocialLink href="https://github.com/Febinraj0306" label="GITHUB" />
          <SocialLink href="https://www.instagram.com/_febinnnn_._?igsh=MWNxbHM0YTY2dXo5ZA==" label="INSTAGRAM" />
          <SocialLink href="https://wa.me/918220413870" label="WHATSAPP" />
        </section>
      </main>
    </div>
  );
};

const SocialLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex justify-between items-center no-underline text-slate-900 py-[20px] lg:py-[34px] border-b border-slate-200 group hover:bg-slate-50 transition-colors"
  >
    <span className="text-[2rem] lg:text-[3rem] font-extrabold tracking-[-2px]">{label}</span>
    <span className="text-black group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
      <ArrowUpRight size={40} strokeWidth={3} />
    </span>
  </a>
);
