<template>
  <div
    class="min-h-screen flex flex-col items-center bg-gradient-to-b from-black via-blue-950 to-blue-500"
  >
    <!-- Container Central -->
    <div class="w-full max-w-screen-xl mx-auto p-6">
      <!-- Logo -->
      <div class="w-full flex justify-center mb-20">
        <img
          src="./assets//images/logo.png"
          alt="Logo da Empresa"
          class="h-30 max-w-full"
        />
      </div>

      <!-- Texto Principal -->
      <p
        class="text-white text-xl md:text-2xl font-sans leading-relaxed mb-12 text-center"
      >
        <strong>
          KRA Soluções em Rastreamento é especialista em tecnologia de
          monitoramento e segurança. Oferecemos soluções avançadas para
          rastreamento de veículos, proteção de frotas e monitoramento em tempo
          real, garantindo total controle e tranquilidade para nossos clientes.
          Nossa missão é proteger o que é mais importante para você, com
          tecnologia confiável, suporte especializado e serviços personalizados
          que atendem às suas necessidades.
        </strong>
      </p>

      <!-- Imagens dos Carros -->
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <!-- Carros exibidos progressivamente -->
        <img
          src="./assets/images/car5.png"
          alt="Carro 1"
          class="max-h-[400px] w-auto block"
        />
        <img
        src="./assets/images/car4.png"
        alt="Carro 3"
          class="max-h-[400px] w-auto hidden md:block"
        />
        <img
        src="./assets/images/car2.png"
        alt="Carro 3"
          class="max-h-[420px] w-auto hidden md:block"
        />
    
      </div>

      <!-- Título -->
      <h2
        class="text-white text-xl md:text-2xl font-sans leading-relaxed mb-12 text-center"
      >
        <strong> Contrate a KRA Rastreamento e mantenha-se seguro com: </strong>
      </h2>

      <!-- Cards -->
      <!-- <div class="flex flex-wrap justify-center gap-8 mb-12">
        <StatsCard
          v-for="(card, index) in cards"
          :key="index"
          :name="card.name"
          :stat="card.stat"
          :icon="card.icon"
        />
      </div> -->

      <!-- Texto Final -->
      <p
        class="text-white text-xl md:text-2xl font-sans leading-relaxed mb-12 mt-8 text-center"
      >
        <strong>
          Com a tecnologia avançada dos nossos rastreadores, inúmeros veículos
          já foram recuperados em perfeito estado, minutos após o roubo. Na KRA
          Soluções em Rastreamento, a sua segurança é prioridade. Garanta agora
          mesmo proteção para o que é mais importante. Entre em contato conosco
          e descubra como podemos ajudar você a ter mais controle e
          tranquilidade!
        </strong>
      </p>

      <!-- Banner com Background -->
      <div
  class="relative bg-cover bg-center flex items-center justify-center overflow-hidden"
  :style="{ backgroundImage: `url(${gifBackground})`, height: '50vh' }"
>
  <!-- Conteúdo centralizado -->
  <div
    class="absolute inset-0 flex flex-col items-center justify-center gap-6 p-4"
  >
    <!-- Logo da Empresa -->
  <img
    src="./assets/images/logo.png"
    alt="Logo da Empresa"
    style="height: 180px; width: auto;"
  />


    <!-- Botão do WhatsApp -->
    <div class="flex flex-col items-center gap-2">
      <img
        src="./assets/images/whatsapp.svg"
        alt="WhatsApp Icon"
        class="h-9 w-9"
      />
      <button
        class="rounded-lg border border-transparent py-2 px-4 text-white font-medium bg-green-500 hover:bg-green-600 transition"
        onclick="window.open('https://wa.me/553198232657', '_blank')"
      >
        Fale com a gente no WhatsApp
      </button>
    </div>

    <!-- Botão do Instagram -->
    <div class="flex flex-col items-center gap-2">
      <img
        src="./assets/images/instagram.svg"
        alt="Instagram Icon"
        class="h-9 w-9"
      />
      <button
        class="rounded-lg border border-transparent py-2 px-4 text-white font-medium bg-pink-500 hover:bg-pink-600 transition"
        onclick="window.open('https://www.instagram.com/krarastreamento/', '_blank')"
      >
        Siga-nos no Instagram
      </button>
    </div>
  </div>
</div>

    </div>
  </div>
</template>

<script setup>
// import StatsCard from "./components/StatsCards.vue";
import {
  faHeadset,
  faCarOn,
  faMobileScreenButton,
  faRoute,
  faMagnifyingGlassLocation,
  faLocationPinLock,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";
import gifBackground from "./assets/images/teste.gif";

const cards = [
  { name: "Suporte 24H", icon: faHeadset },
  { name: "Cerca virtual", icon: faVectorSquare },
  { name: "Aviso de ignição", icon: faCarOn },
  { name: "Aplicativo no celular", icon: faMobileScreenButton },
  { name: "Relatório de trajetos", icon: faRoute },
  { name: "Rastreamento 24H", icon: faMagnifyingGlassLocation },
  { name: "Bloqueio imediato", icon: faLocationPinLock },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

body {
  font-family: "Poppins", sans-serif;
}
</style>
