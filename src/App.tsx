import React from 'react';
import { Facebook, Youtube, MessageCircle, Map } from 'lucide-react';

function App() {
  const churchAddress = "Resistencia 131, Cipolletti, Río Negro";
  const encodedAddress = encodeURIComponent(churchAddress);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex flex-col items-center justify-start p-4 sm:p-6">
      <div className="w-full max-w-md mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-white px-4">Iglesia Cristiana Evangélica</h1>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-md">
        <div className="space-y-4">
          <a href="https://es-es.facebook.com/icer.rionegrocipolletti.1/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 text-sm sm:text-base">
            <Facebook className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            Facebook
          </a>
          <a href="https://www.youtube.com/@ICERCipolletti" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition duration-300 text-sm sm:text-base">
            <Youtube className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            YouTube
          </a>
          <a href="https://wa.me/2995234973" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base">
            <MessageCircle className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            WhatsApp
          </a>
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-yellow-600 text-white py-3 px-4 rounded-lg hover:bg-yellow-700 transition duration-300 text-sm sm:text-base">
            <Map className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            Cómo llegar
          </a>
        </div>
        
        <div className="mt-6 sm:mt-8 bg-gray-100 rounded-lg p-4">
          <h2 className="text-lg sm:text-xl font-semibold text-center mb-2 text-gray-800">Horarios de Reunión</h2>
          <ul className="text-sm sm:text-base text-gray-700 space-y-1">
            <li>Domingo: 11:00 - Escuela Dominical</li>
            <li>Domingo: 20:00 - Servicio Principal</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
