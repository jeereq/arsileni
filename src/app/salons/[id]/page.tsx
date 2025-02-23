'use client';

import { useState } from 'react';
import { StarIcon, MapPinIcon, PhoneIcon, CalendarIcon, ClockIcon, UserGroupIcon, CurrencyDollarIcon, CheckIcon, ChevronRightIcon, ArrowLeftIcon, TagIcon, FireIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewForm from '@/components/ReviewForm';

const mockSalon = {
  id: 1,
  name: "Salon Elite",
  description: "Le meilleur salon de coiffure de Kinshasa",
  address: "123 Avenue de la Paix, Kinshasa",
  phone: "+243 123 456 789",
  email: "contact@salonelite.com",
  rating: 4.8,
  reviewCount: 128,
  image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=300&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1598887142487-3c854d51d185?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  ],
  services: [
    { 
      id: 1, 
      name: "Coupe Homme", 
      duration: 30, 
      price: 15,
      description: "Coupe de cheveux pour homme avec finition soignée",
      includes: ["Consultation", "Shampoing", "Coupe", "Coiffage"]
    },
    { 
      id: 2, 
      name: "Tresse", 
      duration: 120, 
      price: 50,
      description: "Tressage complet avec choix de style",
      includes: ["Consultation", "Lavage", "Tressage", "Finition"]
    },
    { 
      id: 3, 
      name: "Coiffure Mariage", 
      duration: 150, 
      price: 80,
      description: "Coiffure complète pour mariée et événements",
      includes: ["Consultation", "Essai", "Coiffure", "Accessoires"]
    }
  ],
  openingHours: {
    monday: { open: '09:00', close: '18:00' },
    tuesday: { open: '09:00', close: '18:00' },
    wednesday: { open: '09:00', close: '18:00' },
    thursday: { open: '09:00', close: '18:00' },
    friday: { open: '09:00', close: '18:00' },
    saturday: { open: '09:00', close: '16:00' },
    sunday: { open: '', close: '' }
  },
  staff: [
    {
      name: "Marie K.",
      role: "Coiffeuse Senior",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Jean P.",
      role: "Barbier",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ],
  amenities: ["Wi-Fi gratuit", "Climatisation", "Café/Thé gratuit", "TV", "Magazines", "Paiement par carte"],
  reviews: [
    {
      id: 1,
      author: "Sophie M.",
      rating: 5,
      comment: "Excellent service ! L'équipe est très professionnelle et attentionnée.",
      date: "2024-02-15",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      author: "Jean P.",
      rating: 4,
      comment: "Très bon salon, je recommande ! Le personnel est accueillant et compétent.",
      date: "2024-02-10",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ],
  promotions: [
    {
      id: 1,
      title: "Offre du mois",
      service: "Coupe + Barbe",
      originalPrice: 30,
      discountedPrice: 25,
      description: "Profitez d'une coupe tendance et d'un soin barbe complet",
      validUntil: "2024-03-31",
      conditions: "Valable du lundi au jeudi",
      isPopular: true
    },
    {
      id: 2,
      title: "Pack Tresses",
      service: "Tresses + Soin",
      originalPrice: 65,
      discountedPrice: 50,
      description: "Tresses au choix avec un soin profond offert",
      validUntil: "2024-03-15",
      conditions: "Sur rendez-vous uniquement",
      isPopular: false
    },
    {
      id: 3,
      title: "Spécial Étudiants",
      service: "Coupe Classique",
      originalPrice: 20,
      discountedPrice: 15,
      description: "Réduction sur présentation de la carte étudiante",
      validUntil: "2024-06-30",
      conditions: "Valable tous les jours",
      isPopular: true
    }
  ]
};

export default function SalonDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [activeTab, setActiveTab] = useState('informations');
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooking(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Rendez-vous réservé avec succès !');
      setSelectedDate('');
      setSelectedTime('');
      setSelectedService('');
    } catch (error) {
      toast.error('Une erreur est survenue lors de la réservation');
    } finally {
      setIsBooking(false);
    }
  };

  const handleReviewSubmit = async (review: { rating: number; comment: string }) => {
    setIsSubmittingReview(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Merci pour votre avis !');
      setShowReviewForm(false);
    } catch (error) {
      toast.error('Une erreur est survenue lors de l\'envoi de l\'avis');
    } finally {
      setIsSubmittingReview(false);
    }
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="mb-4 sm:mb-6">
            <Link
              href="/salons"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-200"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              <span>Retour aux salons</span>
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="relative h-64 sm:h-96 w-full overflow-hidden">
              <img
                src={mockSalon.image}
                alt={mockSalon.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white">
                <h1 className="text-2xl sm:text-4xl font-bold mb-2">{mockSalon.name}</h1>
                <p className="text-base sm:text-lg opacity-90">{mockSalon.description}</p>
                <div className="flex items-center mt-4">
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <StarIcon className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-400" />
                    <span className="ml-2 font-semibold">{mockSalon.rating}/5</span>
                    <span className="ml-1 text-sm">({mockSalon.reviewCount} avis)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-8">
              <div className="flex overflow-x-auto scrollbar-hide space-x-4 mb-6 sm:mb-8 border-b">
                {['informations', 'promotions', 'services', 'équipe', 'galerie', 'avis'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 sm:px-4 py-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 border-b-2 -mb-px ${
                      activeTab === tab
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    {tab === 'avis' && ` (${mockSalon.reviews.length})`}
                    {tab === 'promotions' && ` (${mockSalon.promotions.length})`}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="lg:col-span-2">
                  {activeTab === 'informations' && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">À propos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="flex items-center text-gray-600">
                              <MapPinIcon className="h-5 w-5 text-purple-500 mr-3" />
                              <span>{mockSalon.address}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <PhoneIcon className="h-5 w-5 text-purple-500 mr-3" />
                              <span>{mockSalon.phone}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <CurrencyDollarIcon className="h-5 w-5 text-purple-500 mr-3" />
                              <span>À partir de 15$</span>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-2">Services inclus</h3>
                            <div className="grid grid-cols-2 gap-2">
                              {mockSalon.amenities.map((amenity) => (
                                <div key={amenity} className="flex items-center text-gray-600">
                                  <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                                  <span className="text-sm">{amenity}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Horaires d'ouverture</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(days).map(([day, label]) => (
                            <div key={day} className="flex justify-between items-center py-2 border-b border-gray-100">
                              <span className="font-medium text-gray-900">{label}</span>
                              <span className="text-gray-600">
                                {mockSalon.openingHours[day].open 
                                  ? `${mockSalon.openingHours[day].open} - ${mockSalon.openingHours[day].close}`
                                  : 'Fermé'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'promotions' && (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-6">Promotions en cours</h2>
                      <div className="space-y-6">
                        {mockSalon.promotions.map((promo) => (
                          <motion.div
                            key={promo.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative bg-white rounded-xl shadow-md overflow-hidden"
                          >
                            {promo.isPopular && (
                              <div className="absolute top-4 right-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                                  <FireIcon className="h-4 w-4 mr-1" />
                                  Populaire
                                </span>
                              </div>
                            )}
                            
                            <div className="p-6">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-900">{promo.title}</h3>
                                  <p className="text-purple-600 font-medium mt-1">{promo.service}</p>
                                </div>
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-purple-600">
                                    ${promo.discountedPrice}
                                  </div>
                                  <div className="text-sm text-gray-500 line-through">
                                    ${promo.originalPrice}
                                  </div>
                                </div>
                              </div>
                              
                              <p className="mt-4 text-gray-600">{promo.description}</p>
                              
                              <div className="mt-4 space-y-2">
                                <div className="flex items-center text-sm text-gray-500">
                                  <TagIcon className="h-5 w-5 text-gray-400 mr-2" />
                                  <span>{promo.conditions}</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-500">
                                  <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                                  <span>Valable jusqu'au {format(new Date(promo.validUntil), 'dd MMMM yyyy', { locale: fr })}</span>
                                </div>
                              </div>
                              
                              <button
                                onClick={() => {
                                  setSelectedService(promo.service);
                                  document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="mt-6 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
                              >
                                Réserver cette offre
                                <ChevronRightIcon className="ml-2 h-5 w-5" />
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'services' && (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-6">Nos services</h2>
                      <div className="space-y-6">
                        {mockSalon.services.map((service) => (
                          <div key={service.id} className="bg-gray-50 rounded-lg p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                                <p className="text-gray-600">{service.description}</p>
                              </div>
                              <div className="text-right">
                                <span className="text-2xl font-bold text-purple-600">${service.price}</span>
                                <p className="text-sm text-gray-500">{service.duration} min</p>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-2">Ce qui est inclus :</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {service.includes.map((item) => (
                                  <div key={item} className="flex items-center text-gray-600">
                                    <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                                    <span className="text-sm">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'équipe' && (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-6">Notre équipe</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {mockSalon.staff.map((member) => (
                          <div key={member.name} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="h-16 w-16 rounded-full object-cover"
                            />
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                              <p className="text-gray-600">{member.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'galerie' && (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-6">Galerie photos</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {mockSalon.gallery.map((image, index) => (
                          <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                            <img
                              src={image}
                              alt={`Galerie ${index + 1}`}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'avis' && (
                    <div className="space-y-8">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-900">Avis des clients</h2>
                        {!showReviewForm && (
                          <button
                            onClick={() => setShowReviewForm(true)}
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
                          >
                            Donner votre avis
                          </button>
                        )}
                      </div>

                      {showReviewForm && (
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium text-gray-900">Votre avis</h3>
                            <button
                              onClick={() => setShowReviewForm(false)}
                              className="text-gray-400 hover:text-gray-500"
                            >
                              ✕
                            </button>
                          </div>
                          <ReviewForm
                            onSubmit={handleReviewSubmit}
                            isSubmitting={isSubmittingReview}
                          />
                        </div>
                      )}

                      <div className="space-y-6">
                        {mockSalon.reviews.map((review) => (
                          <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-lg shadow p-6"
                          >
                            <div className="flex items-start">
                              <img
                                src={review.avatar}
                                alt={review.author}
                                className="h-12 w-12 rounded-full object-cover"
                              />
                              <div className="ml-4 flex-1">
                                <div className="flex items-center justify-between">
                                  <h3 className="text-lg font-medium text-gray-900">{review.author}</h3>
                                  <time className="text-sm text-gray-500">
                                    {format(new Date(review.date), 'dd MMMM yyyy', { locale: fr })}
                                  </time>
                                </div>
                                <div className="flex items-center mt-1">
                                  {[...Array(5)].map((_, i) => (
                                    <StarIcon
                                      key={i}
                                      className={`h-5 w-5 ${
                                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <p className="mt-3 text-gray-600">{review.comment}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-1">
                  <div id="booking-form" className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:sticky lg:top-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Réserver un rendez-vous</h2>
                    <form onSubmit={handleBooking} className="space-y-4">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                          Service
                        </label>
                        <select
                          id="service"
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          required
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        >
                          <option value="">Sélectionnez un service</option>
                          {mockSalon.services.map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.name} - {service.duration}min - ${service.price}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                          Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={format(new Date(), 'yyyy-MM-dd')}
                          required
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                          Heure
                        </label>
                        <input
                          type="time"
                          id="time"
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          required
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isBooking}
                        className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 transition-colors duration-200"
                      >
                        {isBooking ? 'Réservation en cours...' : 'Réserver maintenant'}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}