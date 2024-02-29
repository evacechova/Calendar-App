const monthNav = ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"];
let index = 0;

const setMonth = (monthName) => {
    const month = document.querySelector('#month');
    month.textContent = monthName;
}

const nextMonth = () => {
    index++
    
    if (index === monthNav.length) {
        index = 0;
    }
    
    setMonth(monthNav[index]);
}

const previousMonth = () => {
    index--

    if (index === -1) {
        index = monthNav.length -1;
    }

    setMonth(monthNav[index]);
}

setMonth(monthNav[index]);
document.querySelector('#next').addEventListener('click', nextMonth);
document.querySelector('#previous').addEventListener('click', previousMonth);

