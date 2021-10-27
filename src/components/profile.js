import React from 'react'
import { ProfileImg } from '../assets'
import "./profile.scss"

const Profile = () => {
    return (
        <div className="profilePage">
            <div className="img">
                <img src={ProfileImg} alt="userImg"></img>
                <div>
                    <h2>mudit sharma</h2>
                    <h4>muditsharma862@gamil.com</h4>
                </div>  
            </div>
        </div>
    )
}

export default Profile
