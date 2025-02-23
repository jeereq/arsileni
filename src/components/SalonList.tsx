import { StarIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const mockSalons = [
  {
    id: 1,
    name: "Salon Elite",
    address: "123 Avenue de la Paix, Kinshasa",
    phone: "+243 123 456 789",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=300&q=80",
    services: ["Coupe", "Coiffure", "Coloration"]
  },
  {
    id: 2,
    name: "Beauty Corner",
    address: "45 Boulevard du 30 Juin, Kinshasa",
    phone: "+243 987 654 321",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=300&q=80",
    services: ["Tresse", "Tissage", "Soins"]
  },
  {
    id: 3,
    name: "Style Studio",
    address: "78 Avenue des Arts, Kinshasa",
    phone: "+243 456 789 123",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=300&q=80",
    services: ["Coupe", "Barbe", "Massage"]
  }
];

export default function SalonList() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Découvrez nos salons partenaires
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Les meilleurs salons de coiffure à Kinshasa, sélectionnés pour leur qualité et leur professionnalisme
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockSalons.map((salon) => (
            <div key={salon.id} className="bg-white rounded-lg shadow-custom overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={salon.image}
                  alt={salon.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{salon.name}</h3>
                <div className="mt-2 flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-sm text-gray-600">{salon.rating}/5</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <MapPinIcon className="h-5 w-5 mr-2" />
                    <span className="text-sm">{salon.address}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    <span className="text-sm">{salon.phone}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {salon.services.map((service) => (
                      <span
                        key={service}
                        className="px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full btn-primary">
                    Prendre rendez-vous
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}