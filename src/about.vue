<template>
    <div>

        <div>
            <div>
                <text>Hello</text>
                <text>Weex</text>
            </div>
            <div append="node">
                <text>Hello</text>
                <text>Weex</text>
            </div>
            <div append="tree">
                <text>Hello</text>
                <text>Weex</text>
            </div>
        </div>
        <text class="btn" @click="update($event, 1, 2)">Result</text>
        <text>{{ show }}</text>
        <text v-if="show">{{result}}</text>
    </div>
</template>

<style>
    .btn{ width: 300px; height: 100px; background-color: #ff0000;}
</style>

<script>
    module.exports = {
        data: {
            result: 'ceshi',
            show: false
        },
        methods: {
            update: function (e, x, y) {
                this.result = e.target+' '+ e.timestamp;
                this.show = !this.show;
            }
        }
    }
</script>