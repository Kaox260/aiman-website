import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Button from '../components/SpinninButton.jsx';

function WorkInProgress() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 gap-y-4">
        <div className="max-w-xl w-full text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-block text-6xl">🚧</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ce site est en chantier...</h1>
          <p className="text-gray-700 text-lg mb-6">Certaines parties du site sont encore en cours de développement ou d'amélioration. N'hésitez pas à revenir bientôt pour découvrir les nouveautés&nbsp;!</p>
          <p className="text-gray-500 text-base">Ce site va évoluer régulièrement pour mieux répondre à vos besoins et proposer de nouvelles fonctionnalités.</p>
        </div>
        <Button text="ACCEUIL" to="/" backgroundColor="#000" />
      </main>

    </div>
  );
}

export default WorkInProgress; 