import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css'
import Navbar from '../components/Navbar.jsx'
import linkedinPixel from '../assets/linkedin_pixelart.png';
import githubPixel from '../assets/github_pixelart.png';

function Contactpage() {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, sent, error
    const [statusMessage, setStatusMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');
        setStatusMessage('Envoi en cours...');

        emailjs.sendForm('service_04cnfeu', 'template_63c2r0e', form.current, 'dZPuMKQw29eHweehX')
            .then((result) => {
                console.log(result.text);
                setStatus('sent');
                setStatusMessage('Message envoyé avec succès !');
                form.current.reset(); // Clear the form
                setTimeout(() => {
                    setStatus('idle');
                    setStatusMessage('');
                }, 5000); // Reset status after 5 seconds
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setStatusMessage('Une erreur est survenue. Veuillez réessayer.');
                setTimeout(() => {
                    setStatus('idle');
                    setStatusMessage('');
                }, 5000); // Reset status after 5 seconds
            });
    };

    const handleEmailClick = () => {
        navigator.clipboard.writeText('tahiraiman338@gmail.com');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-4 sm:p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
                        Contactez-moi
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {/* Formulaire de contact */}
                        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
                            <h2 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
                                Envoyez-moi un message
                            </h2>
                            <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                        Nom complet
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                        placeholder="Votre nom"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="from_email"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                        placeholder="votre@email.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                        Sujet
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
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
                                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                        placeholder="Décrivez votre projet ou votre demande..."
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="submit w-full font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed bg-blue-500 text-white rounded-lg py-2 sm:py-3 text-sm sm:text-base transition-colors"
                                    style={{border: 'none', outline: 'none'}}
                                    onMouseOver={e => e.currentTarget.style.backgroundColor = '#00bfff96'}
                                    onMouseOut={e => e.currentTarget.style.backgroundColor = '#00bfff'}
                                >
                                    {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                                </button>
                                {status !== 'idle' && (
                                    <p className={`mt-2 sm:mt-4 text-xs sm:text-sm text-center ${status === 'sent' ? 'text-green-600' : 'text-red-600'}`}>
                                        {statusMessage}
                                    </p>
                                )}
                            </form>
                        </div>
                        {/* Informations de contact */}
                        <div className="space-y-4 sm:space-y-6">
                            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
                                <h2 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
                                    Informations de contact
                                </h2>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                                            <span className="text-lg sm:text-xl">📧</span>
                                        </div>
                                        <div className="relative flex items-center gap-2">
                                            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Email</h3>
                                            <div className="flex items-center gap-1">
                                                <p className="text-gray-600 cursor-pointer hover:underline text-xs sm:text-sm" onClick={handleEmailClick} title="Copier l'email dans le presse-papier">tahiraiman338@gmail.com</p>
                                                <button
                                                    type="button"
                                                    aria-label="Copier l'email"
                                                    onClick={handleEmailClick}
                                                    className="ml-1 p-0 rounded transition-opacity duration-200 opacity-60 hover:opacity-100"
                                                    style={{lineHeight: 0}}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400">
                                                        <rect x="9" y="9" width="13" height="13" rx="2" fill="#fff" stroke="#cbd5e1" strokeWidth="2"/>
                                                        <rect x="3" y="3" width="13" height="13" rx="2" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2"/>
                                                    </svg>
                                                </button>
                                            </div>
                                            {showToast && (
                                                <div className="absolute left-1/2 -translate-x-1/2 -top-10 bg-white text-gray-800 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-xl z-50 border border-blue-200 animate-fade-in-up text-xs sm:text-base" style={{minWidth: '160px', boxShadow: '0 8px 32px 0 rgba(0, 120, 255, 0.15), 0 1.5px 6px 0 rgba(0,0,0,0.10)'}}>
                                                    <span>Email copié dans le presse-papier !</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                                            <span className="text-lg sm:text-xl">📱</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Téléphone</h3>
                                                <p className="text-gray-600 text-xs sm:text-sm">+33 7 66 87 88 21</p>
                                            </div>
                                            <a
                                                href="tel:+33766878821"
                                                className="ml-1 p-0 rounded transition-opacity duration-200 opacity-60 hover:opacity-100"
                                                style={{width: '16px', height: '16px', lineHeight: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}
                                                aria-label="Appeler le numéro"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 16.92v3a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.13.81.36 1.6.7 2.34a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0122 16.92z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                                            <span className="text-lg sm:text-xl">📍</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Localisation</h3>
                                            <p className="text-gray-600 text-xs sm:text-sm">Paris, France</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 relative overflow-hidden">
                                {/* Logo LinkedIn pixelart en fond */}
                                <h2 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800 relative z-10">
                                    Réseaux sociaux
                                </h2>
                                <div className="space-y-3 sm:space-y-4 relative z-10">
                                    <a href="https://linkedin.com/in/tahir-aiman/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 relative overflow-hidden">
                                        {/* Logo LinkedIn pixelart en fond du lien */}
                                        <img src={linkedinPixel} alt="LinkedIn" className="absolute inset-0 w-12 h-12 sm:w-20 sm:h-20 opacity-10 pointer-events-none m-auto" style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}} />
                                        <img src={linkedinPixel} alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 rounded shadow relative z-10" />
                                        <div className="relative z-10">
                                            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">LinkedIn</h3>
                                            <p className="text-gray-600 text-xs sm:text-sm">linkedin.com/in/tahir-aiman/</p>
                                        </div>
                                    </a>
                                    <a href="https://github.com/Kaox260" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 relative overflow-hidden">
                                        {/* Logo GitHub pixelart en fond du lien */}
                                        <img src={githubPixel} alt="GitHub" className="absolute inset-0 w-12 h-12 sm:w-20 sm:h-20 opacity-10 pointer-events-none m-auto" style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}} />
                                        <img src={githubPixel} alt="GitHub" className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 rounded shadow relative z-10" />
                                        <div className="relative z-10">
                                            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">GitHub</h3>
                                            <p className="text-gray-600 text-xs sm:text-sm">github.com/Kaox260</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
                                <h2 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
                                    Disponibilité
                                </h2>
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex justify-between items-center text-xs sm:text-sm">
                                        <span className="text-gray-600">Lundi - Mardi</span>
                                        <span className="font-semibold text-green-600">Disponible</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs sm:text-sm">
                                        <span className="text-gray-600">Mercredi -vendredi</span>
                                        <span className="font-semibold text-orange-600">Sur demande</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs sm:text-sm">
                                        <span className="text-gray-600">Samedi - Dimanche</span>
                                        <span className="font-semibold text-red-600">Fermé</span>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-4">
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