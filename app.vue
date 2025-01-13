<template>
  <Header />

  <div class="min-h-screen flex flex-col items-center bg-white">
    <div class="relative w-full hero-section">
    <!-- Container do Vídeo -->
    <div class="absolute inset-0 w-full h-full">
      <video
        class="w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
        src="https://m2track.com.br/wp-content/uploads/2020/03/Plano-de-fundo-cidade-HD.mp4"
      ></video>
      <div class="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
    </div>
    
    <!-- Conteúdo -->
    <div class="relative z-10 w-full h-full px-4 py-8 md:py-12">
      <div class="container mx-auto h-full">
        <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8 h-full">
          <!-- Coluna de Texto -->
          <div class="w-full md:w-1/2 text-center md:text-left">
            <div class="mb-6">
              <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span class="text-yellow-300">K</span><span class="text-white">ra </span> 
                <span class="text-yellow-300">Soluções</span>
              </h1>
              
              <p class="text-white text-lg md:text-xl lg:text-2xl font-medium mb-6">
                Rastreamento veicular profissional com
                <span class="font-bold text-yellow-300">ZERO</span> 
                custo de equipamento
              </p>

              <ul class="text-white space-y-3 text-base md:text-lg max-w-md mx-auto md:mx-0">
                <li class="flex items-center gap-2">
                  <span class="text-yellow-300 text-xl">✓</span> 
                  Monitoramento 24h em tempo real
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-yellow-300 text-xl">✓</span> 
                  Bloqueio remoto instantâneo
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-yellow-300 text-xl">✓</span> 
                  Aplicativo móvel gratuito
                </li>
              </ul>
            </div>

            <!-- Preço -->
            <div class="relative inline-block">
              <div class="bg-green-600 rounded-lg text-white text-center font-bold py-3 px-6 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <div class="text-3xl md:text-4xl lg:text-5xl">R$ 50,00</div>
                <div class="text-sm md:text-base uppercase tracking-wider">Mensais</div>
              </div>
              <div class="absolute -top-3 -right-3 bg-yellow-300 text-blue-900 text-xs md:text-sm font-bold px-3 py-1 rounded-full transform rotate-12 shadow-md">
                Melhor Preço!
              </div>
            </div>

            <p class="text-white text-sm md:text-base mt-4 italic opacity-90">
              * Instalação profissional inclusa
            </p>
          </div>

          <!-- Formulário -->
          <div class="w-full md:w-auto md:flex-1 mt-6 md:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </div>






    <div class="w-full max-w-screen-xl mx-auto p-6">
      <!-- <div class="w-full flex justify-center mb-20">
        <img
          src="./assets//images/logo.png"
          alt="Logo da Empresa"
          class="h-30 max-w-full"
        />
      </div> -->

      <!-- <p
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
      </p> -->

      <!-- <div class="flex flex-wrap justify-center gap-4 mb-16">
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
      </div> -->

      <h2
        class="text-blue-500 text-xl md:text-4xl font-sans leading-relaxed mb-12 text-center"
      >
        <strong>Vantagens do Rastreamento Veicular</strong>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          v-for="(card, index) in cards"
          :key="index"
          :name="card.name"
          :icon="card.icon"
          :description="card.description"

        />
      </div>

      <h1
        id="rastreador"
        class="text-blue-500 text-6xl md:text-8xl lg:text-7xl font-sans leading-tight mb-12 mt-16 text-center"
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
            class="text-2xl font-bold text-blue-500 text-center lg:text-left mb-4"
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

      <div id="servicos">
        <ImageGallery />
      </div>
     


      <h1
        id="contatos"
        class="text-blue-500 text-6xl md:text-8xl lg:text-7xl font-sans leading-tight mb-12 mt-16 text-center"
      >
        <strong>Contatos</strong>
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
          Fale conosco via WhatsApp
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

      <!-- <h1
        id="servicos"
        class="text-white text-6xl md:text-8xl lg:text-7xl font-sans leading-tight mb-12 mt-16 text-center"
      >
        <strong>Empresa</strong>
      </h1>
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
      </p> -->
      
    </div>
    <div class="w-full bg-black py-6 px-4">
      <div class="max-w-screen-xl mx-auto flex flex-col items-center text-white text-center gap-4">
        <img class="h-20 w-auto" src="./assets/images/logo.png" alt="Logo" />
        <p class="text-sm md:text-base font-light">
          <strong>Telefone:</strong> (31)99823-2657
        </p>
        <p class="text-sm md:text-base font-light">
          <strong>CNPJ KRA Soluções:</strong> 00.000.000/0000-00
        </p>
        <p class="text-sm md:text-base font-light">
          <strong>Endereço:</strong> Av Getúlio Vargas, 671, Savassi, BH/MG, Belo Horizonte, Brazil 30112021
        </p>
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
  faHouse,
  faLocationPinLock,
  faVectorSquare,
  faSatelliteDish,
  faTruck,
  faPercent,
  faHandshakeAngle,
  faHandHoldingDollar
} from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header.vue";
import Accordion from "./components/Accordion.vue";
import ContactForm from "./components/ContactForm.vue";
import ImageGallery from './components/ImageGallery.vue';


