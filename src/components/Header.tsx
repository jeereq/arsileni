import Link from 'next/link';
import { ScissorsIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <ScissorsIcon className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-purple-900">
                Salon Manager
              </span>
            </Link>
            <div className="hidden md:flex md:ml-10">
              <Link href="/salons" className="text-gray-700 hover:text-purple-600 px-3 py-2">
                Salons
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth/login" className="text-gray-700 hover:text-purple-600">
              Connexion
            </Link>
            <Link href="/auth/register" className="btn-primary">
              S'inscrire
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}