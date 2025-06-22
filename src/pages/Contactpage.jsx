import '../index.css'
import Navbar from '../components/Navbar.jsx'

function Contactpage() {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                        Contactez-moi
                    </h1>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Formulaire de contact */}
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                                Envoyez-moi un message
                            </h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nom complet
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Votre nom"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="votre@email.com"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Sujet
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    >
                                        <option value="">Choisissez un sujet</option>
                                        <option value="projet">Demande de projet</option>
                                        <option value="collaboration">Collaboration</option>
                                        <option value="freelance">Freelance</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Décrivez votre projet ou votre demande..."
                                        required
                                    ></textarea>
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                                >
                                    Envoyer le message
                                </button>
                            </form>
                        </div>

                        {/* Informations de contact */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                                    Informations de contact
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                            <span className="text-xl">📧</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Email</h3>
                                            <p className="text-gray-600">tahiraiman338@gmail.com</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                            <span className="text-xl">📱</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Téléphone</h3>
                                            <p className="text-gray-600">+33 7 66 87 88 21</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                            <span className="text-xl">📍</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Localisation</h3>
                                            <p className="text-gray-600">Paris, France</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                                    Réseaux sociaux
                                </h2>
                                <div className="space-y-4">
                                    <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                                        <span className="text-2xl mr-3">💼</span>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                                            <p className="text-gray-600 text-sm">linkedin.com/in/profile</p>
                                        </div>
                                    </a>
                                    
                                    <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                                        <span className="text-2xl mr-3">🐙</span>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">GitHub</h3>
                                            <p className="text-gray-600 text-sm">github.com/username</p>
                                        </div>
                                    </a>
                                    
                                    <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                                        <span className="text-2xl mr-3">🐦</span>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Twitter</h3>
                                            <p className="text-gray-600 text-sm">@username</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                                    Disponibilité
                                </h2>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Lundi - Mardi</span>
                                        <span className="font-semibold text-green-600">Disponible</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Mercredi -vendredi</span>
                                        <span className="font-semibold text-orange-600">Sur demande</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Samedi - Dimanche</span>
                                        <span className="font-semibold text-red-600">Fermé</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-4">
                                    Temps de réponse : généralement sous 24h
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactpage