<script setup>
    import {reactive} from 'vue'
    import axios from 'axios';
    import router from '@/router';
    import {useToast} from 'vue-toastification'
    import Dropdown from 'primevue/dropdown'
    import InputText from 'primevue/inputtext';
    import Textarea from 'primevue/textarea';

    const form = reactive({
        type: 'Full-Time',
        title: '',
        description: '',
        salary: 'Under $50K',
        location: '',
        company: {
            name: '',
            description: '',
            contactEmail: '',
            contactPhone: ''
        }
    });

    const toast = useToast();

    const submitJob = async() => {
        const newJob = {
            type: form.type,
            title: form.title,
            description: form.description,
            salary: form.salary,
            location: form.location,
            company: {
                name: form.company.name,
                description: form.company.description,
                contactEmail: form.company.contactEmail,
                contactPhone: form.company.contactPhone
            }
        };
        
        try {
            const response = await axios.post(`/api/jobs/`, newJob);
            toast.success('Job added successfully');
            router.push(`/jobs/${response.data.id}`);
        } catch (error) {
            toast.error('Error adding the job');
            console.error("Error fetching job data " + error);
        }
    };
</script>

<template>
    <section class="bg-gray-400">
      <div class="container m-auto max-w-2xl py-24">
        <div
          class="bg-gray-300 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form @submit.prevent="submitJob">
            <h2 class="text-3xl text-center text-gray-800 font-semibold mb-6">Add Job</h2>

            <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Job Type</label
              >
              <Dropdown
                v-model="form.type"
                id="type"
                name="type"
                class="w-full"
                :options="[
                  'Full-Time',
                  'Part-Time',
                  'Remote',
                  'Internship']"
                required
              />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2"
                >Job Listing Name</label
              >
              <InputText    
                v-model="form.title"
                type="text"
                id="name"
                name="name"
                placeholder="eg. Beautiful Apartment In Miami"
                :pt="{
                  root: {class: 'border border-gray-300 rounded w-full'}
                }"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="description"
                class="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <Textarea
                v-model="form.description"
                id="description"
                name="description"
                class="w-full"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
              />
            </div>

            <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Salary</label
              >
              <Dropdown
                v-model="form.salary"
                id="salary"
                name="salary"
                :options="[
                  'Under $50K',
                  '$50 - $60K',
                  '$60 - $70K',
                  '$70 - $80K',
                  '$80 - $90K',
                  '$90 - $100K',
                  '$100 - $125K',
                  '$125 - $150K',
                  '$150 - $175K',
                  '$175 - $200K',
                  'Over 200k$']"
                :pt="{
                  root: {class: 'w-full'},
                  input: {class: 'w-full'},
                  panel: {class: 'w-full'}
                }"
                required
              />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <InputText
                v-model="form.location"
                type="text"
                id="location"
                name="location"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
              />
            </div>

            <h3 class="text-2xl mb-5 text-gray-700">Company Info</h3>

            <div class="mb-4">
              <label for="company" class="block text-gray-700 font-bold mb-2"
                >Company Name</label
              >
              <InputText
                v-model="form.company.name"
                type="text"
                id="company"
                name="company"
                class="border rounded w-full py-2 px-3"
                placeholder="Company Name"
              />
            </div>

            <div class="mb-4">
              <label
                for="company_description"
                class="block text-gray-700 font-bold mb-2"
                >Company Description</label
              >
              <Textarea
                v-model="form.company.description"
                id="company_description"
                name="company_description"
                class="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
              />
            </div>

            <div class="mb-4">
              <label
                for="contact_email"
                class="block text-gray-700 font-bold mb-2"
                >Contact Email</label
              >
              <InputText
                v-model="form.company.contactEmail"
                type="email"
                id="contact_email"
                name="contact_email"
                class="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="contact_phone"
                class="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
              >
              <InputText
                v-model="form.company.contactPhone"
                type="tel"
                id="contact_phone"
                name="contact_phone"
                class="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
              />
            </div>

            <div>
              <button
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
</template>