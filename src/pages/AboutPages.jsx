import '../index.css'
import Navbar from '../components/Navbar.jsx'
import Button from '../components/SpinninButton.jsx'

function AboutPages() {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                        À Propos de Moi
                    </h1>
                    
                    {/* Section Présentation */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-4xl font-bold">A</span>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                                    Développeur Full-Stack Passionné
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Je suis un développeur passionné par la création d'applications web modernes 
                                    et performantes. Avec une approche centrée sur l'utilisateur, je m'efforce 
                                    de créer des expériences numériques exceptionnelles.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Mon parcours m'a permis d'acquérir une expertise solide dans les technologies 
                                    front-end et back-end, avec une attention particulière portée à la qualité 
                                    du code et aux bonnes pratiques de développement.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section Compétences */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                            Compétences Techniques
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-gray-700">Frontend</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">React</span>
                                        <div className="w-32 bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">JavaScript</span>
                                        <div className="w-32 bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">CSS/Tailwind</span>
                                        <div className="w-32 bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-gray-700">Backend</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Node.js</span>
                                        <div className="w-32 bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Express</span>
                                        <div className="w-32 bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">MongoDB</span>
                                        <div className="w-32 bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section Expérience */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                            Expérience Professionnelle
                        </h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-blue-500 pl-6">
                                <h3 className="text-lg font-semibold text-gray-800">Développeur Full-Stack</h3>
                                <p className="text-blue-600 font-medium">2023 - Présent</p>
                                <p className="text-gray-600 mt-2">
                                    Développement d'applications web modernes avec React et Node.js. 
                                    Gestion de projets complets de la conception au déploiement.
                                </p>
                            </div>
                            
                            <div className="border-l-4 border-green-500 pl-6">
                                <h3 className="text-lg font-semibold text-gray-800">Développeur Frontend</h3>
                                <p className="text-green-600 font-medium">2022 - 2023</p>
                                <p className="text-gray-600 mt-2">
                                    Création d'interfaces utilisateur réactives et accessibles. 
                                    Optimisation des performances et de l'expérience utilisateur.
                                </p>
                            </div>
                            
                            <div className="border-l-4 border-purple-500 pl-6">
                                <h3 className="text-lg font-semibold text-gray-800">Stagiaire Développeur</h3>
                                <p className="text-purple-600 font-medium">2021 - 2022</p>
                                <p className="text-gray-600 mt-2">
                                    Première expérience professionnelle dans le développement web. 
                                    Apprentissage des bonnes pratiques et des outils modernes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section Contact */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                            Contact et Réseaux
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <span className="text-2xl mb-2 block">📧</span>
                                <h3 className="font-semibold mb-2">Email</h3>
                                <p className="text-gray-600 text-sm">contact@example.com</p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <span className="text-2xl mb-2 block">💼</span>
                                <h3 className="font-semibold mb-2">LinkedIn</h3>
                                <p className="text-gray-600 text-sm">linkedin.com/in/profile</p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <span className="text-2xl mb-2 block">🐙</span>
                                <h3 className="font-semibold mb-2">GitHub</h3>
                                <p className="text-gray-600 text-sm">github.com/username</p>
                            </div>
                        </div>
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

export default AboutPages
