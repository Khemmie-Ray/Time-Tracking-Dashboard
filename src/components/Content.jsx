import profileImg from "../assets/image-jeremy.png"
import dotIcon from "../assets/icon-ellipsis.svg"
import data from "../data";

function Content(props) {
    const {id, title, image, timeframes} = props;

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
        <main>
            <section className="report">
            <div className="profile">
          <img src={profileImg} alt="" />
          <div className="bio">
            <p>Reports for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <div className="btn">
          <button className="daily" onClick={dailyClick}>Daily</button>
          <button className="weekly" onClick={weeklyClick}>Weekly</button>
          <button className="monthly" onClick={monthlyClick}>Monthly</button>
        </div>
        </section>
        <section className="card-container">
        <div className="card" key={id}>
          <div className={ `top-bg item-${id}` }>
            <img src={image} alt="" className="icons" />
          </div>
          <div className="mini-info">
            <div className="main-title">
              <p>{title}</p>
              <img src={dotIcon} alt="" className="dot" />
            </div>
            <div className="timeframe">
              <h2 className="current">{timeframes.daily.current}hrs</h2>
              <p >Lastweek - <span>{timeframes.daily.previous}hrs</span></p>
            </div>
          </div>
        </div>
        </section>
        </main>
    )
}

// export default Content