<template>
<avatar :username="name" v-if="!thumbnail"></avatar>
<img class="img-radius align-top m-r-15 rounded-circle" :src="thumbnail" alt="" v-else>
</template>

<script>
import Avatar from 'vue-avatar'
export default {
components:{
Avatar,
},
props:['name','thumbnail'],
name:"Avatar Component"
}
</script>

<style>

</style>
