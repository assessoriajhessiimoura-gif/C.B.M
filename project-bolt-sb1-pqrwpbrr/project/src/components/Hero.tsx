export function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-[#F5E6D3] via-white to-[#E8DCC8]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-serif text-[#8B7355] mb-6">
              Lash Designer
            </h2>
            <h3 className="text-2xl font-semibold text-[#6B5444] mb-4">Sobre mim</h3>
            <p className="text-lg text-[#5C4F44] leading-relaxed">
              Sou Bianca Moura, Lash Designer especializada em realçar a beleza do olhar
              com técnica, segurança e personalização. Meu objetivo é entregar resultados
              leves, duradouros e adaptados para cada cliente.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF87]/20 to-[#C9A97A]/20 rounded-3xl transform rotate-3"></div>
              <img
                src="/whatsapp_image_2025-11-29_at_21.16.18.jpeg"
                alt="Bianca Moura - Lash Designer"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
