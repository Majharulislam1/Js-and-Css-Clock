
const hour_hand = document.querySelector(".hour-hand");
const min_hand = document.querySelector(".min-hand");
const second_hand = document.querySelector(".second-hand");




function setDate(){
     const now = new Date();
     const second =now.getSeconds();
     const mins = now.getMinutes();
     const secondDegrees = ((second/60)*360)+90;
     second_hand.style.transform=`rotate(${secondDegrees}deg)`;
     
     const minDegrees = ((mins/60)*360)+90;
     min_hand.style.transform=`rotate(${minDegrees}deg)`;
     const hour = now.getHours();
     const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
     hour_hand.style.transform= `rotate(${hourDegrees}deg)`;
}



setInterval(setDate,1000);

setDate();