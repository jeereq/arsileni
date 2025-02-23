'use client';

// ... (keep imports)

export default function SalonsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Salons de coiffure
              </h1>
              <p className="mt-2 text-gray-600">
                Découvrez les meilleurs salons de coiffure à Kinshasa
              </p>
            </div>
            <div className="flex space-x-4">
              <select className="w-full sm:w-auto rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
                <option>Trier par note</option>
                <option>Trier par prix</option>
                <option>Trier par popularité</option>
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
      </main>

      <Footer />
    </div>
  );
}