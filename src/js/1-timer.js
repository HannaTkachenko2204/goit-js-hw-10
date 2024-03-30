import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector("#datetime-picker");
const btnEl = document.querySelector("button");
const daysEl = document.querySelector("[data-days]")
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

btnEl.disabled = true;
let userSelectedDate;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

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
        return;
      }
      btnEl.disabled = false;
      userSelectedDate = selectedDates[0];
      console.log(userSelectedDate);
    },
  };

  flatpickr(inputEl, options);

  function handleClick() {
    btnEl.disabled = true;
    inputEl.disabled = true;
    // const resalt = userSelectedDate.getTime() - Date.now();
    // console.log(resalt);
    // daysEl.textContent = addLeadingZero(convertMs(resalt).days);
    // hoursEl.textContent = addLeadingZero(convertMs(resalt).hours);
    // minutesEl.textContent = addLeadingZero(convertMs(resalt).minutes);
    // secondsEl.textContent = addLeadingZero(convertMs(resalt).seconds);
    setInterval(() => {
      const resalt = userSelectedDate.getTime() - Date.now();
      console.log(resalt);
      daysEl.textContent = addLeadingZero(convertMs(resalt).days);
      hoursEl.textContent = addLeadingZero(convertMs(resalt).hours);
      minutesEl.textContent = addLeadingZero(convertMs(resalt).minutes);
      secondsEl.textContent = addLeadingZero(convertMs(resalt).seconds);
    }, 1000)
  };

  btnEl.addEventListener("click", handleClick);