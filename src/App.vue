<template>
  <KanbanBoard/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import KanbanBoard from './components/KanbanBoard.vue'

export default defineComponent({
  name: 'App',
  components: {
    KanbanBoard
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

*{
  padding: 0;
  margin: 0;
}
</style>
