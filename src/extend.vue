<template>
    <div>

        <sidebar>
            <text>sdfsdfsdf</text>
        </sidebar>
    </div>
</template>

<style scoped>
    .btn{ width: 300px; height: 100px; background-color: #eeeeee;}
</style>

<script>
    import './comment/inject';

    // 获取模块
    const guide = weex.requireModule('guide')

    // 可以直接调用模块中的方法
    guide.greeting()
    guide.farewell()

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