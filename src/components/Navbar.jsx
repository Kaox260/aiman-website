import { Link } from 'react-router-dom'

function Navbar () {
    return (
        <ul className="h-[36px] flex items-center justify-between w-full px-8">
            <li><Link to="/projets" className="hover:text-blue-600 transition-colors duration-300">Les projets</Link></li>
            <li className="underline"><Link to="/concept" className="hover:text-blue-600 transition-colors duration-300">Le concept</Link></li>
            
            {/* Logo Piscine - Style d'après l'image */}
            <li className="flex-shrink-0">
                <Link to="/" className="flex items-center justify-center w-40 h-20 bg-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden p-2">
                    
                    {/* Carrelage autour de la piscine */}
                    <div className="absolute inset-0 grid grid-cols-10 grid-rows-5">
                        {[...Array(50)].map((_, i) => (
                            <div key={i} className="border border-gray-400/50" style={{ backgroundColor: i % 2 === 0 ? '#d1d5db' : '#e5e7eb' }}></div>
                        ))}
                    </div>

                    {/* Piscine (contenant la bordure + eau) */}
                    <div className="relative w-full h-full rounded-md shadow-inner">
                        {/* Bordure de la piscine */}
                        <div className="absolute inset-0 bg-amber-200 rounded-md"></div>
                        
                        {/* Eau de la piscine */}
                        <div className="absolute inset-1 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-sm overflow-hidden">
                            {/* Texture de l'eau (petits carrés) */}
                            <div className="absolute inset-0 grid grid-cols-20 grid-rows-10 opacity-10">
                                {[...Array(200)].map((_, i) => (
                                    <div key={i} className="border-r border-b border-cyan-200/50"></div>
                                ))}
                            </div>
                             {/* Reflets */}
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
                        </div>

                        {/* Échelle en diagonale */}
                        <div className="absolute top-3 left-4 w-6 h-1 transform -rotate-45 origin-top-left">
                           <div className="h-full w-full relative">
                                <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-300"></div>
                                <div className="absolute right-0 top-0 w-0.5 h-full bg-gray-300"></div>
                                <div className="absolute left-1/4 top-0 w-0.5 h-full bg-gray-400 transform rotate-90 origin-center scale-y-150"></div>
                                <div className="absolute right-1/4 top-0 w-0.5 h-full bg-gray-400 transform rotate-90 origin-center scale-y-150"></div>
                           </div>
                        </div>

                        {/* Tongs */}
                        <div className="absolute bottom-1 left-4 w-2 h-1 bg-blue-500 rounded-full transform -rotate-45"></div>
                        <div className="absolute bottom-1 left-6 w-2 h-1 bg-blue-500 rounded-full transform rotate-45"></div>
                        
                        {/* Chapeau */}
                        <div className="absolute top-1 right-2 w-5 h-5 bg-yellow-300 rounded-full">
                            <div className="absolute inset-0.5 bg-yellow-400 rounded-full"></div>
                            <div className="absolute inset-1.5 bg-yellow-600 rounded-full"></div>
                        </div>

                        {/* Bouées */}
                        <div className="absolute top-2 left-2 w-4 h-4 bg-green-500 rounded-full border border-green-600 shadow-sm animate-pulse"></div>
                        <div className="absolute bottom-2 right-2 w-4 h-4 bg-yellow-400 rounded-full border border-yellow-500 shadow-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>

                         {/* Texte Aiman */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white font-bold text-2xl drop-shadow-lg" style={{ fontFamily: 'Arial, sans-serif' }}>Aiman</span>
                        </div>
                    </div>
                </Link>
            </li>
            
            <li><Link to="/contact" className="border py-[0.3vh] px-2 rounded hover:bg-blue-600 hover:text-white transition-all duration-300">Me contacter</Link></li>
            <li><Link to="/about" className="hover:text-blue-600 transition-colors duration-300">En savoir plus sur moi</Link></li>
        </ul>
    )
}

export default Navbar