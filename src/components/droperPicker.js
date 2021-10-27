import React from 'react'
import { Dollar, Pick, Star, Time, Truck, User } from '../assets'
import { PickerData } from '../constant/PickerData'
import "./dropperPicker.scss"

const DroperPicker = () => {
    return (
        <div className="dropperPickerbox">
            <div className="pickDropper">
                <h3>PICK A DROPPER</h3>
            </div>
            {PickerData.map((data,index) => {
                return (
                    <div key={index} className="pickerData">
                        <div className="pickerInfo">
                            <div className="pickerImg">
                                <User/>
                            </div>
                            <div className="pickerRating">
                                {data.rating} <Star/>
                            </div>
                        </div>
                        <div className="pickerInfo name">
                            <b>{data.name}</b>
                        </div>
                        <div className="pickerInfo delivery">
                            <p>{data.delivery}</p>
                            <Truck/>
                        </div>
                        <div className="pickerInfo vehicle">
                            {data.vehicle}
                            <br/>
                            <h4>{data.vname}</h4>
                        </div>
                        <div className="pickerInfo time">
                            <Time/>
                            <h4>{data.time} MINUTES</h4>
                        </div>
                        <div className="pickerInfo pay">
                            <Dollar/>
                            <h4>Rs {data.amount} /-</h4>
                        </div>
                        <div className="pickerInfo pick">
                        <a href="/tracking"><Pick/>
                            <h4>PICK</h4></a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DroperPicker
