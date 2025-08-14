import '../index.css'
import Navbar from '../components/Navbar.jsx'
import Button from '../components/SpinninButton.jsx'

// Import des logos depuis assets
import ppImg from '../assets/pp.png'
import bnpLogo from '../assets/logo-bnpp.jpeg'
import albertSchoolLogo from '../assets/logo-albert-school.webp'
import worldskillsLogo from '../assets/logo-worldskills.png'
import deezerLogo from '../assets/logo-deezer.png'
import finsecurLogo from '../assets/logo-finsecur.png'

function AboutPages() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                {/* HERO SECTION */}
                <section className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 py-10 md:py-16 px-4">
                    <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                            Enchanté, moi c'est Aiman !
                        </h1>
                        <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl">
                            Le web solidaire, <span className="text-blue-600">pour tous</span>
                        </p>
                        <a href="/contact" className="inline-block bg-blue-600 text-white font-semibold py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-blue-700 transition mb-2 text-sm md:text-base">Discutons de votre projet</a>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="w-36 h-36 md:w-56 md:h-56 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                            <img
                                src={ppImg}
                                alt="Aiman"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                </section>

                {/* PRESENTATION PERSONNELLE */}
                <section className="max-w-3xl mx-auto px-4 mb-12 md:mb-16">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Qui suis-je ?</h2>
                    <p className="text-gray-700 text-base md:text-lg mb-4">Je m'appelle Aiman, je développe des sites web bénévolement pour des associations, des projets solidaires ou des personnes qui veulent partager leurs idées. J'aime rendre service et voir des projets prendre vie grâce au numérique.</p>
                    <p className="text-gray-700 text-base md:text-lg mb-4">À côté du code, je pratique le sport (notamment le tennis & le surf qui m'inspirent pour ce site !) et qui font partie de moi aujourd'hui ! je poursuis mes études dans le domaine du numérique. J'aime apprendre, transmettre, et rencontrer des gens passionnés.</p>
                    <p className="text-gray-700 text-base md:text-lg">Si vous avez un projet, une question ou juste envie d'échanger, n'hésitez pas à me contacter !</p>
                </section>

                {/* SECTION EXPÉRIENCE */}
                <section className="max-w-3xl mx-auto px-4 mb-12 md:mb-16">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Ce que je fais aujourd'hui</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-4 h-4 mt-1 rounded-full bg-green-500"></div>
                            <div>
                                
                                <div className="flex items-start gap-2">
                                <h3 className="font-semibold text-green-700">Alternant en Developpement WEB</h3>
                                <img src={bnpLogo} alt="BNP Paribas" className="w-5 h-5 object-contain rounded bg-white border border-gray-200" />
                                </div>
                                <h4>BTS SIO</h4>
                                <p className="text-gray-700 text-sm">2024 - aujourd'hui</p>
                                <p className="text-gray-600 mt-1">Formation en développement web, gestion de projet, innovation digitale. Projets d'équipe, veille technologique, apprentissage continu.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-4 h-4 mt-1 rounded-full bg-purple-500"></div>
                            <div>
                                <h3 className="font-semibold text-purple-700">Encadrant de chantiers bénévoles (animateur quoi)</h3>
                                <p className="text-gray-700 text-sm">2022 - aujourd'hui</p>
                                <p className="text-gray-600 mt-1">
                                    J'ai rejoint la famille des bénévoles au <a href="https://www.clubduvieuxmanoir.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Club du Vieux Manoir</a> depuis maintenant 3 ans cet été ! Une association qui encadre
                                    des chantiers de restauration de patrimoine l'été, une échappatoire aux colonies et vraiment des gens sympas !
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-4 h-4 mt-1 rounded-full bg-purple-500"></div>
                            <div>
                                <h3 className="font-semibold text-purple-700">Professeur de tennis bénévolement</h3>
                                <p className="text-gray-700 text-sm">2023 - aujourd'hui</p>
                                <p className="text-gray-600 mt-1">J'entraine des agées de 3 à 9 ans bénévolement depuis 2 ans, 60 gosses tous les samedis matins ! 😝</p>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Expériences professionnelles</h2>
                        {/* BNP Paribas - Développeur web (Alternance) */}
                        <div className="flex items-start gap-4">
                            <img src={bnpLogo} alt="BNP Paribas" className="w-10 h-10 object-contain rounded bg-white border border-gray-200" />
                            <div>
                                <h3 className="font-semibold text-green-700">Développeur web</h3>
                                <p className="text-gray-700 text-sm">BNP Paribas · Contrat en alternance</p>
                                <p className="text-gray-700 text-sm">janv. 2025 - aujourd'hui · 7 mois</p>
                                <p className="text-gray-700 text-sm">Montreuil, Île-de-France, France · Hybride</p>
                                <p className="text-gray-600 mt-1">Développement de solutions internes axées sur l'innovation en React Natif & Tailwind</p>
                                <p className="text-gray-500 text-xs mt-1">Compétences : React.js · Tailwind CSS</p>
                            </div>
                        </div>
                        {/* BNP Paribas - Stagiaire (janv. 2024 - févr. 2024) */}
                        <div className="flex items-start gap-4">
                            <img src={bnpLogo} alt="BNP Paribas" className="w-10 h-10 object-contain rounded bg-white border border-gray-200" />
                            <div>
                                <h3 className="font-semibold text-green-700">Stagiaire</h3>
                                <p className="text-gray-700 text-sm">BNP Paribas</p>
                                <p className="text-gray-700 text-sm">janv. 2024 - févr. 2024 · 2 mois</p>
                                <p className="text-gray-700 text-sm">Montreuil, Île-de-France, France · Hybride</p>
                                <ul className="list-disc ml-5 text-gray-600 mt-1 text-sm space-y-1">
                                    <li>Business requirements analysis for a project management software package in WebApp format</li>
                                    <li>Creation of interactive mock-ups (UX/UI) with Figma</li>
                                    <li>UI/UX training for a Design Apprentice</li>
                                    <li>Front-end development of a Mobile WebApp with Vue.js and Tailwind CSS, développement de composants Vue</li>
                                </ul>
                                <p className="text-gray-500 text-xs mt-1">Compétences : Vue.js · Tailwind CSS · Expérience utilisateur (UX) · Design d'interface utilisateur · Enseignement</p>
                            </div>
                        </div>
                        {/* BNP Paribas - Stagiaire (sept. 2023 - oct. 2023) */}
                        <div className="flex items-start gap-4">
                            <img src={bnpLogo} alt="BNP Paribas" className="w-10 h-10 object-contain rounded bg-white border border-gray-200" />
                            <div>
                                <h3 className="font-semibold text-green-700">Stagiaire</h3>
                                <p className="text-gray-700 text-sm">BNP Paribas</p>
                                <p className="text-gray-700 text-sm">sept. 2023 - oct. 2023 · 2 mois</p>
                                <p className="text-gray-700 text-sm">Montreuil, Île-de-France, France</p>
                                <ul className="list-disc ml-5 text-gray-600 mt-1 text-sm space-y-1">
                                    <li>Analysis of business needs for a mobile WebApp for événementiel</li>
                                    <li>Creation of interactive models (UX/UI) with Figma</li>
                                    <li>Introduction to Figma for a design apprentice</li>
                                    <li>Front-end development of a Mobile WebApp with Vue.js and Tailwind CSS, développement de composants Vue</li>
                                </ul>
                                <p className="text-gray-500 text-xs mt-1">Compétences : Vue.js · Tailwind CSS · API de services web · Expérience utilisateur (UX) · Design d'interface utilisateur · Enseignement</p>
                            </div>
                        </div>
                        {/* Albert School - Lauréat 18under18 2023 */}
                        <div className="flex items-start gap-4">
                            <img src={albertSchoolLogo} alt="Albert School" className="w-10 h-10 object-contain rounded bg-white border border-gray-200" />
                            <div>
                                <h3 className="font-semibold text-yellow-700">Lauréat 18under18 2023 - Créateur de l'année</h3>
                                <p className="text-gray-700 text-sm">Albert School · Lauréat</p>
                                <p className="text-gray-700 text-sm">juin 2023 - juin 2023 · 1 mois</p>
                                <p className="text-gray-600 mt-1">Lauréat dans la catégorie 18under18 avec le projet Triped</p>
                                <p className="text-gray-500 text-xs mt-1">Compétences : Entrepreneuriat · Montage vidéo · Techniques de présentation</p>
                            </div>
                        </div>
                        {/* BNP Paribas - Stagiaire (mars 2023 - mai 2023) */}
                        <div className="flex items-start gap-4">
                            <img src={bnpLogo} alt="BNP Paribas" className="w-10 h-10 object-contain rounded bg-white border border-gray-200" />
                            <div>
                                <h3 className="font-semibold text-green-700">Stagiaire</h3>
                                <p className="text-gray-700 text-sm">BNP Paribas</p>
                                <p className="text-gray-700 text-sm">mars 2023 - mai 2023 · 3 mois</p>
                                <p className="text-gray-700 text-sm">Montreuil, Île-de-France, France</p>
                                <ul className="list-disc ml-5 text-gray-600 mt-1 text-sm space-y-1">
                                    <li>Business requirements analysis for a project management software package as a WebApp</li>
                                    <li>Creation of interactive UI/UX models with Figma</li>
                                    <li>Front-end development of a WebApp with React</li>
                                    <li>Application of the agile method</li>
                                </ul>
                                <p className="text-gray-500 text-xs mt-1">Compétences : React.js · Expérience utilisateur (UX) · Design d'interface utilisateur · Communication</p>
                            </div>
                        </div>
                        {/* WorldSkills France - 6ème Meilleur Administrateur Réseaux */}
                        <div className="flex items-start gap-4">
                            <img src={worldskillsLogo} alt="WorldSkills France" className="w-10 h-10 object-contain rounded bg-white border border-gray-200" />
                            <div>
                                <h3 className="font-semibold text-blue-700">6ème Meilleur Administrateur Réseaux Informatiques & Systèmes Numériques</h3>
                                <p className="text-gray-700 text-sm">WorldSkills France - LA Compétition des Métiers</p>
                                <p className="text-gray-700 text-sm">oct. 2022 - mars 2023 · 6 mois</p>
                                <p className="text-gray-700 text-sm">Île-de-France, France</p>
                                <p className="text-gray-600 mt-1">Administration des Systèmes et des Réseaux Informatiques</p>
                                <p className="text-gray-500 text-xs mt-1">Compétences : Gestion d'un Parc Informatique · Compétition · Préparation</p>
                            </div>
                        </div>
                        {/* Deezer - Stagiaire */}
                        <div className="flex items-start gap-4">
                            <img src={deezerLogo} alt="Deezer" className="w-10 h-10 object-contain rounded bg-white border border-gray-200" />
                            <div>
                                <h3 className="font-semibold text-pink-700">Stagiaire</h3>
                                <p className="text-gray-700 text-sm">Deezer</p>
                                <p className="text-gray-700 text-sm">nov. 2022 - déc. 2022 · 2 mois</p>
                                <p className="text-gray-700 text-sm">Ville de Paris, Île-de-France, France · Sur site</p>
                                <ul className="list-disc ml-5 text-gray-600 mt-1 text-sm space-y-1">
                                    <li>SQL Initiation, Data analysis & Data extraction from Database</li>
                                    <li>Metadata Curation & Content Creation (100% Playlists)</li>
                                    <li>Python Initiation, Blind Test création & Product Présentation</li>
                                    <li>API Manipulation with Deezer API & WebApp Creation with React</li>
                                </ul>
                                <p className="text-gray-500 text-xs mt-1">Compétences : SQLite · Python (langage de programmation) · Framework Django REST · Gestion de métadonnées · JIRA · Création de contenu (création des Playlists 100%) · Techniques de présentation · API de services web · React.js</p>
                            </div>
                        </div>
                        {/* FINSECUR - Stagiaire */}
                        <div className="flex items-start gap-4">
                            <img src={finsecurLogo} alt="FINSECUR" className="w-10 h-10 object-contain rounded bg-white border border-gray-200" />
                            <div>
                                <h3 className="font-semibold text-red-700">Stagiaire</h3>
                                <p className="text-gray-700 text-sm">FINSECUR</p>
                                <p className="text-gray-700 text-sm">avr. 2022 - mai 2022 · 2 mois</p>
                                <p className="text-gray-700 text-sm">Poissy, Île-de-France, France</p>
                                <p className="text-gray-600 mt-1">Réalisation de coffrets SIM</p>
                                <p className="text-gray-500 text-xs mt-1">Compétences : Conception physique</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION FORMATION (style timeline comme Expérience) */}
                <section className="max-w-3xl mx-auto px-4 mb-10 md:mb-12">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Formation</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-4 h-4 mt-1 rounded-full bg-green-300"></div>
                            <div>
                                <h3 className="font-semibold text-green-700">BTS SIO option SISR</h3>
                                <p className="text-gray-700 text-sm">2024 - 2026</p>
                                <p className="text-gray-600 mt-1">BTS Services Informatiques aux Organisations, option Solutions d'Infrastructure, Systèmes et Réseaux. Formation axée sur l'administration réseaux, la cybersécurité, la virtualisation et la gestion de parc informatique.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-4 h-4 mt-1 rounded-full bg-blue-300"></div>
                            <div>
                                <h3 className="font-semibold text-blue-700">Bac Pro SN option RISC</h3>
                                <p className="text-gray-700 text-sm">2021 - 2024</p>
                                <p className="text-gray-600 mt-1">Baccalauréat Professionnel Systèmes Numériques, option Réseaux Informatiques et Systèmes Communicants. Apprentissage des bases de l'informatique, des réseaux, de l'électronique et de la maintenance.</p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* SEPARATOR */}
                <div className="max-w-3xl mx-auto border-t border-gray-200 my-8 md:my-12" />

                {/* POURQUOI CE SITE ? */}
                <section className="max-w-3xl mx-auto px-4 mb-12 md:mb-16">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">Pourquoi ce site&nbsp;?</h2>
                    <p className="text-gray-700 text-base md:text-lg mb-6">Parce que tout le monde mérite d'être visible sur le web, même sans budget. Je mets mes compétences au service de ceux qui veulent agir, partager, aider ou rassembler.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center text-center">
                            <span className="text-3xl mb-2">🤲</span>
                            <h3 className="font-semibold mb-1 text-blue-700">Pour qui&nbsp;?</h3>
                            <p className="text-gray-600 text-sm">Associations, collectifs, bénévoles, porteurs d'idées, projets solidaires ou éducatifs.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-3xl mb-2">💜</span>
                            <h3 className="font-semibold mb-1 text-blue-700">Pourquoi bénévole&nbsp;?</h3>
                            <p className="text-gray-600 text-sm">Parce que le web doit être un outil d'entraide, pas une barrière. Je crois à la transmission et au partage.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-3xl mb-2">🌱</span>
                            <h3 className="font-semibold mb-1 text-blue-700">Ma mission</h3>
                            <p className="text-gray-600 text-sm">Rendre la création de site simple, humaine, et accessible à tous, sans jargon ni prise de tête.</p>
                        </div>
                    </div>
                </section>

                {/* SEPARATOR */}
                <div className="max-w-3xl mx-auto border-t border-gray-200 my-8 md:my-12" />

                {/* COMMENT ÇA MARCHE ? */}
                <section className="max-w-3xl mx-auto px-4 mb-12 md:mb-16">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">Comment ça marche&nbsp;?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 text-2xl">1</div>
                            <h3 className="font-semibold mb-2 text-blue-700">On échange</h3>
                            <p className="text-gray-600 text-sm">Vous me parlez de votre projet, de vos besoins, de vos envies. Je vous écoute et je conseille.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 text-2xl">2</div>
                            <h3 className="font-semibold mb-2 text-blue-700">On construit</h3>
                            <p className="text-gray-600 text-sm">Je conçois et développe votre site, en vous impliquant à chaque étape. Simplicité et pédagogie garanties.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 text-2xl">3</div>
                            <h3 className="font-semibold mb-2 text-blue-700">On met en ligne</h3>
                            <p className="text-gray-600 text-sm">Votre site est prêt, vous êtes autonome pour la suite. Je reste disponible pour toute question ou évolution.</p>
                        </div>
                    </div>
                </section>

                {/* SEPARATOR */}
                <div className="max-w-3xl mx-auto border-t border-gray-200 my-8 md:my-12" />

                {/* CE QUE JE PROPOSE */}
                <section className="max-w-3xl mx-auto px-4 mb-12 md:mb-16">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">Ce que je propose</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="flex flex-col items-center text-center">
                            <span className="text-3xl mb-2">🌐</span>
                            <h3 className="font-semibold mb-2 text-blue-800">Création de site</h3>
                            <p className="text-gray-600 text-sm">Site vitrine, page d'association, blog, présentation de projet... Je m'adapte à vos besoins.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-3xl mb-2">🤝</span>
                            <h3 className="font-semibold mb-2 text-blue-800">Accompagnement</h3>
                            <p className="text-gray-600 text-sm">Conseils personnalisés, aide à la prise en main, formation à l'autonomie sur votre site.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-3xl mb-2">💡</span>
                            <h3 className="font-semibold mb-2 text-blue-800">Idéation & conseils</h3>
                            <p className="text-gray-600 text-sm">Vous avez une idée ? On en discute, je vous aide à la structurer et à la concrétiser sur le web.</p>
                        </div>
                    </div>
                </section>

                {/* APPEL À L'ACTION */}
                <section className="max-w-3xl mx-auto px-4 mb-16 md:mb-20 text-center">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">Prêt à lancer votre projet&nbsp;?</h2>
                    <p className="text-gray-700 mb-6">Contactez-moi, même juste pour échanger ou demander conseil. Je réponds toujours avec plaisir !</p>
                    <a href="/contact" className="inline-block bg-blue-600 text-white font-semibold py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-blue-700 transition text-sm md:text-base">Me contacter</a>
                </section>
            </main>
            {/* FOOTER */}
            <footer className="w-full border-t border-gray-200 py-4 md:py-6 bg-white text-center text-gray-500 text-xs md:text-sm mt-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                    <span>&copy; {new Date().getFullYear()} Aiman Tahir</span>
                    <span className="hidden md:inline">|</span>
                    <a href="mailto:tahiraiman338@gmail.com" className="hover:underline">tahiraiman338@gmail.com</a>
                    <span className="hidden md:inline">|</span>
                    <a href="https://linkedin.com/in/tahir-aiman/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs md:text-sm hover:underline">linkedin.com/in/tahir-aiman/</a>
                    <span className="hidden md:inline">|</span>
                    <a href="https://github.com/Kaox260" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-xs md:text-sm hover:underline">github.com/Kaox260</a>
                </div>
            </footer>
            {/* SpinninButton */}
            <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
                <Button text="CONTACT" to="/contact" />
            </div>
        </div>
    )
}

export default AboutPages
