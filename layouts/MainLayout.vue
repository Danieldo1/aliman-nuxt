<template>
  <div id="MainLayout" class="w-full fixed z-50">
    <div id="TopMenu" class="w-full bg-[#FAFAFA] border-b md:block hidden">
      <ul
        class="flex justify-end items-center text-xs text-[#333] font-light px-2 h-10 bg-[#FAFAFA] max-w-[1200px] mx-auto"
      >
        <li
          class="border-r border-r-gray-400 px-3 hover:text-blue-500 cursor-pointer"
        >
          Sell on AliMan
        </li>
        <li
          class="border-r border-r-gray-400 px-3 hover:text-blue-500 cursor-pointer"
        >
          Cookie Policy
        </li>
        <li
          class="border-r border-r-gray-400 px-3 hover:text-blue-500 cursor-pointer"
        >
          Help
        </li>
        <li
          class="border-r border-r-gray-400 px-3 hover:text-blue-500 cursor-pointer"
        >
          Buyer Protection
        </li>
        <li class="px-3 hover:text-blue-500 cursor-pointer flex items-center">
          <Icon name="ic:sharp-install-mobile" size="18" />
          App
        </li>

        <li
          @mouseenter="isAccountMenu = true"
          @mouseleave="isAccountMenu = false"
          class="relative px-3 hover:text-blue-500 cursor-pointer flex items-center h-full"
          :class="
            isAccountMenu
              ? 'bg-white border z-40 shadow-lg'
              : 'border border-[#FAFAFA]'
          "
        >
          <Icon name="ic:baseline-account-circle" size="18" />
          Account
          <Icon name="ic:baseline-keyboard-arrow-down" size="18" class="ml-5" />
          <div
            id="AccountMenu"
            v-if="isAccountMenu"
            class="absolute w-[220px] top-[38px] -left-[92.5px] bg-white text-[#333] z-40 border-x border-b"
          >
            <div v-if="true">
              <div class="text-semibold text-[15px] my-4 px-3">
                Welcome to AliMan
              </div>
              <div class="flex items-center gap-1 px-3 mb-3">
                <NuxtLink
                  to="/auth"
                  class="bg-[#7fadf6] border border-[#f2f2f2] rounded-md p-2 text-[16px] text-white px-3 hover:bg-white hover:text-[#7fadf6] cursor-pointer w-full text-center transition-colors duration-200 ease-in-out"
                >
                  Login/Register
                </NuxtLink>
              </div>
            </div>

            <div class="border-b" />
            <ul class="bg-white">
              <li
                @click="navigateTo('/orders')"
                class="text-[15px] px-3 py-2 hover:bg-[#f2f2f2] cursor-pointer"
              >
                My Orders
              </li>
              <li
                v-if="true"
                class="text-[15px] px-3 py-2 hover:bg-[#f2f2f2] cursor-pointer"
              >
                Sign out
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <div id="MainHeader" class="flex items-center w-full bg-white">
      <div class=" flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-1 mx-auto ">
        <NuxtLink to="/" class="min-w-[50px]">
          <img src="/logo.png" alt="logo" width="50"  />
        </NuxtLink>

        <div class="max-w-[700px] w-full md:block hidden">
            <div class="relative">
                <div class="flex items-center border-2 border-blue-500 rounded-md w-full">
                    <input 
                    class="w-full placeholder-slate-400 text-sm pl-3 focus:outline-none"
                    placeholder="Search for products, brands and more"
                    type="text"
                    v-model="searchItem"
                    />
                </div>

            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";


let isAccountMenu = ref(false);
</script>
