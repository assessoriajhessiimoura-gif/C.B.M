import { ServiceCard } from './ServiceCard';

const services = [
  {
    image: '/whatsapp_image_2025-11-29_at_20.21.39.jpeg',
    title: 'Volume Brasileiro',
    price: 'R$ 165,00',
  },
  {
    image: '/whatsapp_image_2025-11-29_at_20.21.38_(2).jpeg',
    title: 'Volume Fox',
    price: 'R$ 165,00',
  },
  {
    image: '/whatsapp_image_2025-11-29_at_20.21.38_(1).jpeg',
    title: 'Volume Fox Marrom',
    price: 'R$ 165,00',
  },
  {
    image: '/whatsapp_image_2025-11-29_at_20.21.39.jpeg',
    title: 'Volume Europeu',
    price: 'R$ 165,00',
  },
  {
    image: '/whatsapp_image_2025-11-29_at_20.21.38_(2).jpeg',
    title: 'Mega Volume',
    price: 'R$ 220,00',
  },
  {
    image: '/whatsapp_image_2025-11-29_at_20.21.38_(1).jpeg',
    title: 'Mega Volume',
    price: 'R$ 220,00',
  },
];

export function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-[#8B7355] mb-4">
          Catálogo de Procedimentos
        </h2>
        <p className="text-center text-[#6B5444] mb-12 max-w-2xl mx-auto">
          Clique nas imagens para ver os detalhes de cada procedimento
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
