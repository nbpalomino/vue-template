<template>
  <main class="h-screen">
    <header class="py-6 px-12 w-full flex items-center justify-between">
      <div class="mr-4">
        <span class="text-xl">Vue & TailwindCSS Template</span>
      </div>
      <div class="space-x-6">
        <router-link to="/">Home</router-link>
        <router-link to="/services">Services</router-link>
      </div>
    </header>
    <div class="flex flex-col w-full h-full">    
      <router-view></router-view>
    </div>    
    <footer class="w-full bg-gray-600 flex justify-center">
        <p class="p-2 text-sm text-white uppercase tracking-wider">Made with Love, VueJS and TailwindCSS</p>
    </footer>
  </main>
</template>

<script>
export default {
}
</script>

<style src="@/styles.css">
</style>