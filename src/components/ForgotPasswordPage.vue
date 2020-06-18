<template>
    <div>
        <label>Email {{email}}</label>
        <input v-model="username">
        <br>
        <br>
        <button>Confirm</button>
        <br>
        <a href="https://www.google.com/">Login</a>
        <p>
            {{err}}
        </p>
    </div>
</template>

<script>
    export default {
        // name: "ForgotPasswordPage",
        props: {
            email: {
                defaultValue: ""
            },
        },

    }
</script>

<style scoped>

</style>