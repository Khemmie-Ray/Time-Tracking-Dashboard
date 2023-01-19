import profileImg from "../assets/image-jeremy.png"
import {  useRef } from "react"
import data from "../data"

function Profile({frameRef}) {

    function dailyClick() {
        const dataInfo = data.map((item, id)=> {
    
        })
    }

    function weeklyClick() {
        const dataInfo = data.map((item, id)=> {
            console.log(item.timeframes.weekly)
        })
    }

    function monthlyClick() {
        const dataInfo = data.map((item, id)=> {
            console.log(item.timeframes.monthly)
        })
    }

    return (
        <section className="report">
            <div className="profile">
          <img src={profileImg} alt="" />
          <div className="bio">
            <p>Reports for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <fieldset className="btn">
          <button className="daily" onClick={dailyClick}>Daily</button>
          <button className="weekly" onClick={weeklyClick}>Weekly</button>
          <button className="monthly" onClick={monthlyClick}>Monthly</button>
        </fieldset>
        </section>
    )
}

export default Profile