'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  HomeIcon, 
  CalendarIcon, 
  UserGroupIcon, 
  Cog6ToothIcon,
  ScissorsIcon,
  BuildingStorefrontIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { useAuth } from '@/store/auth';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const logout = useAuth((state) => state.logout);

  const handleSignOut = async () => {
    // Simulation de déconnexion
    await new Promise(resolve => setTimeout(resolve, 500));
    logout();
    toast.success('Déconnexion réussie');
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <ScissorsIcon className="h-8 w-8 text-purple-600" />
                <span className="ml-2 text-xl font-bold text-purple-900">
                  Salon Manager
                </span>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center text-gray-700 hover:text-purple-600"
            >
              <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-2" />
              Déconnexion
            </button>
          </div>
        </div>
      </nav>

      <div className="flex">
        <div className="w-64 bg-white shadow-sm h-[calc(100vh-4rem)] p-4">
          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg"
            >
              <HomeIcon className="h-5 w-5 mr-3" />
              Tableau de bord
            </Link>
            <Link
              href="/dashboard/appointments"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg"
            >
              <CalendarIcon className="h-5 w-5 mr-3" />
              Rendez-vous
            </Link>
            <Link
              href="/dashboard/salon"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg"
            >
              <BuildingStorefrontIcon className="h-5 w-5 mr-3" />
              Mon salon
            </Link>
            <Link
              href="/dashboard/salon/services"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg"
            >
              <ScissorsIcon className="h-5 w-5 mr-3" />
              Services
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg"
            >
              <Cog6ToothIcon className="h-5 w-5 mr-3" />
              Paramètres
            </Link>
          </nav>
        </div>

        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
}