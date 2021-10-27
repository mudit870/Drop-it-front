import React from 'react'
import { Line, ShortLine, Tick, Truck } from '../../assets'
import { FinalDeliveryData } from '../../constant/FinalDeliveryData'
import "./FinalDelivery.scss"

const FinalDelivery = () => {
    return (
        <div className="finalDeliveryBox">
            <div className="finalDeliveryInfo">
                {FinalDeliveryData.map((data,index) => {
                    return(
                        <div key={index}>
                            <div className="finalDeliveryDetails">
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
                                <div className="vnumber">
                                    {data.vnum}     
                                </div>
                                <img src={Tick} ></img>
                                <div className="ssline">
                                <ShortLine/></div>
                                <div className="vnumber otp">
                                    <p>OTP</p>
                                </div>
                                <img src={Tick} ></img>
                                <div className="ssline">
                                <ShortLine/></div>
                                <div className="vnumber otp">
                                     <p>Pay</p>
                                </div>
                                     <div className="payTick"></div>    
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default FinalDelivery
