import React, { useEffect, useState} from "react"
import "./onMyWay.css"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function onMyWay(){
    return (
        <div className="onMyWayBox">
            <h1>Select Route</h1>
            <div>
            <select className="onMyWayFrom">
                <option>From </option>
            </select>
            {/* <div className="arrow"><ArrowDropDownIcon/></div> */}
            
            </div>
            <div>
            <select  className="onMyWayTo">
                <option>To</option>

            </select>
            {/* <div className="arrow"><ArrowDropDownIcon/></div> */}
            </div>
            <div>
            <button className="onMyWayViewMap"> View on Map</button>
            </div>
        </div>
    );
}

export default onMyWay
