'use strict'

let app = new Vue({
    el: '#app',
    data: {
        title: 'Header',
        user_name: 'dima87g',
        headerOpen: false,
        list_select: false,
        list: [
            {id: 0, text: 'First task'},
            {id: 1, text: 'Second task'},
            {id: 2, text: 'Third task'}
        ]
    },
    methods: {
        openHeader: function() {
            this.headerOpen = !this.headerOpen;
        }
    },
    computed: {
        headerClasses: function () {
            return {
                header_open: this.headerOpen
            }
        },
    }
})