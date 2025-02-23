export default function ServicesPage() {
  const mockServices = [
    {
      id: 1,
      name: 'Coupe Homme',
      description: 'Coupe de cheveux pour homme avec finition soignée',
      price: 15,
      duration: 30
    },
    {
      id: 2,
      name: 'Tresse',
      description: 'Tressage complet avec choix de style',
      price: 50,
      duration: 120
    },
    {
      id: 3,
      name: 'Coiffure Mariage',
      description: 'Coiffure complète pour mariée et événements',
      price: 80,
      duration: 150
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Services
        </h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
          Ajouter un service
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {mockServices.map((service) => (
            <div key={service.id} className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-purple-600 font-semibold">
                  {service.price} $
                </span>
                <span className="text-gray-500">
                  {service.duration} min
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}