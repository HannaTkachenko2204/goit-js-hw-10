import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { createLogger } from "vite";

console.log("Timer");

const inputEl = document.querySelector("#datetime-picker");
const btnEl = document.querySelector("button");

btnEl.disabled = true;

let userSelectedDate;

const options = {
    enableTime: true, // boolean false Включает выбор времени
    time_24hr: true, // boolean false Отображает выбор времени в 24-часовом режиме без выбора AM/PM, если этот параметр включен.
    defaultDate: new Date(), // String null Устанавливает начальную выбранную дату(ы).
    minuteIncrement: 1, // Integer(целое число) 5 Регулирует шаг ввода минут (включая прокрутку)
    onClose(selectedDates) { // Function null Функции, которые будут активироваться каждый раз при закрытии календаря.
    // selectedDates — массив объектов Date, выбранных пользователем. Если даты не выбраны, массив пуст.
      if(selectedDates[0].getTime() < options.defaultDate.getTime()) {
        window.alert("Please choose a date in the future");
        btnEl.disabled = true;
      }
      btnEl.disabled = false;
      userSelectedDate = selectedDates[0];
      console.log(userSelectedDate);
    },
  };

  flatpickr(inputEl, options);

  function handleClick() {
    //console.log(userSelectedDate.getDate);
  };

  btnEl.addEventListener("click", handleClick);



