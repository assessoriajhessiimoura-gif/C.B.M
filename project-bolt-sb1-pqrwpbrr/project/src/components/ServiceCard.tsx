import { useState } from 'react';

interface ServiceCardProps {
  image: string;
  title: string;
  price: string;
}

export function ServiceCard({ image, title, price }: ServiceCardProps) {
  const [isSwinging, setIsSwinging] = useState(false);

  const handleClick = () => {
    setIsSwinging(true);
    setTimeout(() => setIsSwinging(false), 1000);
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer group ${isSwinging ? 'animate-swing' : ''}`}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6 text-center bg-gradient-to-b from-white to-[#FAF8F5]">
          <h3 className="text-xl font-semibold text-[#6B5444] mb-2">{title}</h3>
          <p className="text-2xl font-bold text-[#4A7C59]">{price}</p>
        </div>
      </div>
    </div>
  );
}
