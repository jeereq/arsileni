'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRightIcon, 
  CalendarIcon, 
  UserGroupIcon, 
  StarIcon,
  ScissorsIcon,
  ChatBubbleBottomCenterTextIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/outline";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SalonList from "../components/SalonList";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-purple-900 to-purple-700">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl h-full lg:w-full lg:pb-28 xl:pb-32"
            >
              <main className="mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 lg:px-8 ">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">Gérez votre salon</span>
                    <span className="block text-purple-300">en toute simplicité</span>
                  </h1>
                  <p className="mt-3 text-base text-purple-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Une plateforme complète pour la gestion de votre salon de coiffure. Rendez-vous, services, clients - tout au même endroit.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        href="/auth/register"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300 md:py-4 md:text-lg md:px-10"
                      >
                        Commencer maintenant
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                        href="/auth/login"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 transition-colors duration-300 md:py-4 md:text-lg md:px-10"
                      >
                        Connexion
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </motion.div>
          </div>
        </div>
        {/* Liste des salons */}
        <SalonList />
        {/* Features Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:text-center"
            >
              <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Fonctionnalités</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Tout ce dont vous avez besoin
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Une suite complète d'outils pour gérer votre salon de coiffure efficacement.
              </p>
            </motion.div>

            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {[
                  {
                    icon: CalendarIcon,
                    title: "Gestion des rendez-vous",
                    description: "Planifiez et gérez vos rendez-vous facilement. Évitez les chevauchements et optimisez votre temps."
                  },
                  {
                    icon: UserGroupIcon,
                    title: "Gestion des clients",
                    description: "Gardez une trace de vos clients, leurs préférences et leur historique de rendez-vous."
                  },
                  {
                    icon: StarIcon,
                    title: "Avis et évaluations",
                    description: "Collectez les avis de vos clients et améliorez votre réputation en ligne."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                    <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-purple-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Des tarifs adaptés à vos besoins
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Choisissez le plan qui correspond le mieux à votre salon
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Débutant",
                  price: "0",
                  features: ["5 rendez-vous par jour", "Gestion des clients", "Support email"]
                },
                {
                  name: "Professionnel",
                  price: "29",
                  features: ["Rendez-vous illimités", "Gestion avancée", "Support prioritaire", "Statistiques"]
                },
                {
                  name: "Entreprise",
                  price: "99",
                  features: ["Multi-salons", "API personnalisée", "Support 24/7", "Formation dédiée"]
                }
              ].map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                    index === 1 ? 'border-2 border-purple-500' : ''
                  }`}
                >
                  <div className="px-6 py-8">
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                      <span className="ml-1 text-xl text-gray-500">/mois</span>
                    </div>
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <CheckIcon className="h-5 w-5 text-purple-500" />
                          <span className="ml-3 text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-8 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-300">
                      Commencer
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-extrabold text-gray-900">Ce que disent nos clients</h2>
              <p className="mt-4 text-lg text-gray-500">
                Découvrez les témoignages de salons qui nous font confiance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Marie K.",
                  role: "Propriétaire de Salon",
                  content: "Cette plateforme a révolutionné la gestion de mon salon. Je gagne un temps précieux chaque jour.",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                },
                {
                  name: "Jean P.",
                  role: "Coiffeur",
                  content: "L'interface est intuitive et mes clients adorent pouvoir prendre rendez-vous en ligne.",
                  image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                },
                {
                  name: "Sophie M.",
                  role: "Gérante",
                  content: "Le support client est excellent et l'équipe est toujours à l'écoute de nos besoins.",
                  image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-purple-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-extrabold text-gray-900">Questions fréquentes</h2>
              <p className="mt-4 text-lg text-gray-500">
                Tout ce que vous devez savoir pour bien démarrer
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "Comment puis-je commencer ?",
                  answer: "Créez simplement votre compte gratuitement et commencez à configurer votre salon en quelques minutes."
                },
                {
                  question: "Puis-je essayer avant de m'engager ?",
                  answer: "Oui, nous offrons une période d'essai gratuite de 14 jours pour tester toutes les fonctionnalités."
                },
                {
                  question: "Le support est-il inclus ?",
                  answer: "Oui, tous nos plans incluent un support par email. Les plans supérieurs bénéficient d'un support prioritaire."
                },
                {
                  question: "Puis-je annuler à tout moment ?",
                  answer: "Oui, vous pouvez annuler votre abonnement à tout moment sans frais supplémentaires."
                }
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-6"
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-900 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                <span className="block">Prêt à transformer</span>
                <span className="block text-purple-300">votre salon ?</span>
              </h2>
              <p className="mt-4 text-lg text-purple-200">
                Commencez gratuitement et découvrez comment nous pouvons vous aider à développer votre activité.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
            >
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/auth/register"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-900 bg-white hover:bg-purple-50 transition-colors duration-300"
                >
                  Commencer maintenant
                  <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function CheckIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}