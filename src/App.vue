<template>
    <VApp>
      <NavBar />
      <VMain>
        <router-view/>
      </VMain>
    </VApp>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default{
  components:{
    NavBar
  }

}

</script>
