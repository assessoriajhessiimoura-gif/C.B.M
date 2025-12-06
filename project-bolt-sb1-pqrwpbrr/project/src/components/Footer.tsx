import { Instagram, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#8B7355] to-[#6B5444] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-serif mb-4">Bianca Moura</h3>
            <p className="text-[#E8DCC8]">Lash Designer</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contato</h4>
            <a
              href="https://wa.me/5531991028853"
              className="flex items-center gap-2 text-[#E8DCC8] hover:text-white transition-colors justify-center md:justify-start"
            >
              <Phone size={20} />
              (31) 9 9102-8853
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Redes Sociais</h4>
            <a
              href="https://www.instagram.com/bianca.cilioss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#E8DCC8] hover:text-white transition-colors justify-center md:justify-start"
            >
              <Instagram size={20} />
              @bianca.cilioss
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#A08B76] text-center text-[#E8DCC8]">
          <p>&copy; 2025 Bianca Moura - Lash Designer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
