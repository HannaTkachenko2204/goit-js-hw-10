import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const delay = Number(form.elements.delay.value);
  const fieldset = form.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fieldset === 'fulfilled') {
        resolve(console.log(`✅ Fulfilled promise in ${delay}ms`));
      } else {
        reject(console.log(`❌ Rejected promise in ${delay}ms`));
      }
    }, delay);
  });

  promise
    .then(value => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#326101',
        messageColor: '#FFFFFF',
        transitionIn: 'fadeln',
        timeout: 4000,
      });
    })
    .catch(error => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: '#FFFFFF',
        transitionIn: 'fadeln',
        timeout: 4000,
      });
    });
  formEl.reset();
}

formEl.addEventListener('submit', handleSubmit);
