import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

console.log("Timer");

const inputEl = document.querySelector("#datetime-picker");

let userSelectedDate;

const options = {
    enableTime: true, // boolean false Включает выбор времени
    time_24hr: true, // boolean false Отображает выбор времени в 24-часовом режиме без выбора AM/PM, если этот параметр включен.
    defaultDate: new Date(), // String null Устанавливает начальную выбранную дату(ы).
    minuteIncrement: 1, // Integer(целое число) 5 Регулирует шаг ввода минут (включая прокрутку)
    onClose(selectedDates) { // Function null Функции, которые будут активироваться каждый раз при закрытии календаря.
      console.log(selectedDates[0]); // selectedDates — массив объектов Date, выбранных пользователем. Если даты не выбраны, массив пуст.
    },
  };

  //function flatpickr(inputEl, options) {};

