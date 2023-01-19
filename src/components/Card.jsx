import dotIcon from "../assets/icon-ellipsis.svg"

function Card(props) {
    const {id, title, image, timeframes} = props;
    console.log(props)
    
    return (
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
    )
}

export default Card