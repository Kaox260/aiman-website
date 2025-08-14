import { Link } from 'react-router-dom'
import { useState } from 'react';

function Navbar () {
    const [open, setOpen] = useState(false);
    return (
        <nav className="w-full z-50 relative">
            {/* Desktop Navbar */}
            <ul className="hidden md:flex h-[36px] items-center justify-between w-full px-8 z-50 relative">
                <li><Link to="/projets" className="hover:text-blue-600 transition-colors duration-300">Les projets</Link></li>
                <li className="underline"><Link to="/concept" className="hover:text-blue-600 transition-colors duration-300">Le concept</Link></li>
                {/* Logo Piscine */}
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
            {/* Mobile Navbar */}
            <div className="flex md:hidden items-center justify-between w-full px-4 py-2">
                <button onClick={() => setOpen(!open)} className="focus:outline-none">
                    {/* Burger icon */}
                    <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                {/* Logo piscine centré */}
                <Link to="/" className="flex items-center justify-center w-24 h-12 bg-gray-300 rounded-lg shadow-lg relative overflow-hidden p-1 mx-auto">
                    <div className="absolute inset-0 grid grid-cols-5 grid-rows-3">
                        {[...Array(15)].map((_, i) => (
                            <div key={i} className="border border-gray-400/50" style={{ backgroundColor: i % 2 === 0 ? '#d1d5db' : '#e5e7eb' }}></div>
                        ))}
                    </div>
                    <div className="relative w-full h-full rounded-md shadow-inner">
                        <div className="absolute inset-0 bg-amber-200 rounded-md"></div>
                        <div className="absolute inset-1 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-sm overflow-hidden">
                            <div className="absolute inset-0 grid grid-cols-10 grid-rows-5 opacity-10">
                                {[...Array(50)].map((_, i) => (
                                    <div key={i} className="border-r border-b border-cyan-200/50"></div>
                                ))}
                            </div>
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
                        </div>
                        <div className="absolute top-1 left-2 w-3 h-1 transform -rotate-45 origin-top-left">
                            <div className="h-full w-full relative">
                                <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-300"></div>
                                <div className="absolute right-0 top-0 w-0.5 h-full bg-gray-300"></div>
                            </div>
                        </div>
                        <div className="absolute bottom-1 left-2 w-1.5 h-0.5 bg-blue-500 rounded-full transform -rotate-45"></div>
                        <div className="absolute bottom-1 left-4 w-1.5 h-0.5 bg-blue-500 rounded-full transform rotate-45"></div>
                        <div className="absolute top-1 right-1 w-3 h-3 bg-yellow-300 rounded-full">
                            <div className="absolute inset-0.5 bg-yellow-400 rounded-full"></div>
                        </div>
                        <div className="absolute top-1 left-1 w-2 h-2 bg-green-500 rounded-full border border-green-600 shadow-sm animate-pulse"></div>
                        <div className="absolute bottom-1 right-1 w-2 h-2 bg-yellow-400 rounded-full border border-yellow-500 shadow-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white font-bold text-base drop-shadow-lg" style={{ fontFamily: 'Arial, sans-serif' }}>Aiman</span>
                        </div>
                    </div>
                </Link>
                <div className="w-8"></div> {/* Pour équilibrer l'espace */}
            </div>
            {/* Mobile menu */}
            {open && (
                <ul className="md:hidden flex flex-col items-center gap-2 bg-white shadow-lg rounded-b-lg py-4 px-2 absolute left-0 right-0 top-16 z-50 animate-fade-in-up">
                    <li><Link to="/projets" className="py-2 px-4 w-full block text-center hover:text-blue-600" onClick={() => setOpen(false)}>Les projets</Link></li>
                    <li><Link to="/concept" className="py-2 px-4 w-full block text-center hover:text-blue-600" onClick={() => setOpen(false)}>Le concept</Link></li>
                    <li><Link to="/contact" className="py-2 px-4 w-full block text-center hover:text-blue-600" onClick={() => setOpen(false)}>Me contacter</Link></li>
                    <li><Link to="/about" className="py-2 px-4 w-full block text-center hover:text-blue-600" onClick={() => setOpen(false)}>En savoir plus sur moi</Link></li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar