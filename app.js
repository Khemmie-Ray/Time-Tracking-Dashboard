import data from "./data.js"

const container = document.querySelector('.card-container')
const dailyBtn = document.getElementById("daily")
const weeklyBtn = document.getElementById("weekly")
const monthlyBtn = document.getElementById("monthly")

container.innerHTML = data.map(dailyUpdate).join('');
dailyBtn.addEventListener('click', () => {
    container.innerHTML = data.map(dailyUpdate).join('');
});

weeklyBtn.addEventListener('click', () => {
    container.innerHTML = data.map(weeklyUpdate).join('');
});

monthlyBtn.addEventListener('click', () => {
    container.innerHTML = data.map(monthlyUpdate).join('');
});

function dailyUpdate(info) {
    const cardElement = `
    <div class="card">
          <div class="topBg color-${info.id}">
            <img class="icons" src=${info.image} alt="">
          </div>
          <div class="content">
            <h3 class="card-title">${info.title} <span><img class="dot" src="images/icon-ellipsis.svg" alt=""></span></h3>
            <div class="time">
            <h2>${info.timeframes.daily.current}hrs</h2>
            <p>Last Week - ${info.timeframes.daily.previous}hrs</p>
            </div>
          </div>
    </div>`

return cardElement;
}

function weeklyUpdate(info) {
    const cardElement = `
    <div class="card">
          <div class="topBg color-${info.id}">
            <img class="icons" src=${info.image} alt="">
          </div>
          <div class="content">
            <h3 class="card-title">${info.title} <span><img class="dot" src="images/icon-ellipsis.svg" alt=""></span></h3>
            <div class="time">
            <h2>${info.timeframes.weekly.current}hrs</h2>
            <p>Last Week - ${info.timeframes.weekly.previous}hrs</p>
            </div>
          </div>
    </div>`

return cardElement;
}

function monthlyUpdate(info) {
    const cardElement = `
    <div class="card">
          <div class="topBg color-${info.id}">
            <img class="icons" src=${info.image} alt="">
          </div>
          <div class="content">
            <h3 class="card-title">${info.title} <span><img class="dot" src="images/icon-ellipsis.svg" alt=""></span></h3>
            <div class="time">
            <h2>${info.timeframes.monthly.current}hrs</h2>
            <p>Last Week - ${info.timeframes.monthly.previous}hrs</p>
            </div>
          </div>
    </div>`

return cardElement;
}
