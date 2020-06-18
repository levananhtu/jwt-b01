<template>
    <div>
        <label>Username or email {{ue}}</label>
        <input v-model="ue">
        <br>
        <br>
        <label>Password {{password}}</label>
        <input v-model="password">
        <br>
        <br>
        <button v-on:click="login">Login</button>
        <br>
        <a href="https://www.google.com/">Forgot password?</a>
        <p></p>
        <a href="https://www.google.com/">Register new account</a>
        <p>
            {{at}}
        </p>
        <p>
            {{rt}}
        </p>
        <p>
            {{err}}
        </p>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "LoginPage",
        props: {
            ue: {
                defaultValue: ""
            },
            password: {
                defaultValue: ""
            },
            at: {
                defaultValue: ""
            },
            rt: {
                defaultValue: ""
            },
            err: {
                defaultValue: ""
            }
        },
        methods: {
            login: function () {
                axios.post("http://localhost:8080/api/auth/login", {
                    emailOrUsername: this.ue,
                    password: this.password
                }).then(response => {
                    this.at = response.data.accessToken;
                    this.rt = response.data.refreshToken;
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