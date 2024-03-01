let today = new Date()
let thisMonth = today.getMonth();
let thisYear = today.getFullYear();

//NavBar settings

const monthNav = ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"];
let monthIndex = thisMonth;
let year = thisYear;

const setMonth = (monthName) => {
    const month = document.querySelector('#month');
    month.textContent = monthName;
}

const nextMonth = () => {
    monthIndex++
    
    if (monthIndex === monthNav.length) {
        monthIndex = 0;
        year++
    }
    
    setMonth(`${monthNav[monthIndex]} ${year}`);
    dayDivs = document.querySelectorAll('.day-no');
    firstDayOfMonth(year, monthIndex);
    dayPointer = firstDayOfMonth (year, monthIndex) - 1;
    daysInMonth(year, thisMonth);
    monthLength = daysInMonth(year, thisMonth);
    dayToDivAsignment();
}

const previousMonth = () => {
    monthIndex--

    if (monthIndex === -1) {
        monthIndex = monthNav.length -1;
        year--
    }

    setMonth(`${monthNav[monthIndex]} ${year}`);
    dayDivs = document.querySelectorAll('.day-no');
    firstDayOfMonth(year, monthIndex);
    dayPointer = firstDayOfMonth (year, monthIndex) - 1;
    daysInMonth(year, thisMonth);
    monthLength = daysInMonth(year, thisMonth);
    dayToDivAsignment();
}

setMonth(`${monthNav[thisMonth]} ${thisYear}`);
document.querySelector('#next').addEventListener('click', nextMonth);
document.querySelector('#previous').addEventListener('click', previousMonth);

//-------------------------------------------

//Calendar Body

const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate(); //determines the number of days in a month

console.log(daysInMonth(year, thisMonth));

const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay(); //determines what day of the week the new month starts on

console.log(firstDayOfMonth(year, thisMonth ));

//----------------------------------------------

let dayDivs = document.querySelectorAll('.day-no'); //selects all day divs

let dayPointer = firstDayOfMonth(year, thisMonth) - 1;

let monthLength = daysInMonth(year, thisMonth);

const dayToDivAsignment = () => {
    for (let i = 1; i <= monthLength; i++) {
        dayDivs[dayPointer].textContent = i;
        dayPointer++;
        // console.log(i);    
        // console.log(dayPointer);
    }
}

dayToDivAsignment();