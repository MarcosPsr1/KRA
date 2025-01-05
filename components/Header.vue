<template>
  <header class="bg-blue-950">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Company</span>
          <img class="h-20 w-auto" src="../assets//images/logo.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <a
          href="#"
          class="block rounded-lg px-3 py-2 text-base/7 font-semibold text-white "
          @click.prevent="scrollToSection('rastreador')"
        >
          Rastreador
        </a>
        <a
          href="#"
          class="block rounded-lg px-3 py-2 text-base/7 font-semibold text-white "
          @click.prevent="scrollToSection('servicos')"
        >
          Serviços
        </a>
        <a
          href="#"
          class="block rounded-lg px-3 py-2 text-base/7 font-semibold text-white "
          @click.prevent="scrollToSection('contatos')"
        >
          Contatos
        </a>   
        <a
          href="#"
          class="block rounded-lg px-3 py-2 text-base/7 font-semibold text-white "
          onclick="window.open('https://wa.me/553198232657', '_blank')"
        >
          Contrate Agora
        </a>    
       </PopoverGroup>
    </nav>
    <!-- celular aqui -->
    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >

      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-20 w-auto" src="../assets//images/logo.png" alt="" />

          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-100"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...products, ...callsToAction]"
                    :key="item.name"
                    as="a"
                    :href="item.href"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</DisclosureButton
                  >
                </DisclosurePanel>
              </Disclosure>
              <a
          href="#"
          class="block rounded-lg px-3 py-2 text-base/7 font-semibold text-white "
          @click.prevent="scrollToSection('rastreador')"
        >
          Rastreador
        </a>
        <a
          href="#"
          class="block rounded-lg px-3 py-2 text-base/7 font-semibold text-white "
          @click.prevent="scrollToSection('servicos')"
        >
          Serviços
        </a>
        <a
          href="#"
          class="block rounded-lg px-3 py-2 text-base/7 font-semibold text-white "
          @click.prevent="scrollToSection('servicos')"
        >
          Contatos
        </a> 
        <a
          href="#"
          class="block rounded-lg px-3 py-2 text-base/7 font-semibold text-white "
          onclick="window.open('https://wa.me/553198232657', '_blank')"
        >
          Contrate Agora
        </a>  
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";

const scrollToSection = (id) => {
  mobileMenuOpen.value = false; // Fechar o menu
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const mobileMenuOpen = ref(false);
</script>
