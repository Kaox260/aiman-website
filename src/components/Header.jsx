function Header () {

    return (
        <div className="h-[40vh] bg-gray-300 flex justify-center items-end">
            <div className="flex h-fit w-full items-center justify-center pb-6 gap-x-20 ">
            <img src="public/pp.png" alt="photo-de-profil" className="h-[27vh] rounded-full border-14 outline-offset-5 border-gray-600" />
            <div className="">
            <h2 className="text-[2vw]">TAHIR Aiman</h2>
            <h3 className="text-[4vw]">Le codeur bénévole</h3>
            <h4 className="text-[2vw]">Je code vos sites bénévolement !</h4>
            <p>Si votre projet me touche alors je peut vous aider à developper votre projet numérique !</p>
            </div>
            </div>
        </div>
    )
}

export default Header