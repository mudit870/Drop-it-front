import React from 'react'
import { ShortLine, Star, Truck, User, WhatsApp } from '../../assets'
import { TrackingData } from '../../constant/TrackingData'
import Map from '../map'
import "./Tracking.scss"

const Tracking = () => {
    return (
        <div className="trackingBox">
            <div className="trackingMap">
                <Map/>
            </div>
            {TrackingData.map((data, index) => {
                return (
                    <div key={index} className="trackingContainer">
                        <div className="trackingAdd">
                            <div className="from lsr">
                                {data.from}
                                <br/>
                                {data.fpin}
                            </div>
                            <div className="sline">
                                <ShortLine/>
                            </div>
                            <div className="truck">
                                <Truck/>
                            </div>
                            <div className="sline">
                                <ShortLine/>
                            </div>
                            <div className="from rsr">
                                {data.to}
                                <br/>
                                {data.tpin}
                            </div>
                        </div>
                        <div className="infoBox">
                            <div className="info dtime">
                                <div className="dInfo">
                                    <p>Arrival time</p>
                                </div>
                                <div  className="dInfo">
                                    {data.time}
                                </div>
                            </div>
                            <div className="info dtime">
                            <div className="dInfo">
                                <a href="/delivery"><p>To Pay</p></a>
                            </div>
                            <div className="dInfo">
                                <p>Rs {data.amount}</p>
                            </div>
                            </div>
                            <div className="vnumber">
                                {data.vnum}
                            </div>
                        </div>
                        <div className="centerUser">
                            <div className="userImg">
                                <div className="userData"><User/></div>
                                {data.rating} <Star/>
                                <br/>
                                {data.dname}
                                <br/>
                                <img src={WhatsApp} alt="wIMG"></img>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Tracking
