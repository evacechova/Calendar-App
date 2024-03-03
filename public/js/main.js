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
    monthIndex++;
    
    if (monthIndex === monthNav.length) {
        monthIndex = 0;
        year++;
    }
    
    setMonth(`${monthNav[monthIndex]} ${year}`);
    dayDivs = document.querySelectorAll('.day-no');
    
    for (let div of dayDivs) {
        div.textContent = "";
    }

    dayPointer = firstDayOfMonth (year, monthIndex);
    monthLength = daysInMonth(year, monthIndex);
    dayToDivAssignment();

    highlightDayWithEvent(testEvent, year, monthIndex+1);
}

const previousMonth = () => {
    monthIndex--

    if (monthIndex === -1) {
        monthIndex = monthNav.length -1;
        year--
    }

    setMonth(`${monthNav[monthIndex]} ${year}`);
    dayDivs = document.querySelectorAll('.day-no');
    
    for (let div of dayDivs) {
        div.textContent = "";
    }

    dayPointer = firstDayOfMonth (year, monthIndex);
    monthLength = daysInMonth(year, monthIndex);
    dayToDivAssignment();
    highlightDayWithEvent(testEvent, year, monthIndex+1);
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

let dayDivs = document.querySelectorAll('.day-no'); //selects all day divs

let dayPointer = firstDayOfMonth(year, thisMonth);

let monthLength = daysInMonth(year, thisMonth);

const dayToDivAssignment = () => {
    console.log(dayPointer);
    if (dayPointer === 0) {
        dayPointer = 6;
    } else {
        dayPointer--;
    }

    for(const div of dayDivs) {
        div.classList.remove('has-number');
    }

    for (let i = 1; i <= monthLength; i++) {
        dayDivs[dayPointer].classList.add('has-number');
        dayDivs[dayPointer].textContent = i;
        dayPointer++;    
        // console.log(i);    
        // console.log(dayPointer);
    }
}

dayToDivAssignment();

const divHighlightOn = () => {
    for(const div of dayDivs) {
        div.addEventListener('click', () => {    
            for(const div of dayDivs) {
                div.classList.remove('markedDiv');
            }
            div.classList.add('markedDiv');
        })
    }
}

divHighlightOn();

//----------------------------------------------------

//Modal

const modal = document.querySelector('#modal');
const openModalArray = document.querySelectorAll('.event__create-button');
const closeModal = document.querySelector('.modal__close');

for (const modalButton of openModalArray) {
    modalButton.addEventListener('click', () => {
        modal.showModal();
    })
}

closeModal.addEventListener('click', () => {
    modal.close();
})

//Mobal submit button

let modalSubmitButton = document.querySelector("#modal__submit-button");

modalSubmitButton.addEventListener('click', (e) => {
    if(document.querySelector('#form').checkValidity()) {

    e.preventDefault();

    let inputEventDescription = document.querySelector('#event-description');
    //console.log(inputEventDescription.value);
    const eventDecritptionSaved = document.querySelector('#event-description--saved');
    eventDecritptionSaved.textContent = inputEventDescription.value;

    let inputStartDate = document.querySelector('#start-date');
    //console.log(inputStartDate.value);
    const startDateFormat = new Date (inputStartDate.value);
    let inputEndDate = document.querySelector('#end-date');
    //console.log(inputEndDate.value);
    const endDateFormat = new Date (inputEndDate.value);

    const options = {
        weekday: "short",
        day: "numeric",
        month: "numeric",
        year: "numeric",
    }

    const eventDateSaved = document.querySelector('#event-date--saved')
    eventDateSaved.textContent = `${startDateFormat.toLocaleString('cs-CZ', options)} – ${endDateFormat.toLocaleString('cs-CZ', options)}`;

    let form = document.querySelector('#form');

    form.submit();
    }
});

//Test event

const testEvent = {
    eventDescription: "Filmový festival",
    eventStart: "2024-03-12",
    eventEnd: "2024-03-21"
}

const highlightDayWithEvent = (argEvent, argYear, argMonth) => {
    const [year1, month1, day1] = argEvent.eventStart.split('-');
    const [year2, month2, day2] = argEvent.eventEnd.split('-');
    for(const div of dayDivs) {
        div.classList.remove('divWithEvent');
    }
    
    if(year1 != argYear) {
        return;
    }
    if(+month1 != argMonth) {
        return;
    }
    for(const div of dayDivs) {
        if(div.textContent >= +day1 && div.textContent <= +day2) {
            div.classList.add('divWithEvent');
        }
    }   
}

highlightDayWithEvent(testEvent, 2024, 3);

for(const div of dayDivs) {
    div.addEventListener('click', () => {
        
    const startDateFormat = new Date (testEvent.eventStart);
    const endDateFormat = new Date (testEvent.eventEnd);

    const options = {
        weekday: "short",
        day: "numeric",
        month: "numeric",
        year: "numeric",
    }   
        if(div.classList.contains('divWithEvent')) {
            document.querySelector('#event-description--saved').textContent = testEvent.eventDescription;
            document.querySelector('#event-date--saved').textContent = `${startDateFormat.toLocaleString('cs-CZ', options)} – ${endDateFormat.toLocaleString('cs-CZ', options)}`;
        } else {
            document.querySelector('#event-description--saved').textContent = "Žádná událost";
            document.querySelector('#event-date--saved').textContent = "xx dd.mm.rrrr – yy dd.mm.rrrr";
        }
    })
}