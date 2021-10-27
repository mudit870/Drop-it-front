import React from "react"
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { useHistory } from "react-router-dom";
function Navbar(props) {

    let history = useHistory()

    console.log(history)
    function Changeactive(event) {
        event.preventDefault();
        // var a = document.querySelector(".active")
        // a.classList.remove("active")
        // event.target.classList.add("active")


        history.push(`/${event.target.getAttribute("name")}`)
    }

    return (

        <div className="navbar">
            <p className="head">Drop-it</p>
            {props.user === "client" ?
                <div className="items">

                    <p name="myorders" onClick={(event) => Changeactive(event)} id="item1" className="item active">Dashboard</p>
                    <p onClick={(event) => Changeactive(event)} id="item2" className="item">On-My-Way</p>
                    {/* <p onClick={(event) => Changeactive(event)} id="item3" className="item">Item 3</p>
                    <p onClick={(event) => Changeactive(event)} id="item4" className="item">Item 4</p> */}

                </div>
                :
                <div className="items">
                    <p onClick={(event) => Changeactive(event)} id="item5" className="item active">Dashboard</p>
                    <p onClick={(event) => Changeactive(event)} id="item6" className="item">On-my-way</p>
                    {/* <p onClick={(event) => Changeactive(event)} id="item7" className="item">Item 7</p>
                    <p onClick={(event) => Changeactive(event)} id="item8" className="item">Item 8</p> */}

                </div>}
                <button className="notifications"><NotificationsNoneIcon style={{ width: "25px", height: "25px" }} /></button>
        </div>
    )
}

export default Navbar