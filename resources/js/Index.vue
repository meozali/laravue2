<template>
    <div>
        <nav class="navbar bg-white navbar-light border-bottom">
        <router-link class="navbar-brand mr-auto"  v-bind:to="{name:'home'}">Home</router-link>
        <router-link class="btn nav-button " v-bind:to="{name:'second'}">Second</router-link>
        </nav>
        <div class="container mt-4 ml-4 ">
             <router-view></router-view>
        </div>
       

    </div>
</template>