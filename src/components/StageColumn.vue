<template>
    <div class="stage-column" @drop="handleDrop"   @dragover.prevent  @dragenter.prevent>
      <p>{{ stage?.name }}</p>
      <KanbanCard
        v-for="contact in contacts"
        :key="(contact as Contact).id"
        :contact="(contact as Contact)"
        @dragStart="handleDragStart"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import KanbanCard from './KanbanCard.vue';
  import { Stage, Contact } from '../store/models/store';
  
  export default defineComponent({
    name: 'StageColumn',
    components: { KanbanCard },
    props: {
      stage: Object,
      contacts: Array
    },
    methods: {
      handleDragStart(event: DragEvent, contactId: string) {
        event.dataTransfer?.setData('contactId', contactId);
      },
      handleDrop(event: DragEvent) {
        const contactId = event.dataTransfer?.getData('contactId');
        this.$emit('moveCard', contactId, (this.stage as Stage).id);
      },
    },
  });

  </script>
  
  <style scoped>
  .stage-column {
    border: 1px solid gray;
    margin-right: 2px;
  }

  p {
    background-color: dodgerblue;
    color: white;
    font-size: 20px;
    font-weight: bold;
    height: 80px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid grey;
  }
  </style>
  