<template>
    <div>
        <label>Username {{username}}</label>
        <input v-model="username">
        <br>
        <br>
        <label>Email {{email}}</label>
        <input v-model="email">
        <br>
        <br>
        <label>Your name {{name}}</label>
        <input v-model="name">
        <br>
        <br>
        <label>Password {{password}}</label>
        <input v-model="password">
        <br>
        <br>
        <button v-on:click="signin">Register new account</button>
        <br>
        <a href="https://www.google.com/">Login</a>
        <p>
            {{err}}
        </p>
    </div>

</template>

<script>
    import axios from "axios";

    export default {
        // name: "RegisterPage",
        props: {
            name: {
                defaultValue: ""
            },
            username: {
                defaultValue: ""
            },
            email: {
                defaultValue: ""
            },
            password: {
                defaultValue: ""
            },
            err: {
                defaultValue: ""
            }
        },
        methods: {
            signin: function () {
                axios.post("http://localhost:8080/api/auth/sign-up", {
                    name: this.name,
                    username: this.username,
                    email: this.email,
                    password: this.password
                }).then(response => {
                    this.err = response.data.message;

                }).catch(error => {
                    this.err = error.response.data.message
                })
            }
        }

    }
</script>

<style scoped>

</style>