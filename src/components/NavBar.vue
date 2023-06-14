<template>
    <VAppBar color="#F0F0F0">
        <VAppBarNavIcon 
        color="primary" 
        class="mx-auto"
        @click="isDrawerOpen = !isDrawerOpen"
        ></VAppBarNavIcon>
        <VAppBarTitle class="d-flex justify-center mx-auto">
            <VImg
                contain
                max-height="220"
                max-width="220"
                src="@/assets/logo_app.png">
            </VImg>
        </VAppBarTitle>
    </VAppBar>
    <VNavigationDrawer v-model="isDrawerOpen">
        <VList class="text-primary">
            <VListItemSubtitle class="pa-2">
                <h2>Menu</h2>
            </VListItemSubtitle>
            <VDivider></VDivider>
            <VListItem prepend-icon="mdi-home">Home</VListItem>
            <VListItem prepend-icon="mdi-dice-multiple-outline">Sorteie as equipes</VListItem>
        </VList>
    </VNavigationDrawer>
</template>

<script setup>
import { ref } from 'vue';

const isDrawerOpen = ref(false)
</script>

<style scoped>
.v-app-bar-title__content {
  display: flex;
}
</style>