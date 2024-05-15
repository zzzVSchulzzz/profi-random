
window.onload = function() {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#vathersNameOutput').innerText = initPerson.vathersName;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthDateOutput').innerText = initPerson.birthDate;
    document.querySelector('#birthMonthOutput').innerText = initPerson.birthMonth;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
};

const gen = document.querySelector('#profiGen');
gen.addEventListener('click', function(){
    const newPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = newPerson.firstName;
    document.querySelector('#surnameOutput').innerText = newPerson.surname;
    document.querySelector('#vathersNameOutput').innerText = newPerson.vathersName;
    document.querySelector('#professionOutput').innerText = newPerson.profession;
    document.querySelector('#genderOutput').innerText = newPerson.gender;
    document.querySelector('#birthDateOutput').innerText = newPerson.birthDate;
    document.querySelector('#birthMonthOutput').innerText = newPerson.birthMonth;
    document.querySelector('#birthYearOutput').innerText = newPerson.birthYear;
})

const del = document.querySelector('#profiDel');
del.addEventListener('click', function(){
    const clear = personGenerator.clearPerson();
    document.querySelector('#firstNameOutput').innerText = clear.firstName;
    document.querySelector('#surnameOutput').innerText = clear.surname;
    document.querySelector('#vathersNameOutput').innerText = clear.vathersName;
    document.querySelector('#professionOutput').innerText = clear.profession;
    document.querySelector('#genderOutput').innerText = clear.gender;
    document.querySelector('#birthDateOutput').innerText = clear.birthDate;
    document.querySelector('#birthMonthOutput').innerText = clear.birthMonth;
    document.querySelector('#birthYearOutput').innerText = clear.birthYear;
})