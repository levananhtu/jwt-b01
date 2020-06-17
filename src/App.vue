<template>
    <div id="app">
        <LoginPage/>
        <div style="background-color: black">
            <br>
        </div>
        <RegisterPage></RegisterPage>
    </div>

</template>

<script>
    import LoginPage from "@/components/LoginPage";
    import RegisterPage from "@/components/RegisterPage";

    export default {
        name: 'App',
        components: {
            RegisterPage,
            LoginPage,
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
