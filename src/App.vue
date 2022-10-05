<template>
    <div>
        <Navbar />

       
      <section class="section">
            <router-view/>
        </section>
    </div>
</template>

<script>
    import axios from 'axios'

    import Navbar from '@/components/layout/Navbar'

    export default {
        name: 'App',
        components: {
            Navbar
        },
        beforeCreate() {
            this.$store.commit('initializeStore')

            if (this.$store.state.token) {
                axios.defaults.headers.common['Authorization'] = "Token " + this.$store.state.token
            } else {
                axios.defaults.headers.common['Authorization'] = ""
            }
        },
    }
</script>

<<<<<<< HEAD
<style>
@import '../node_modules/bulma';
</style>
=======
<style lang="scss">
@import '../node_modules/bulma';





</style>
>>>>>>> 899d81a9241191f197816dde1652bfb0af6926f2
