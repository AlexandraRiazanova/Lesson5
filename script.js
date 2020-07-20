// //Написать ф-ю, реализующую возведение числа в произвольную степень, используя циклы
function pow(a, n) {
    var b = a;
    for (var i = 1; i < n; i++) {
        b *= a;
    }
    return b;
}
console.log(pow(2, 5));

// Разбить задачу с угадыванием числа на функции.

function new1 (number, quess) {
    let cont = true;
    while(quess !== number){
        quess = parseInt(prompt("Угадайте число"))
        console.log(number, quess)
        if(quess !== number){
            cont = confirm("Вы не угадали число. Продолжить?")
        }else if (quess == number){
            alert("Число угадано!")
        }
        if (cont == false){
            alert("Game over")
            break;
        }
    }
};
function check(){
    let number = Math.round(Math.random() * 10);
    let quess = 0;
    new1(number, quess);  
}
check()






