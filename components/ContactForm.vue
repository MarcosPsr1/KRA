<template>
  <div class="hero min-h-fit flex items-center justify-center">
    <div class="hero-content w-full">
      <div class="card bg-yellow-300 shadow-2xl p-4 md:p-6 rounded-lg w-full max-w-sm">
        <h3 class="text-lg md:text-xl py-4 font-bold">
          Faça uma cotação grátis conosco!
        </h3>
        <form @submit.prevent="sendMessage" class="space-y-4">
          <div>
            <label
              for="name"
              class="block mb-1 text-sm font-medium text-blue-600"
            >
              Nome
            </label>
            <input
              v-model="form.name"
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              placeholder="Nome"
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-1 text-sm font-medium text-blue-600"
            >
              Email
            </label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              placeholder="email@gmail.com"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              class="block mb-1 text-sm font-medium text-blue-600"
            >
              Telefone
            </label>
            <input
              v-model="form.phone"
              type="tel"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              placeholder="(00) 90000-0000"
              :class="{ 'border-red-500': phoneError }"
              @input="validatePhone"
              required
            />
            <p v-if="phoneError" class="text-red-500 text-xs mt-1">
              O número de telefone deve conter pelo menos 10 dígitos.
            </p>
          </div>
          <div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-4 py-2 text-center"
              :disabled="phoneError"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
      },
      phoneError: false,
    };
  },
  methods: {
    validatePhone() {
      const phoneDigits = this.form.phone.replace(/\D/g, "");
      this.phoneError = phoneDigits.length < 10;
    },
    sendMessage() {
      this.validatePhone();

      if (this.phoneError) {
        alert("Por favor, corrija o número de telefone antes de enviar.");
        return;
      }

      const whatsappNumber = "55XXXXXXXXXX";
      const message = `
        Olá! Gostaria de compartilhar meus dados:
        - Nome: ${this.form.name}
        - Email: ${this.form.email}
        - Telefone: ${this.form.phone}
      `;
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
@media (max-height: 800px) {
  .hero {
    padding: 1rem 0;
  }
  
  form {
    font-size: 0.9rem;
  }
  
  input {
    padding: 0.5rem;
  }
}
</style>