<template>
    <h1>{{ props.id }}</h1>
    
</template>


<script lang="ts">
import { defineProps } from 'vue';

const props=defineProps<{
id:string
}>();


</script>