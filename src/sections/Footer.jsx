import React from 'react'
import Discord from '../components/Discord'
import Linkedin from '../components/Linkedin'
import Github from '../components/Github'

const Footer = () => {
    return (
        <div className="flex flex-row items-center justify-between mx-4 w-full">
            <div className="flex gap-3">
                <Discord />
                <Linkedin />
                <Github />
            </div>
            <h1 className="text-xl text-yellow-600">© 2025 Jan Decker</h1>
        </div>
    )
}

export default Footer