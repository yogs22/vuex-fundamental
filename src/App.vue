<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="container">
        <div class="row">
            <AgendaInput />
            <AgendaShow />
        </div>
    </div>
  </div>
</template>

<script>
import AgendaInput from './components/AgendaInput.vue'
import AgendaShow from './components/AgendaShow.vue'

export default {
  name: 'app',
  components: {
    AgendaInput,
    AgendaShow
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
