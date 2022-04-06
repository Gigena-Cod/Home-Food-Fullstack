<template>
  <div id="error" class="flex flex-col justify-center items-center h-screen">
      <div class="svg">
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
          <path fill="none" fill-rule="evenodd" stroke="#273239" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M71 71L55.6 56.3 71 71zM32.829 1C15.25 1 1 15.24 1 32.85S15.25 64.7 32.829 64.7c8.533 0 16.255-3.326 21.973-8.783 6.1-5.799 9.898-13.985 9.898-23.067C64.657 15.24 50.407 1 32.829 1z"/> 
        </svg>
      </div>
      <div class="font-bold my-6 text-xl text">
        La pagina que buscas no existe
      </div>
      <router-link  :to="{name:'login'}" class="rounded-3xl px-6 h-12 flex items-center cursor-pointer bg-red-custom text-white button">
        Ir a la pagina principal
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>