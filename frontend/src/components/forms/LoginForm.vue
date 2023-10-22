<template>
    <form @submit.prevent="submit">

        <v-text-field v-model="loginEmail.value.value" :error-messages="loginEmail.errorMessage.value" type="email" label="E-mail"></v-text-field>
        <v-text-field v-model="password.value.value" :counter="8" :error-messages="password.errorMessage.value"
            label="Password"></v-text-field>
        <v-btn density="default" class="me-4 w-full !bg-teal-900 !text-gray-300" type="submit">
            Login
        </v-btn>

    </form>
</template>
<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { object, string } from 'yup';
import { LoginForm } from "../../types"

const { handleSubmit } = useForm<LoginForm>({
    validationSchema: object({
        loginEmail: string().required(),
        password: string().required().min(8),
    }),
});

const submit = handleSubmit( async (values) => {
    console.log(values)
})

const loginEmail = useField('loginEmail')
const password = useField('password')
</script>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "LoginForm",
    components: {

    }
})
</script>