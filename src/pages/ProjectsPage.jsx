import '../index.css'
import Navbar from '../components/Navbar.jsx'
import Button from '../components/SpinninButton.jsx'

function ProjectsPage() {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
                        Mes Projets
                    </h1>
                    <div className="grid grid-cols-1 gap-6 sm:gap-8 w-full max-w-md sm:max-w-2xl mx-auto">
                        {/* Projet 1 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-32 sm:h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                                <span className="text-white text-lg sm:text-2xl font-bold">Serveur Minecraft</span>
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-xl font-semibold mb-2">Fondateur & Developpeur </h3>
                                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                                    En 2018 et pendant 1 an et demi j'ai été le fondateur et développeur d'un serveur minecraft de plus de 15 000 joueurs ! Insomnia MCPE on l'appelle 😉
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm">PHP</span>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm">Nukkit</span>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm">Hébergement de jeux</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 sm:mt-12 text-center">
                        <p className="text-gray-600 mb-4 text-sm sm:text-base">
                            Vous pouvez retrouver touts les projets à jour sur mon GitHub, <br/> le "LinkedIn" des développeurs ! 
                        </p>
                        <a href="https://github.com/Kaox260" target="_blank" className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base inline-block">
                            Voir tous les projets
                        </a>
                    </div>
                </div>
            </div>
            {/* SpinninButton */}
            <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8">
                <Button text="CONTACT" to="/contact" />
            </div>
        </div>
    )
}

export default ProjectsPage