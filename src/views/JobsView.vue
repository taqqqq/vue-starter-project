<script setup>
    import JobListings from '@/components/JobListings.vue';
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column'
    import {ref, onMounted} from 'vue';
    import axios from 'axios';
    import { RouterLink } from 'vue-router';
    import Button from 'primevue/button';
    import InputText from 'primevue/inputtext';

    const jobs = ref([]);
    const filters = ref({
        global: {
            value: null,
            matchMode: 'contains'
        }
    });

    onMounted(async() => {
        try {
            const response = await axios.get('/api/jobs');
            jobs.value = response.data;
        } catch (error) {
            console.error("Error fetching jobs: " + error);
        }
    });
</script>

<template>
    <!-- <JobListings/> -->
    <DataTable v-model:filters="filters" showGridlines 
            filter-display="menu" :value="jobs" paginator 
            :rows="1" :rows-per-page-options="[1,2,3,5,10]"
            :global-filter-fields="['type', 'type', 'location', 'salary', 'company.name']"
            class="text-xl">
        <template #header>
            <div class="flex justify-between">
                <span></span>
                <InputText v-model="filters.global.value" placeholder="Keyword Search"/>
            </div>
        </template>
        <Column field="title" header="Title" sortable style="width: 25%"></Column>
        <Column field="type" header="Type" sortable style="width: 12%"></Column>
        <Column field="location" header="Location" sortable style="width: 12%"></Column>
        <Column field="salary" header="Salary / year" sortable style="width: 15%"></Column>
        <Column field="company.name" header="Company name" sortable style="width: 20%"></Column>
        <Column header="Read More" style="width: 20%">
            <template #body="slotProps">
                <RouterLink :to="'/jobs/' + slotProps.data.id">
                  <Button label="Read More"/> 
                </RouterLink>
            </template>
        </Column>
    </DataTable>
</template>