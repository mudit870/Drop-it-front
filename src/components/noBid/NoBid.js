import React from 'react'
import { ShortLine, Tick, Truck } from '../../assets'
import { FinalDeliveryData } from '../../constant/FinalDeliveryData'
import "./NoBid.scss"

const NoBid = () => {
    return (
        <div className="NoBidBox">
            <div className="NoBidInfo">
                {FinalDeliveryData.map((data,index) => {
                    return(
                        <div key={index}>
                            <div className="NoBidDetails">
                                <div className="orderFrom">
                                    <p>
                                        Order From
                                        <br/>
                                        <b>{data.fname}</b>
                                        <br/>
                                        From: {data.faddress}
                                    </p>
                                </div>
                                <div className="line">
                                    <ShortLine/>
                                </div>
                                <div className="truck">
                                    <Truck/>
                                </div>
                                <div className="line">
                                    <ShortLine/>
                                </div>
                                <div className="orderFrom">
                                    <p>
                                        To
                                        <br/>
                                        <b>{data.tname}</b>
                                        <br/>
                                        From: {data.taddress}
                                    </p>
                                </div>
                            </div>
                            <div className="finalStatus">
                                <div className="vnumber btn">
                                    <a href="/tracking">
                                    <button>Track Order</button>
                                    </a>
                                </div>
                                <div className="ssline">
                                <ShortLine/></div>
                                <div className="vnumber">
                                    <p>OTP</p>  
                                </div>
                                <div className="ssline">
                                <ShortLine/></div>
                                <div className="vnumber">
                                     <p>Pay</p>
                                     <div className="payTick"></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default NoBid
