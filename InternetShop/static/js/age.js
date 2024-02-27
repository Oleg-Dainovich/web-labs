document.addEventListener('DOMContentLoaded', function () {
    if (!sessionStorage.getItem('ageConfirmed')) {
        showAgeModal();
    }
});

function checkAge() {
    const birthdate = document.getElementById('birthdate').value;
    const {age, dayOfWeek} = getAgeAndDay(birthdate);
    if (age >= 18) {
        alert(`Ваш возраст: ${age}. Вы родились в: ${dayOfWeek}`);
        sessionStorage.setItem('ageConfirmed', 'true');
        hideAgeModal();
    } else {
        alert("Только 18+");
    }
}

function showAgeModal() {
    document.body.classList.add('popUpOn');
    document.getElementById('agePopUp').style.display = 'flex';
}

function hideAgeModal() {
    document.body.classList.remove('popUpOn');
    document.getElementById('agePopUp').style.display = 'none';

}
function getAgeAndDay(birthdate) {
    const today = new Date();
    const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Суб'];
    const birthdateDate = new Date(birthdate);
    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
        age--;
    }
    const dayOfWeek = daysOfWeek[birthdateDate.getDay()];

    return {age, dayOfWeek};
}
