import React, { useEffect, useState } from "react";
import axios from "axios"
import "./orderinfo.css"
import Map from "./map"
import { MapIcon } from "../assets";
function OrderInfo(){
    const [pickup,setpickup]=useState(false)
    const [orderdetails,setorderdetails]=useState({

    })

    const [accesslocation,setaccesslocation]=useState(false);
    const [accesslocate,setaccesslocate]=useState(false);
    
 
function getPickUp(event){

event.preventDefault();
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
}

// useEffect(()=>{
// axios.get("")
// },[])


function showPosition(position){
    console.log(position)
if(position){
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${position.coords.longitude},${position.coords.latitude}.json?types=poi&access_token=pk.eyJ1IjoiZGFya3NpZGVyNTEiLCJhIjoiY2twaWEybjRrMno1aDMxbnhzMW43MGMwYSJ9.pw1XvoiWZakR-yTN27Hdvg`)
    .then((res)=>{
        console.log(res)
    })
}
    
}

    
    
    return(
<div className="orderbox">
    <h1>Pick n Drop</h1>
    <div className="orderboxMap">
    <input className="delivery" placeholder="Pickup Address"></input>
    <div onClick={()=>setaccesslocation(accesslocation?false:true)} className="mapIcon"><MapIcon/></div>
    </div>
 
    {accesslocation?
        <Map />
   :false}
    {/* <button className="mapPickup" onClick={(event)=>getPickUp(event)}>Pick Up Delivery</button>
    <button className="manualPickup" onClick={()=>pickup?setpickup(false):setpickup(true)}>Enter Manually</button> */}
    <div>
    <div>
        {pickup?<textarea />:null}
    </div>
        <input className="mobile" placeholder="Mobile number"/>
        <input className="landmark" placeholder="Landmark"/>
    </div>
    <div className="orderboxMap">
    <input placeholder="Delivery Address" className="delivery"></input>
    <div onClick={()=>setaccesslocate(accesslocate?false:true)} className="mapIcon"><MapIcon/></div>
    {accesslocate?
        <Map />
   :false}
    </div>
    <div>
        <input className="mobile" placeholder="Mobile number" />
        <input className="landmark" placeholder="Landmark" />
    </div>
    <select className="sending">
        <option>What are you sending</option>
        <option>Parcel</option>
        <option>Food</option>
        <option>Electronics</option>
    </select>
    <div>
        <select className="left">
            <option>Weight Category</option>
            <option>Under 5kg</option>
            <option>5kg-10kg</option>
            <option>10kg+</option>
        </select>
        <select className="right">
        <option>Size Category</option>
            <option>10*10</option>
            <option>20*20</option>
            <option>Above 20*20</option>
        </select>
    </div>
    <div>
        <select className="left">
        <option>Payment Method</option>
            <option>Cash</option>
            <option>Card</option>
            <option>UPI</option>
        </select>
        <select className="right">
            <option>Opt Bidding</option>
            <option>Yes</option>
            <option>No</option>
        </select>
    </div>
    <div>
        <a href="/droppers">
        <button className="placeOrder">Place for Bid</button>
        </a>
        <a href="/track">
        <button className="placeOrder">Place Order</button>
        </a>
    </div>
</div>
    )
}
export default OrderInfo