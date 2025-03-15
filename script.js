let monthsNick = ["jan", "mar", "may", "jul", "aug", "oct", "dec", "apr", "jun", "sep", "nov", "feb"];

function chooseMonth(answer) { 
    let janCal = document.getElementById("janCal");
    let febCal = document.getElementById("febCal");
    let marCal = document.getElementById("marCal");
    let aprCal = document.getElementById("aprCal");
    let mayCal = document.getElementById("mayCal");
    let junCal = document.getElementById("junCal");
    let julCal = document.getElementById("julCal");
    let augCal = document.getElementById("augCal");
    let sepCal = document.getElementById("sepCal");
    let octCal = document.getElementById("octCal");
    let novCal = document.getElementById("novCal");
    let decCal = document.getElementById("decCal");
    
    let months = [janCal, febCal, marCal, aprCal, mayCal, junCal, julCal, augCal, sepCal, octCal, novCal, decCal];
    
    let input = Math.floor(Math.random() * 12);
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    monthNone();
    months[input].classList.remove("none");
    for (i = 0; i < 7; i++) {
        let newDay = Math.floor(Math.random() * (7 - i));
        document.getElementById(monthsNick[input] + "D" + i).innerHTML = days[newDay];
        days.splice(newDay, 1);
    }
    
    let aDates = [];
    if (input < 7) {
        for (i = 1; i < 32; i++) {
            aDates.push(i);
        }
    } else if (input > 6 && input < 11) {
        for (i = 1; i < 31; i++) {
            aDates.push(i);
        }
    } else {
        for (i = 1; i < 29; i++) {
            aDates.push(i);
        }
    }
    
    for (i = 1; i < aDates.length + 1; i++) {
        let newDate = Math.floor(Math.random() * (aDates.length - i) + 1);
        console.log(newDate);
        document.getElementById(monthsNick[input] + i).innerHTML = aDates[newDate];
        console.log(document.getElementById(monthsNick[input] + i).innerHTML);
        aDates.splice(newDate, 1);
    }
}

function monthNone() {
    janCal.classList.add("none");
    febCal.classList.add("none");
    marCal.classList.add("none");
    aprCal.classList.add("none");
    mayCal.classList.add("none");
    junCal.classList.add("none");
    julCal.classList.add("none");
    augCal.classList.add("none");
    sepCal.classList.add("none");
    octCal.classList.add("none");
    novCal.classList.add("none");
    decCal.classList.add("none");
    document.getElementById("personal").classList.add("none");
}

let allDates = [];
let allNames = [];

function addEvent() {
    let ogDate = document.getElementById("date");
    let name = document.getElementById("name");
    let ranMon = Math.floor(Math.random() * 12);
    let ranDat = 0;
    
    if (ranMon < 7) {
        ranDat = Math.floor(Math.random() * 32);
    } else if (ranMon > 6 && ranMon < 11) {
        ranDat = Math.floor(Math.random() * 31);
    } else {
        ranDat = Math.floor(Math.random() * 29);
    }
    
    let date = ranDat;
    let personal = document.getElementById("personal");
    allDates.push(monthsNick[ranMon] + date);
    allNames.push(name.value);
    
    console.log(monthsNick[ranMon]);
    console.log(ranDat);
    console.log(monthsNick[ranMon] + date);
    
    if (document.getElementById(monthsNick[ranMon] + date).classList.contains(monthsNick[ranMon] + date)) {
        document.getElementById(monthsNick[ranMon] + date).classList.remove(monthsNick[ranMon] + date);
        document.getElementById(monthsNick[ranMon] + date).classList.add("both");
    }
    else if (!document.getElementById(monthsNick[ranMon] + date).classList.contains(monthsNick[ranMon] + date)) {
        document.getElementById(monthsNick[ranMon] + date).classList.add("personal");
    }
    
    console.log(document.getElementById(monthsNick[ranMon] + date).innerHTML);
    ogDate.value = null;
    name.value = null;
}

function checkEvent(date) {
    console.log(date);
    console.log(allDates);
    if (allDates.includes(date)) {
        document.getElementById("personal").innerHTML = `On the selected day, you have:  ${allNames[allDates.indexOf(date)]}`;
        document.getElementById("personal").classList.remove("none");
    }
    else {
        document.getElementById("personal").classList.add("none");
    }
}
