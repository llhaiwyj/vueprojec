<template>
	
</template>

<script>
	
    export default {
       //刷新路由页面
        data () {
        	this.$router.push({name:this.$route.query.menuIds,query : {menuIds: this.$route.query.menuIds,currentPage:this.$route.query.currentPage,
						length:this.$route.query.length}})
            return {
            	
             //menuId:this.$route.query.menuIds,
            }
        },
        methods: {
            
        }
    }
</script>
 
<style>
</style>