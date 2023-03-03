let currentMonthElectricValue = prompt("Введите текущие показания счетчика:"); //показания электросчетчика на текущую дату

let LastMonthElectricValue = prompt("Введите предыдущие показания  счетчика");//Предыдущие переданные показания элеткросчетчика

let diff = currentMonthElectricValue - LastMonthElectricValue; //Потребленное количество килоВатт

alert(`текущий расход ${diff} квт`); //Расчет потребления электроэнергии за период
const LOW_CONSUMPTION_PRISE_PER_KWT = 0.96; //Стоимость 1 кВт при потреблении менее чем 100кВт за период
const HIGH__CONSUMPTION_PRISE_PER_KWT = 1.46; //Стоимость 1 кВт при потреблении более чем 100кВт за период

let finalElectricBill; //Сумма к оплате

if (diff < 100) {
  finalElectricBill = diff * LOW_CONSUMPTION_PRISE_PER_KWT; //Сумма к оплате при потреблении менее чем 100кВт за период
} else { 
  finalElectricBill = diff * HIGH__CONSUMPTION_PRISE_PER_KWT; // Сумма к оплате при потреблении более чем 100кВт за период
}

alert(`Сумма к оплате ${finalElectricBill} грн.`); //Вывод информации о сумме подлежащей к оплате

