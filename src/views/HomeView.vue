<script setup>
    import Hero from '@/components/Hero.vue'
    import HomeCards from '@/components/HomeCards.vue'
    import JobListings from '@/components/JobListings.vue'
</script> 

<template>
    <Hero />
    <HomeCards class="text-gray-600"/>
    <JobListings :limit="3" :showButton="true"/>
</template>