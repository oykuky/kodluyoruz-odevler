const x=prompt("İsminizi giriniz");

document.getElementById("myName").innerHTML=`${x}`;



function showTime() {
    let date = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = weekday[date.getDay()];
    const currentTime = date.getHours() + "." + date.getMinutes() + "." + date.getSeconds();
    document.getElementById("myClock").innerHTML = `${currentTime} ${day}`;
  }
  
  setInterval(showTime, 1000); // Her saniyede showTime işlevini çağırır
  


