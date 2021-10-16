<template>
  <div class="w-3/4 mx-auto my-6 p-6 border border-solid border-black">
    <div class="flex w-full">
      <Header/>
    </div>  
  </div>
</template>

<script>

import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>