const cards = [
{ name: "Suporte 24H", icon: faHeadset, description: "Em casos de risco, estaremos sempre de prontidão para atender o seu chamado se precisar, com relatórios e bloqueio." },
{ name: "Cerca virtual", icon: faVectorSquare, description: "Defina áreas seguras para o veículo e receba alertas caso ele saia do perímetro estabelecido." },
{ name: "Aviso de ignição", icon: faCarOn, description: "Receba notificações sempre que o veículo for ligado ou desligado, aumentando a segurança e controle." },
{ name: "Assistência veicular", icon: faHandshakeAngle,  description: "Temos planos com direitos a utilização de reboques, troca de pneu, táxi, chaveiro, recarga de bateria e mais." },
{ name: "Relatório de trajetos", icon: faRoute, description: "Acompanhe o histórico completo dos trajetos realizados pelo veículo de forma detalhada e confiável." },
{ name: "Aplicativo Movel", icon: faMobileScreenButton, description: "Tenha acesso a todas as funcionalidades do rastreamento diretamente no seu smartphone, com praticidade e mobilidade." },
{ name: "Bloqueio imediato", icon: faLocationPinLock, description: "Tenha total segurança com a possibilidade de bloquear o veículo instantaneamente em situações de emergência ou risco." },
{ name: "Instalação em sua residência", icon: faHouse,  description: "Você não precisa se preocupar em ir em lugar nenhum, instalamos rapidamente onde você estiver." },
{ name: "Comunicação confiável", icon: faSatelliteDish,  description: "Prezamos pela extrema qualidade no rastreador e no chip para garantir a melhor comunicação." },
{ name: "Também é ideal para monitoramento de frotas", icon: faTruck,  description: "Se torna muito mais simples evitar irregularidades como roubo, desvios, recuperação de carga etc." },
{ name: "Aumento da chance de recuperação", icon: faPercent,  description: "Com um rastreador em seu veículo, as chances de recuperá-lo aumentam significativamente" },
{ name: "Custo acessível", icon: faHandHoldingDollar,  description: "O rastreamento veicular possui um preço muito menor que de uma proteção veicular ou seguros." },


];


import { ref, provide } from "vue";
import { icon } from "@fortawesome/fontawesome-svg-core";
const openAccordionId = ref(null);

const setOpenAccordionId = (id) => {
  openAccordionId.value = id;
};

provide("openAccordionId", openAccordionId);
provide("setOpenAccordionId", setOpenAccordionId);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

.hero-section {
  min-height: 75vh;
}

@media (max-height: 800px) {
  .hero-section {
    min-height: 100vh;
  }
  
  h1 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }
  
  ul {
    font-size: 0.9rem;
  }
  
  .text-3xl {
    font-size: 1.5rem;
  }
}

@media (max-width: 640px) {
  .container {
    padding: 1rem;
  }
  
  .text-3xl {
    font-size: 1.75rem;
  }
  
  ul {
    margin-bottom: 1rem;
  }
}
</style>