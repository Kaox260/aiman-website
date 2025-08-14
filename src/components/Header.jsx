import React from 'react';
import ConeChantierBubble from './ConeChantierBubble';
import pp from '../assets/pp.png';

function Header () {
    return (
        <div className="h-[40vh] w-full bg-gray-300 flex flex-col md:flex-row justify-center items-end md:items-end relative overflow-visible">
            {/* Logo cone de chantier en haut à droite du header */}
            <ConeChantierBubble />
            <div className="flex flex-col md:flex-row h-fit w-full items-center justify-center pb-6 gap-y-6 md:gap-x-20 ">
                <img src={pp} alt="photo-de-profil" className="h-32 w-32 md:h-[27vh] md:w-auto rounded-full border-8 md:border-14 outline-offset-5 border-gray-600 object-cover" />
                <div className="text-center md:text-left">
                    <h2 className="text-lg md:text-[2vw] font-bold">TAHIR Aiman</h2>
                    <h3 className="text-2xl md:text-[4vw] font-semibold uppercase">Le codeur bénévole</h3>
                    <h4 className="text-base md:text-[2vw] font-medium">Je code vos sites bénévolement !</h4>
                    <p className="text-sm md:text-base mt-2">Si votre projet me touche alors je peux vous aider à développer votre projet numérique !</p>
                </div>
            </div>
        </div>
    )
}

export default Header