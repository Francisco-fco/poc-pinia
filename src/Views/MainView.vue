<template>
  <div class="row g-1">
    <OptionCard
      class="p-2"
      :title="momentTitle"
      :header="moment"
      :text="momentText"
      :btn="momentBtn"
      :route="routeMomentList"
    />
    <OptionCard
      class="p-2"
      :title="manageStaffTitle"
      :header="manageStaff"
      :text="manageStaffText"
      :btn="manageStaffBtn"
      :route="routeStaffList"
    />
    <OptionCard
      class="p-2"
      :title="timeAndRoomTitle"
      :header="timeAndRoom"
      :text="timeAndRoomText"
      :btn="timeAndRoomBtn"
      :route="routeTimeAndRoom"
    />
    <OptionCard
      class="p-2"
      :title="connectStaffAndStudentsTitle"
      :header="connectStaffAndStudents"
      :text="connectStaffAndStudentsText"
      :btn="connectStaffAndStudentsBtn"
      :route="routeConnectStaffAndStudents"
    />
    <OptionCard
      class="p-2"
      :title="examinerTitle"
      :header="examiner"
      :text="examinerText"
      :btn="examinerBtn"
      :route="routeExaminerList"
    />
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
    const manageStaff = 'Arbetsroller';
    const manageStaffTitle = 'Ange arbetsroller';
    const manageStaffText =
      'Här markerar kursansvarig vilka lärare som är inlagda i kursen som kommer att agera handledare alternativt bedömande lärare, eller båda.';
    const manageStaffBtn = 'Hantera';
    const routeStaffList = '/admin/personal-list';

    const timeAndRoom = 'Tillfällen för examination';
    const timeAndRoomTitle = 'Lägg upp tillfällen för examination';
    const timeAndRoomText =
      'Här lägger kursansvarig upp tillgängliga tillfällen för examination.';
    const timeAndRoomBtn = 'Hantera';
    const routeTimeAndRoom = '/course-manager/room-list';

    const connectStaffAndStudents = 'Handledare';
    const connectStaffAndStudentsTitle = 'Tilldela handledare';
    const connectStaffAndStudentsText =
      'Här tilldelar kursansvarig handledare till registrerade studentgrupper.';
    const connectStaffAndStudentsBtn = 'Hantera';
    const routeConnectStaffAndStudents = '/course-manager/studentgroup-list';

    const moment = 'Moment';
    const momentTitle = 'Lägg till och hantera moment';
    const momentText =
      'Här anger kursansvarig de inställningar och deadlines som gäller för varje moment i processen.';
    const momentBtn = 'Hantera';
    const routeMomentList = '/course-manager/moment-list';

    const examiner = 'Bedömande lärare';
    const examinerTitle =
      'Tilldela bedömande lärare och tillfällen för examination';
    const examinerText =
      'Här tilldelar kursansvarig bedömande lärare och examinationstillfälle till registrerade studentgrupper.';
    const examinerBtn = 'Hantera';
    const routeExaminerList = '/examiner/examination-list';

    return {
      manageStaff,
      manageStaffTitle,
      manageStaffText,
      manageStaffBtn,
      routeStaffList,

      timeAndRoom,
      timeAndRoomTitle,
      timeAndRoomText,
      timeAndRoomBtn,
      routeTimeAndRoom,

      connectStaffAndStudents,
      connectStaffAndStudentsTitle,
      connectStaffAndStudentsText,
      connectStaffAndStudentsBtn,
      routeConnectStaffAndStudents,

      moment,
      momentTitle,
      momentText,
      momentBtn,
      routeMomentList,

      examiner,
      examinerTitle,
      examinerText,
      examinerBtn,
      routeExaminerList,
    };
  },
});
</script>

<style scoped></style>
