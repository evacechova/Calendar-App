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
}

const previousMonth = () => {
    monthIndex--

    if (monthIndex === -1) {
        monthIndex = monthNav.length -1;
        year--
    }

    setMonth(`${monthNav[monthIndex]} ${year}`);
}

setMonth(`${monthNav[thisMonth]} ${thisYear}`);
document.querySelector('#next').addEventListener('click', nextMonth);
document.querySelector('#previous').addEventListener('click', previousMonth);

//-------------------------------------------

//Calendar Body

const daysInMonth = (year, month) => new Date(year, month + 1, 0 ).getDate();
console.log(monthIndex);
console.log(daysInMonth(year, monthIndex));

