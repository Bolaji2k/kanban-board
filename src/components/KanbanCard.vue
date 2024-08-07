<template>
  <div class="kanban-card" draggable="true" @dragstart="onDragStart">
    {{ contact?.full_name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Contact } from '../store/models/store';

export default defineComponent({
  name: 'KanbanCard',
  props: {
    contact: Object
  },
  methods: {
    onDragStart(event: DragEvent) {
      this.$emit('dragStart', event, (this.contact as Contact).id);
    }
  }
});
</script>

<style scoped>
.kanban-card {
  padding: 10px;
  margin: 10px;
  margin-bottom: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: move;
}
</style>