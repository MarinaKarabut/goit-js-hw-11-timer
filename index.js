const countdownTimer =document.getElementById('timer-1')
const timerDate = countdownTimer.querySelector('[data-value="days"]')
const timerHour = countdownTimer.querySelector('[data-value="hours"]')
const timerMinutes = countdownTimer.querySelector('[data-value="mins"]')
const timerSeconds = countdownTimer.querySelector('[data-value="secs"]')

let intervalId = null;

class CountdownTimer {
  constructor({selector, targetDate}){
    this.selector = selector;
    this.targetDate = targetDate;
  
}

intervalId = setInterval(()=> {
  const currentTime = Date.now()
  const deltaTime = this.targetDate - currentTime;
  this.getTimeComponents(deltaTime)
  this.finishCountdownTimer(deltaTime)
 
}, 1000)

getTimeComponents (deltaTime){
  const days = this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
  const hours = this.pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = this.pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
  timerDate.textContent = `${days}`
  timerHour.textContent = `${hours}`
  timerMinutes.textContent = `${mins}`
  timerSeconds.textContent = `${secs}`

}
pad(value){
  return String(value).padStart(2, '0')
  }


finishCountdownTimer(deltaTime){
  if (deltaTime < 0){
    clearInterval(this.intervalId)
    countdownTimer.textContent = 'The End'
  }
}

}



const newCountdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});









