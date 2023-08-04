document.addEventListener("DOMContentLoaded",()=>{
    const secondsHand = document.querySelector(".second-hand");
    const minutesHand = document.querySelector(".min-hand");
    const hoursHand = document.querySelector(".hour-hand");

    function setDate(){
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        let formattedHours = hours % 12 || 12;
        console.log(seconds);
        console.log(minutes);
        console.log(hours);
        const secondsDeg = ((seconds / 60) * 360)+90;
        const minutesDeg = ((minutes / 60) * 360)+90;
        const hoursDeg = ((formattedHours / 12) * 360)+90;
        console.log(secondsDeg);
        secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
        minutesHand.style.transform = `rotate(${minutesDeg}deg)`;
        hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
    }
    setInterval(setDate, 1000);
})