<template>
    <div>
        <div v-if="showModal">
            <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/>
        </div>
        <button @click="toggleModal">open modal</button>
    </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {Modal},
  data() {
    return {
        text: "props text",
        header: "Props header",
        showModal: false
    }
  },
  methods: {
    toggleModal() {
        this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
