

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-3 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center lg:px-[60px]">
      <img 
        src="/logo.jpeg" 
        alt="Logo" 
        className="h-[52px] w-auto object-contain mix-blend-multiply"
      />
    </header>
  );
};
