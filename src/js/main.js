let today = new Date()
let thisMonth = today.getMonth();
let thisYear = today.getFullYear();

const monthNav = ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"];
let index = 0;
let year = thisYear;

const setMonth = (monthName) => {
    const month = document.querySelector('#month');
    month.textContent = monthName;
}

const nextMonth = () => {
    index++
    
    if (index === monthNav.length) {
        index = 0;
        year++
    }
    
    setMonth(`${monthNav[index]} ${year}`);
}

const previousMonth = () => {
    index--

    if (index === -1) {
        index = monthNav.length -1;
        year--
    }

    setMonth(`${monthNav[index]} ${year}`);
}

setMonth(`${monthNav[thisMonth]} ${thisYear}`);
document.querySelector('#next').addEventListener('click', nextMonth);
document.querySelector('#previous').addEventListener('click', previousMonth);

