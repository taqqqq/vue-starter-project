<script setup>
import JobListing from "@/components/JobListing.vue";
import { reactive, defineProps, onMounted } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import { themeChangeState } from "./themeChangeState";
import Button from "primevue/button";

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false,
    },
});

const { isDarkTheme } = themeChangeState();

const state = reactive({
    jobs: [],
    isLoading: true,
});

onMounted(async () => {
    try {
        const response = await axios.get("/api/jobs");
        state.jobs = response.data;
    } catch (error) {
        console.error("Error fething data " + error);
    } finally {
        state.isLoading = false;
    }
});
</script>

<template>
    <!-- <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing
                    v-for="job in state.jobs.slice(
                        0,
                        limit || state.jobs.length
                    )"
                    :key="job.id"
                    :job="job"
                />
            </div>
        </div>
    </section> -->

    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <div class="flex justify-center items-center">
            <RouterLink to="/jobs">
                <Button label="View All Jobs" class="text-xl p-3 w-96" />
            </RouterLink>
        </div>
    </section>
</template>
