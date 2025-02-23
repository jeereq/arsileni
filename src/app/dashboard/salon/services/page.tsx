'use client';

import { useState } from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
}

export default function ServicesAdminPage() {
  const [services, setServices] = useState<Service[]>([
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
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setIsEditing(true);
  };

  const handleDelete = async (id: number) => {
    // TODO: Implémenter la suppression
    setServices(services.filter(service => service.id !== id));
    toast.success('Service supprimé avec succès');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingService) {
      // TODO: Implémenter la mise à jour
      setServices(services.map(service => 
        service.id === editingService.id ? editingService : service
      ));
      toast.success('Service mis à jour avec succès');
    } else {
      // TODO: Implémenter l'ajout
      const newService = {
        ...editingService,
        id: Math.max(...services.map(s => s.id)) + 1
      } as Service;
      setServices([...services, newService]);
      toast.success('Service ajouté avec succès');
    }
    setIsEditing(false);
    setEditingService(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Gestion des services
        </h1>
        <button
          onClick={() => {
            setEditingService({
              id: 0,
              name: '',
              description: '',
              price: 0,
              duration: 30
            });
            setIsEditing(true);
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Nouveau service
        </button>
      </div>

      {isEditing ? (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {editingService?.id ? 'Modifier le service' : 'Nouveau service'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom du service
              </label>
              <input
                type="text"
                id="name"
                value={editingService?.name}
                onChange={(e) => setEditingService({ ...editingService!, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                rows={3}
                value={editingService?.description}
                onChange={(e) => setEditingService({ ...editingService!, description: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Prix ($)
                </label>
                <input
                  type="number"
                  id="price"
                  min="0"
                  step="0.01"
                  value={editingService?.price}
                  onChange={(e) => setEditingService({ ...editingService!, price: parseFloat(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                  Durée (minutes)
                </label>
                <input
                  type="number"
                  id="duration"
                  min="5"
                  step="5"
                  value={editingService?.duration}
                  onChange={(e) => setEditingService({ ...editingService!, duration: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setEditingService(null);
                }}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
              >
                {editingService?.id ? 'Mettre à jour' : 'Ajouter'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prix
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Durée
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {services.map((service) => (
                <tr key={service.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{service.name}</div>
                    <div className="text-sm text-gray-500">{service.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${service.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{service.duration} min</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(service)}
                      className="text-purple-600 hover:text-purple-900 mr-4"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}