<template>
  <div class="row g-4">
    <div class="col-lg-4" v-for="(card, index) in optionCards" :key="index">
      <OptionCard
        class="p-2"
        :title="card.title"
        :header="card.header"
        :text="card.text"
        :btn="card.btn"
        :route="card.route"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OptionCard from '../components/OptionCard.vue';

export default defineComponent({
  name: 'AdminView',
  components: {
    OptionCard,
  },
  setup() {
    const optionCards = [
      {
        header: 'Arbetsroller',
        title: 'Ange arbetsroller',
        text:
          'Här markerar kursansvarig vilka lärare som är inlagda i kursen som kommer att agera handledare alternativt bedömande lärare, eller båda.',
        btn: 'Hantera',
        route: '/admin/personal-list',
      },
      {
        header: 'Tillfällen för examination',
        title: 'Lägg upp tillfällen för examination',
        text:
          'Här lägger kursansvarig upp tillgängliga tillfällen för examination.',
        btn: 'Hantera',
        route: '/course-manager/room-list',
      },
      {
        header: 'Handledare',
        title: 'Tilldela handledare',
        text:
          'Här tilldelar kursansvarig handledare till registrerade studentgrupper.',
        btn: 'Hantera',
        route: '/course-manager/studentgroup-list',
      },
      {
        header: 'Moment',
        title: 'Lägg till och hantera moment',
        text:
          'Här anger kursansvarig de inställningar och deadlines som gäller för varje moment i processen.',
        btn: 'Hantera',
        route: '/course-manager/moment-list',
      },
      {
        header: 'Bedömande lärare',
        title: 'Tilldela bedömande lärare och tillfällen för examination',
        text:
          'Här tilldelar kursansvarig bedömande lärare och examinationstillfälle till registrerade studentgrupper.',
        btn: 'Hantera',
        route: '/examiner/examination-list',
      },
    ];

    return {
      optionCards,
    };
  },
});
</script>

<style scoped></style>
