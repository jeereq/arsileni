import { StarIcon, MapPinIcon, PhoneIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from "framer-motion";

const mockSalons = [
  {
    id: 1,
    name: "Salon Elite",
    description: "Le meilleur salon de coiffure de Kinshasa",
    address: "123 Avenue de la Paix, Kinshasa",
    phone: "+243 123 456 789",
    rating: 4.8,
    reviewCount: 128,
    openNow: true,
    priceRange: "15$ - 80$",
    staff: 8,
    specialities: ["Coupe", "Coiffure", "Coloration"],
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 2,
    name: "Beauty Corner",
    description: "Votre beauté est notre priorité",
    address: "45 Boulevard du 30 Juin, Kinshasa",
    phone: "+243 987 654 321",
    rating: 4.5,
    reviewCount: 96,
    openNow: true,
    priceRange: "20$ - 100$",
    staff: 12,
    specialities: ["Tresse", "Tissage", "Soins"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=300&q=80"
  },
  {
    id: 2,
    name: "Beauty Corner",
    description: "Votre beauté est notre priorité",
    address: "45 Boulevard du 30 Juin, Kinshasa",
    phone: "+243 987 654 321",
    rating: 4.5,
    reviewCount: 96,
    openNow: true,
    priceRange: "20$ - 100$",
    staff: 12,
    specialities: ["Tresse", "Tissage", "Soins"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=300&q=80"
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
        {mockSalons.map((salon, index) => (
              <motion.div
                key={salon.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={salon.image}
                    alt={salon.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                      salon.openNow ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
                    }`}>
                      {salon.openNow ? 'Ouvert' : 'Fermé'}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-0">{salon.name}</h3>
                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
                      <StarIcon className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium text-yellow-700">{salon.rating}</span>
                      <span className="ml-1 text-xs text-gray-500">({salon.reviewCount})</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">{salon.description}</p>
                  
                  <div className="space-y-2 sm:space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPinIcon className="h-4 sm:h-5 w-4 sm:w-5 mr-2 text-purple-500" />
                      <span className="text-sm sm:text-base">{salon.address}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <PhoneIcon className="h-4 sm:h-5 w-4 sm:w-5 mr-2 text-purple-500" />
                      <span className="text-sm sm:text-base">{salon.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CurrencyDollarIcon className="h-4 sm:h-5 w-4 sm:w-5 mr-2 text-purple-500" />
                      <span className="text-sm sm:text-base">{salon.priceRange}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <UserGroupIcon className="h-4 sm:h-5 w-4 sm:w-5 mr-2 text-purple-500" />
                      <span className="text-sm sm:text-base">{salon.staff} professionnels</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Spécialités:</p>
                    <div className="flex flex-wrap gap-2">
                      {salon.specialities.map((speciality) => (
                        <span
                          key={speciality}
                          className="px-2 py-1 text-xs font-medium text-purple-700 bg-purple-50 rounded-full"
                        >
                          {speciality}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/salons/${salon.id}`}
                    className="block w-full text-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
                  >
                    Voir les détails et réserver
                  </Link>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}