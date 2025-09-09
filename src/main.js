import { createApp } from 'vue'
import "./assets/styles/main.scss";
import App from './App.vue'
import IMask from 'imask';

const app = createApp(App);

// директива для imask
const imaskDirective = {
  beforeMount(el, binding) {
    // якщо передане рядком — вважаємо що це маска, і створюємо опцію { mask: value }
    const raw = binding.value;
    const options = typeof raw === 'string' ? { mask: raw } : (raw || {});

    // знаходимо input (якщо директива повішена на обгортку)
    const input = el.tagName === 'INPUT' ? el : el.querySelector('input') || el;

    // створюємо інстанс IMask і зберігаємо посилання
    input._imask = IMask(input, options);
  },

  updated(el, binding) {
    const input = el.tagName === 'INPUT' ? el : el.querySelector('input') || el;
    if (input._imask && binding.value !== binding.oldValue) {
      const raw = binding.value;
      const options = typeof raw === 'string' ? { mask: raw } : (raw || {});
      input._imask.updateOptions(options);
    }
  },

  unmounted(el) {
    const input = el.tagName === 'INPUT' ? el : el.querySelector('input') || el;
    if (input._imask) {
      input._imask.destroy();
      delete input._imask;
    }
  }
};

app.directive('imask', imaskDirective);

app.mount('#app');