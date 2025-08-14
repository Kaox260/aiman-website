import '../index.css'
import Navbar from '../components/Navbar.jsx'
import Button from '../components/SpinninButton.jsx'

function Conceptpage() {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-white relative overflow-hidden">
                {/* Cercles animés en arrière-plan */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-4 w-20 h-20 sm:w-32 sm:h-32 bg-blue-200 rounded-full opacity-20 animate-float1"></div>
                    <div className="absolute top-32 right-8 w-16 h-16 sm:w-24 sm:h-24 bg-purple-200 rounded-full opacity-30 animate-float2"></div>
                    <div className="absolute bottom-32 left-8 w-24 h-24 sm:w-40 sm:h-40 bg-green-200 rounded-full opacity-15 animate-float3"></div>
                    <div className="absolute top-40 left-1/3 w-12 h-12 sm:w-20 sm:h-20 bg-pink-200 rounded-full opacity-25 animate-float4"></div>
                    <div className="absolute bottom-10 right-1/4 w-24 h-24 sm:w-36 sm:h-36 bg-yellow-200 rounded-full opacity-20 animate-float5"></div>
                    <div className="absolute top-1/4 right-1/3 w-16 h-16 sm:w-28 sm:h-28 bg-cyan-200 rounded-full opacity-30 animate-float6"></div>
                    <div className="absolute bottom-1/3 left-1/4 w-10 h-10 sm:w-16 sm:h-16 bg-indigo-200 rounded-full opacity-25 animate-float7"></div>
                    <div className="absolute top-1/2 left-1/2 w-28 h-28 sm:w-44 sm:h-44 bg-orange-200 rounded-full opacity-15 animate-float8"></div>
                </div>

                <style jsx>{`
                    @keyframes float1 {
                        0%, 100% { transform: translate(0, 0) rotate(0deg); }
                        25% { transform: translate(20px, -30px) rotate(90deg); }
                        50% { transform: translate(-15px, 25px) rotate(180deg); }
                        75% { transform: translate(30px, 15px) rotate(270deg); }
                    }
                    @keyframes float2 {
                        0%, 100% { transform: translate(0, 0) scale(1); }
                        33% { transform: translate(-25px, 20px) scale(1.2); }
                        66% { transform: translate(15px, -40px) scale(0.8); }
                    }
                    @keyframes float3 {
                        0%, 100% { transform: translate(0, 0) rotate(0deg); }
                        20% { transform: translate(40px, -20px) rotate(45deg); }
                        40% { transform: translate(-30px, 30px) rotate(90deg); }
                        60% { transform: translate(25px, 40px) rotate(135deg); }
                        80% { transform: translate(-40px, -30px) rotate(180deg); }
                    }
                    @keyframes float4 {
                        0%, 100% { transform: translate(0, 0) scale(1); }
                        25% { transform: translate(30px, 15px) scale(1.3); }
                        50% { transform: translate(-20px, -25px) scale(0.7); }
                        75% { transform: translate(15px, 35px) scale(1.1); }
                    }
                    @keyframes float5 {
                        0%, 100% { transform: translate(0, 0) rotate(0deg); }
                        16% { transform: translate(-35px, 20px) rotate(60deg); }
                        32% { transform: translate(25px, -30px) rotate(120deg); }
                        48% { transform: translate(40px, 25px) rotate(180deg); }
                        64% { transform: translate(-20px, -40px) rotate(240deg); }
                        80% { transform: translate(30px, 15px) rotate(300deg); }
                    }
                    @keyframes float6 {
                        0%, 100% { transform: translate(0, 0) scale(1); }
                        33% { transform: translate(-20px, -35px) scale(1.4); }
                        66% { transform: translate(35px, 20px) scale(0.6); }
                    }
                    @keyframes float7 {
                        0%, 100% { transform: translate(0, 0) rotate(0deg); }
                        14% { transform: translate(25px, -15px) rotate(51deg); }
                        28% { transform: translate(-30px, 25px) rotate(102deg); }
                        42% { transform: translate(20px, 35px) rotate(153deg); }
                        56% { transform: translate(-25px, -20px) rotate(204deg); }
                        70% { transform: translate(35px, -30px) rotate(255deg); }
                        84% { transform: translate(-15px, 40px) rotate(306deg); }
                    }
                    @keyframes float8 {
                        0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
                        20% { transform: translate(-40px, 30px) scale(1.2) rotate(72deg); }
                        40% { transform: translate(30px, -40px) scale(0.8) rotate(144deg); }
                        60% { transform: translate(25px, 35px) scale(1.3) rotate(216deg); }
                        80% { transform: translate(-35px, -25px) scale(0.9) rotate(288deg); }
                    }
                    .animate-float1 { animation: float1 8s ease-in-out infinite; }
                    .animate-float2 { animation: float2 12s ease-in-out infinite; }
                    .animate-float3 { animation: float3 15s ease-in-out infinite; }
                    .animate-float4 { animation: float4 10s ease-in-out infinite; }
                    .animate-float5 { animation: float5 18s ease-in-out infinite; }
                    .animate-float6 { animation: float6 14s ease-in-out infinite; }
                    .animate-float7 { animation: float7 20s ease-in-out infinite; }
                    .animate-float8 { animation: float8 16s ease-in-out infinite; }
                `}</style>

                <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12 relative z-10">
                    <div className="text-center mb-10 sm:mb-16">
                        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Le Concept
                        </h1>
                        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-12 mb-8 sm:mb-12 border border-gray-100 backdrop-blur-sm">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                            Mon Approche du Développement
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 sm:mb-12 text-center text-base sm:text-lg max-w-2xl sm:max-w-4xl mx-auto">
                            Je crois en une approche centrée sur l'utilisateur, ou chaque concept de deisgn est mis à dispotition du concept <br/>
                            et dans le respect du projet, je crois qu'on peut rendre un projet meilleur si on crée un design qui dépasse les attentes.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 justify-center max-w-4xl mx-auto">
                            <div className="text-center group">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                    <span className="text-3xl">💡</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Innovation</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Utilisation des technologies les plus récentes pour créer des solutions modernes
                                </p>
                            </div>
                            
                            <div className="text-center group">
                                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                    <span className="text-3xl">🎯</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Simplicité</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Interfaces intuitives et expériences utilisateur fluides
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-12 mb-8 sm:mb-12 border border-gray-100 backdrop-blur-sm">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                            Méthodologie de Travail
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            <div className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                    1
                                </div>
                                <h3 className="font-bold mb-2 text-gray-900">Analyse</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Compréhension approfondie des besoins et définition des objectifs
                                </p>
                            </div>
                            
                            <div className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                    2
                                </div>
                                <h3 className="font-bold mb-2 text-gray-900">Design</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Création de maquettes et prototypes pour valider l'expérience utilisateur
                                </p>
                            </div>
                            
                            <div className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                    3
                                </div>
                                <h3 className="font-bold mb-2 text-gray-900">Développement</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Implémentation avec des pratiques de développement modernes
                                </p>
                            </div>
                            
                            <div className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                    4
                                </div>
                                <h3 className="font-bold mb-2 text-gray-900">Déploiement</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Déploiement en production
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-12 border border-gray-100 backdrop-blur-sm">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                            Technologies et Outils
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                    <span className="text-2xl">⚛️</span>
                                </div>
                                <p className="font-semibold text-gray-900">React</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <p className="font-semibold text-gray-900">Node.js</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                    <span className="text-2xl">🎨</span>
                                </div>
                                <p className="font-semibold text-gray-900">Tailwind CSS</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <p className="font-semibold text-gray-900">Vite</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SpinninButton */}
                <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8">
                    <Button text="CONTACT" to="/contact" />
                </div>
            </div>
        </div>
    )
}

export default Conceptpage
