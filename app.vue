<template>
  <Header />

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
          src="./assets/images/car1.png"
          alt="Carro 1"
          class="max-h-[400px] w-auto block"
        />
        <img
          src="./assets/images/car3.png"
          alt="Carro 3"
          class="max-h-[400px] w-auto"
        />
        <img
          src="./assets/images/car2.png"
          alt="Carro 3"
          class="max-h-[420px] w-auto"
        />
      </div>

      <!-- Título -->
      <h2
        class="text-white text-xl md:text-2xl font-sans leading-relaxed mb-12 text-center"
      >
        <strong> Contrate a KRA Rastreamento e mantenha-se seguro com: </strong>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          v-for="(card, index) in cards"
          :key="index"
          :name="card.name"
          :icon="card.icon"
        />
      </div>

      <h1
        class="text-white text-6xl md:text-8xl lg:text-7xl font-sans leading-tight mb-12 mt-16 text-center"
      >
        <strong>Rastreador</strong>
      </h1>

      <div
        class="flex flex-wrap lg:flex-nowrap justify-center items-start gap-8 mb-16"
      >
        <img
          src="./assets/images/rastreador.png"
          alt="rastreador"
          class="max-h-[400px] w-auto"
        />

        <div class="flex flex-col gap-4 w-full lg:w-1/2">
          <h2
            class="text-2xl font-bold text-white text-center lg:text-left mb-4"
          >
            Características:
          </h2>

          <Accordion
            title="Principais Funcionalidades"
            buttonColor="bg-blue-500 hover:bg-blue-800"
            id="funcionalidades"
          >
            <ul class="list-disc list-inside text-lg md:text-xl">
              <li><strong>Bloqueio:</strong> Bloqueio imediato do veículo.</li>
              <li><strong>Monitoramento:</strong> Monitore em tempo real.</li>
              <li>
                <strong>Detector de Jammer:</strong> Proteção contra
                bloqueadores de sinal.
              </li>
              <li>
                <strong>Configuração Remota:</strong> Via PC, GPRS ou SMS.
              </li>
              <li>
                <strong>Atualização de Firmware:</strong> Realizada remotamente.
              </li>
            </ul>
          </Accordion>

          <Accordion
            title="Especificações Técnicas"
            buttonColor="bg-blue-500 hover:bg-blue-800"
            id="especificacoes"
          >
            <ul class="list-disc list-inside text-lg md:text-xl">
              <li>
                <strong>Memória:</strong> Capacidade de armazenar até 1000
                posições e 200 cercas virtuais.
              </li>
              <li>
                <strong>GPS e GSM/GPRS:</strong> Antenas internas de alta
                sensibilidade.
              </li>
              <li><strong>Certificações:</strong> CE, FCC, RoHS e Anatel.</li>
              <li>
                <strong>Resistência:</strong> Resistência à água (IP67), ideal
                para enfrentar diferentes condições climáticas.
              </li>
            </ul>
          </Accordion>

          <Accordion
            title="Alta Precisão GPS"
            buttonColor="bg-blue-500 hover:bg-blue-800"
            id="precisao"
          >
            <ul class="list-disc list-inside text-lg md:text-xl">
              <li>
                <strong>Receptor:</strong> 56 canais com atualização a 10 Hz.
              </li>
              <li><strong>Precisão:</strong> 2.5 m CEP (ou 2.0 m com SBAS).</li>
              <li>
                <strong>Sensibilidade:</strong> Ideal para diversas condições,
                com tracking a –162 dBm.
              </li>
            </ul>
          </Accordion>
        </div>
      </div>

      <h1
        class="text-white text-6xl md:text-8xl lg:text-7xl font-sans leading-tight mb-12 mt-16 text-center"
      >
        <strong>Serviços</strong>
      </h1>

      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <img
          src="./assets/images/v1.png"
          alt="Carro 3"
          class="max-h-[400px] w-auto"
        />
        <img
          src="./assets/images/v2.png"
          alt="Carro 3"
          class="max-h-[400px] w-auto"
        />
        <img
          src="./assets/images/v3.png"
          alt="Carro 3"
          class="max-h-[420px] w-auto"
        />
      </div>

      <h1
        class="text-white text-6xl md:text-8xl lg:text-7xl font-sans leading-tight mb-12 mt-16 text-center"
      >
        <strong>Contatos</strong>
      </h1>
      <h1
        class="text-white text-6xl md:text-8xl lg:text-2xl font-sans leading-tight mb-12 mt-16 text-center"
      >
        <P><strong>Telefone:</strong></P>
        <strong> (31)99823-2657 </strong>
      </h1>

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
</template>

<script setup>
import FeatureCard from "./components/FeatureCard.vue";
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
import Header from "./components/Header.vue";
import Accordion from "./components/Accordion.vue";

const cards = [
  { name: "Suporte 24H", icon: faHeadset },
  { name: "Cerca virtual", icon: faVectorSquare },
  { name: "Aviso de ignição", icon: faCarOn },
  { name: "Relatório de trajetos", icon: faRoute },
  { name: "Rastreamento 24H", icon: faMagnifyingGlassLocation },
  { name: "Bloqueio imediato", icon: faLocationPinLock },
];

import { ref, provide } from "vue";
const openAccordionId = ref(null);

const setOpenAccordionId = (id) => {
  openAccordionId.value = id;
};

provide("openAccordionId", openAccordionId);
provide("setOpenAccordionId", setOpenAccordionId);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

body {
  font-family: "Poppins", sans-serif;
}
</style>
