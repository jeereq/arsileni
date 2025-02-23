'use client';

import { useState } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface SalonInfo {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  openingHours: {
    [key: string]: { open: string; close: string };
  };
}

export default function SalonAdminPage() {
  const [salonInfo, setSalonInfo] = useState<SalonInfo>({
    name: 'Salon Elite',
    description: 'Le meilleur salon de coiffure de Kinshasa',
    address: '123 Avenue de la Paix, Kinshasa',
    phone: '+243 123 456 789',
    email: 'contact@salonelite.com',
    openingHours: {
      monday: { open: '09:00', close: '18:00' },
      tuesday: { open: '09:00', close: '18:00' },
      wednesday: { open: '09:00', close: '18:00' },
      thursday: { open: '09:00', close: '18:00' },
      friday: { open: '09:00', close: '18:00' },
      saturday: { open: '09:00', close: '16:00' },
      sunday: { open: '', close: '' }
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implémenter la sauvegarde
    toast.success('Informations mises à jour avec succès');
  };

  const days = {
    monday: 'Lundi',
    tuesday: 'Mardi',
    wednesday: 'Mercredi',
    thursday: 'Jeudi',
    friday: 'Vendredi',
    saturday: 'Samedi',
    sunday: 'Dimanche'
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        Gestion du salon
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Informations générales</h2>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom du salon
              </label>
              <input
                type="text"
                id="name"
                value={salonInfo.name}
                onChange={(e) => setSalonInfo({ ...salonInfo, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                rows={3}
                value={salonInfo.description}
                onChange={(e) => setSalonInfo({ ...salonInfo, description: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Adresse
              </label>
              <input
                type="text"
                id="address"
                value={salonInfo.address}
                onChange={(e) => setSalonInfo({ ...salonInfo, address: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={salonInfo.phone}
                  onChange={(e) => setSalonInfo({ ...salonInfo, phone: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={salonInfo.email}
                  onChange={(e) => setSalonInfo({ ...salonInfo, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Horaires d'ouverture</h2>
          <div className="space-y-4">
            {Object.entries(days).map(([day, label]) => (
              <div key={day} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="text-sm font-medium text-gray-700">{label}</div>
                <div>
                  <input
                    type="time"
                    value={salonInfo.openingHours[day].open}
                    onChange={(e) => setSalonInfo({
                      ...salonInfo,
                      openingHours: {
                        ...salonInfo.openingHours,
                        [day]: { ...salonInfo.openingHours[day], open: e.target.value }
                      }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <input
                    type="time"
                    value={salonInfo.openingHours[day].close}
                    onChange={(e) => setSalonInfo({
                      ...salonInfo,
                      openingHours: {
                        ...salonInfo.openingHours,
                        [day]: { ...salonInfo.openingHours[day], close: e.target.value }
                      }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Enregistrer les modifications
          </button>
        </div>
      </form>
    </div>
  );
}