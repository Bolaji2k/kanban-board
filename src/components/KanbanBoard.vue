<template>
  <div class="kanban-board">
    <StageColumn v-for="stage in stages" :key="stage.id" :stage="stage" :contacts="getContactsByStage(stage.id)"
      @moveCard="moveCard" />
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import StageColumn from './StageColumn.vue';
import { Contact, Stage } from '../store/models/store';

export default defineComponent({
  name: 'KanbanBoard',
  components: { StageColumn },
  data() {
    return {
      stages: {} as Stage[],
      contacts: [] as Contact[]
    };
  },
  async created() {
    const stagesResponse = await axios.get('http://localhost:8081/stages.json');
    const contactsResponse = await axios.get('http://localhost:8081/contacts-stage-1.json');
    const contactsResponse1 = await axios.get('http://localhost:8081/contacts-stage-11.json');
    const contactsResponse2 = await axios.get('http://localhost:8081/contacts-stage-144.json');
    this.stages = stagesResponse.data.results;
    this.contacts = this.contacts.concat(contactsResponse.data.results,contactsResponse1.data.results,contactsResponse2.data.results)
  },
  methods: {
    getContactsByStage(stageId: string) {
      let filteredContacts
      if (stageId) {
        filteredContacts = this.contacts.filter(
          (contact:Contact) => contact.stage === stageId
        );
      }
      return filteredContacts
    },
    moveCard(contactId: string, targetStageId: string) {
      const contact = this.contacts.find(contact => (contact as Contact).id === contactId);
      if (contact) {
        (contact as Contact).stage = targetStageId;
      }
    }
  }
});
</script>

<style scoped>
.kanban-board {
  display: flex;
}
</style>