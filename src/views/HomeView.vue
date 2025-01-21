<script setup>
import DoneList from '@/components/DoneList.vue';
import NavBar from '@/components/NavBar.vue';
import TaskForm from '@/components/TaskForm.vue';
import TheCalendar from '@/components/TheCalendar.vue';
import UndoneList from '@/components/UndoneList.vue';

</script>

<template>
    <NavBar/>
    <TheCalendar/>
    <TaskForm/>
    <DoneList/>
    <UndoneList/>
</template>
