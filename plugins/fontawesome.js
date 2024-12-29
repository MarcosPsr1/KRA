// Importando o Font Awesome e o ícone que você deseja usar
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Adicionando o ícone à biblioteca do Font Awesome
library.add(faUserSecret);

// Definindo o plugin para o Nuxt
export default defineNuxtPlugin((nuxtApp) => {
  // Registrando o componente FontAwesomeIcon globalmente
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
