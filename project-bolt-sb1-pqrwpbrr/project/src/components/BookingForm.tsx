import { useState } from 'react';
import { Send } from 'lucide-react';

const procedures = [
  { name: 'Volume Brasileiro', price: 'R$165,00' },
  { name: 'Volume Fox', price: 'R$165,00' },
  { name: 'Volume Fox Marrom', price: 'R$165,00' },
  { name: 'Volume Europeu', price: 'R$165,00' },
  { name: 'Mega Volume', price: 'R$220,00' },
];

export function BookingForm() {
  const [selectedProcedure, setSelectedProcedure] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProcedure) return;

    const message = encodeURIComponent(
      `Olá Bianca! Quero agendar esse procedimento: ${selectedProcedure}.`
    );
    const whatsappUrl = `https://wa.me/5531991028853?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-serif text-center text-[#8B7355] mb-4">
          Agende seu Procedimento
        </h2>
        <p className="text-center text-[#6B5444] mb-12">
          Selecione o procedimento desejado e entre em contato pelo WhatsApp
        </p>
        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#FAF8F5] to-white rounded-3xl shadow-2xl p-8">
          <div className="mb-6">
            <label className="block text-[#6B5444] font-semibold mb-3 text-lg">
              Escolha o procedimento
            </label>
            <select
              value={selectedProcedure}
              onChange={(e) => setSelectedProcedure(e.target.value)}
              className="w-full px-4 py-4 rounded-xl border-2 border-[#E8DCC8] focus:border-[#4A7C59] focus:outline-none text-[#5C4F44] text-lg transition-colors"
              required
            >
              <option value="">Selecione um procedimento</option>
              {procedures.map((proc, index) => (
                <option key={index} value={`${proc.name} ${proc.price}`}>
                  {proc.name} - {proc.price}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#4A7C59] hover:bg-[#3a6347] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Send size={24} />
            Agendar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
