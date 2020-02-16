var userAge = prompt("Вам сколько лет ?");
if (userAge == 0 || userAge <= 18) {
    alert("Вы молодой, Надо учится");
}
else if (userAge == 18 || userAge <= 50) {
    alert("Вам скоро пора на пенсию");
}
else if (userAge >= 60 || userAge <= 70){
    alert(" Вы уже пенсионер");
}
else{
    alert("Люди столько не живут");
}