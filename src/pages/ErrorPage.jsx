import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Button from '../components/SpinninButton'

function ErrorPage() {

    return (
        <div>
                    <Navbar />
                    <div className="w-full bg-gray-200 h-[60vh] flex flex-col justify-center items-center gap-y-4">
                        <h1>Oh Oh...</h1>
                        <h3>Quelque chose ne tourne pas rond... !</h3>
                        <h3>Si tu veux voyager c'est juste ici ! </h3>
                        <Link to="/">
                        <Button text={"A C C E U I L"} to="/"/>
                        </Link>
                    </div>
                    <div className="">

                    </div>
        </div>
    )
}

export default ErrorPage