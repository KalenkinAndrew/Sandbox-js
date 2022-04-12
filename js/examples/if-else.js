//let segment1 = 5;
//let segment2 = 10;
//let segment3 = 50;

//let tmp = segment1;

//console.log('Подсчет наибольшего отрезка из трех');

//if(segment2 > tmp){tmp = segment2;}else if(segment3>tmp){tmp=segment3;}

//console.log('Наибольший отрезок равен ', tmp);

let temperature = 6;

console.log(`Сейчас на улице ${temperature} градусов Цельсия`);

if(temperature < -30){
    console.log('Оставайтесь дома');
}
else if(temperature <= -10){
    console.log('Сегодня холодно');
}
else if(temperature <= 5){
    console.log('Не холодно');
}
else if(temperature <= 15){
    console.log('Тепло');
}
else if(temperature <= 25){
    console.log('Очень тепло');
}
else if(temperature < 35){
    console.log('Жарко');
}
else{
    console.log('Пекло');
}

