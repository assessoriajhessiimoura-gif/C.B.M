export function Maintenance() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#E8DCC8] via-[#F5E6D3] to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A97A]/20 to-[#D4AF87]/20 rounded-3xl transform -rotate-3"></div>
              <img
                src="/whatsapp_image_2025-11-29_at_20.21.39_(1).jpeg"
                alt="Manutenção de Cílios"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-serif text-[#8B7355] mb-8">
              Manutenções
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-[#6B5444] mb-2">
                  Manutenções dos Volumes
                </h3>
                <p className="text-3xl font-bold text-[#4A7C59]">R$ 130,00</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-[#6B5444] mb-2">
                  Manutenção Mega Volume
                </h3>
                <p className="text-3xl font-bold text-[#4A7C59]">R$ 220,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
