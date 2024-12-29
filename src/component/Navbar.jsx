import React from 'react'
import logoimg from ".//../assets/logo1.svg"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='w-100 main_nav'>
            <div className='nav_content'>
                <div className='img_text_logo' onClick={()=>{
                    navigate('/')
                }}>
                    <img src={logoimg} alt=""
                        className='image_logo'
                    />
                    <div className='logo_title'>
                        Shreeji Baker's
                    </div>
                </div>

                <div className='logo_title'>
                    User
                </div>
            </div>
        </div>
    )
}

export default Navbar
