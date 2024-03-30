setInterval(function(){
    let time = document.querySelector(".time")
let clock = new Date()
let sec = clock.getSeconds()
let min = clock.getMinutes()
let hr = clock.getHours()
let day = "PM"
if(hr > 12){
    day = "PM"
    hr = hr - 12
}
if(hr == 0){
    hr = 12
}
if(sec < 10){
    sec = "0" + sec
}
if(min < 10){
    min = "0" + min
}
if(hr < 10){
    hr = "0" + hr
}
time.textContent = hr + ":" + min + ":" + sec + " " + day;
})