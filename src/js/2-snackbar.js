import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const btnEl = document.querySelector("button");
const delayEl = document.querySelector('input[name="delay"]')
const fulfilledEl = document.querySelector('input[value="fulfilled"]');

let delay = 0;

delayEl.addEventListener("input", (event) => {
  delay = event.currentTarget.value;
})

function handleClick(event) {
    event.preventDefault();
    const promise = new Promise((resolve, reject) => {
          if (fulfilledEl.checked) {
            resolve(
                iziToast.show({
                    message: `✅ Fulfilled promise in ${delay}ms`,
                    position: 'topRight',
                    timeout: delay,
                  })
                  );
          } else {
            reject(
                iziToast.show({
                    message: `❌ Rejected promise in ${delay}ms`,
                    position: 'topRight',
                    timeout: delay,
                  })
                );
          }})
      promise.then(
        value => {
          console.log(`✅ Fulfilled promise in ${delay}ms`);
        },
        error => {
          console.log(`❌ Rejected promise in ${delay}ms`);
        });
}

btnEl.addEventListener("click", handleClick);

