import '../index.css'
import Navbar from '../components/Navbar.jsx'
import Button from '../components/SpinninButton.jsx'

function ProjectsPage() {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                        Mes Projets
                    </h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Projet 1 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                                <span className="text-white text-2xl font-bold">Serveur Minecraft</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Fondateur & Developpeur </h3>
                                <p className="text-gray-600 mb-4">
                                    En 2018 et pendant 1 an et demi j'ai été le fondateur et développeur d'un serveur minecraft de plus de 15 000 joueurs ! Insomnia MCPE on l'apelle 😉
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">PHP</span>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Nukkit</span>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Hébergement de jeux</span>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-4">
                            Vous pouvez retrouver touts les projets à jour sur mon GitHub, <br/> le "LinkedIn" des développeurs ! 
                        </p>
                        <button className="bg-blue-600 text-black px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            <a href="https://github.com/Kaox260" target='blank_'>Voir tous les projets</a>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* SpinninButton */}
            <div className="fixed bottom-8 right-8">
                <Button text="CONTACT" to="/contact" />
            </div>
        </div>
    )
}

export default ProjectsPage