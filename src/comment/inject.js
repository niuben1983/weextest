/**
 * Created by niub on 2018/1/30.
 */
'use strict';

import Vue from 'vue';
import weex from 'weex-vue-render';
weex.init(Vue);

//注册组件
import Sidebar from '../component/sidebar.vue'
// 全局注册 sidebar 组件
weex.registerComponent('sidebar', Sidebar)


//注册模块
weex.registerModule('guide', {
    greeting () {
        console.log('Hello, nice to meet you. I am your guide.')
    },
    farewell () {
        console.log('Goodbye, I am always at your service.')
    }
})