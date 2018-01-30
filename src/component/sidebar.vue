<!-- sidebar.vue -->
<template>
        <div class="wrapper">
            <div class="box">

                <slot></slot>

            </div>
        </div>

</template>

<style>
    .wrapper {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #cccccc;
        align-items: center;
    }
    .box {
        flex: 1;
        width: 300px;
        height: 400px;
        position: absolute;
        top: 0;
        left: 0;
        background: #f00;
    }
</style>

<script>
    export default {
        props: [],
        data () {
            return {}
        }
    }
</script>