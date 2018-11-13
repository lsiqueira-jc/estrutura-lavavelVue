<template>
    <div class="topo">
        TOPO
    </div>
</template>

<script>
    export default {
        mounted() {
            axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (response) {
              // handle success
              console.log(response);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });
        }
    }
</script>

<style scoped>
    .topo{
        width: 100%;
        height: 80px;
        background-color:brown;
        top: 0;
        left: 0;
    }
</style>
