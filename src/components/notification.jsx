import React, {useEffect, useState} from 'react'
import { Dropdown } from '../assets';
import { NotificationData } from '../constant/NotificationData';
import "./notification.css"

function notification(){
    return (
        <>
        <div className="notificationContainer">
            {NotificationData.map((data, index) => {
                return (
                    <div key={index} className="notification">
                        <div className="notificationText">
                        <p>{data.text}</p>
                        </div>
                        <div className="notificationDropdownIcon">
                            <Dropdown/>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    );
}

export default notification;