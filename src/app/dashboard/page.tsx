export default function DashboardPage() {
  const mockData = {
    appointmentsToday: 5,
    services: 8,
    rating: 4.5,
    upcomingAppointments: [
      {
        id: 1,
        start_time: new Date(),
        status: 'confirmed',
        services: { name: 'Coupe Homme' }
      },
      {
        id: 2,
        start_time: new Date(Date.now() + 3600000),
        status: 'pending',
        services: { name: 'Tresse' }
      }
    ]
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        Tableau de bord
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Rendez-vous aujourd'hui
          </h2>
          <p className="text-3xl font-bold text-purple-600">
            {mockData.appointmentsToday}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Services proposés
          </h2>
          <p className="text-3xl font-bold text-purple-600">
            {mockData.services}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Note moyenne
          </h2>
          <p className="text-3xl font-bold text-purple-600">
            {mockData.rating}/5
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Prochains rendez-vous
        </h2>
        
        <div className="divide-y">
          {mockData.upcomingAppointments.map((appointment) => (
            <div key={appointment.id} className="py-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">
                    {new Date(appointment.start_time).toLocaleTimeString('fr-FR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                  <p className="text-gray-600">{appointment.services.name}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  appointment.status === 'confirmed' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {appointment.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}