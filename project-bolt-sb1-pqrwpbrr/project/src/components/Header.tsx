import { Instagram } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif text-[#8B7355]">Bianca Moura</h1>
        <a
          href="https://www.instagram.com/bianca.cilioss"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#4A7C59] hover:text-[#3a6347] transition-colors"
        >
          <Instagram size={24} />
          <span className="hidden sm:inline">@bianca.cilioss</span>
        </a>
      </div>
    </header>
  );
}
