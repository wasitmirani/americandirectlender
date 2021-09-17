/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import router from "./router";
import VueProgressBar from 'vue-progressbar'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import moment from "moment";
import Notifications from 'vue-notification'
import Multiselect from 'vue-multiselect'
import "vue-toastification/dist/index.css";
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.use(Vuesax);
// Vue.component("pagination", require("laravel-vue-pagination"));
window.moment = moment;
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '6px'
})
Vue.component('multiselect', Multiselect)
Vue.use(Notifications)


Vue.filter("timeformat", function(value) {
    if (value) {
        return moment
            .utc(String(value))
            .local()
            .fromNow();
    }
});
const app = new Vue({
    el: '#app',
    router,
    methods: {
        alertNotification(position = 'top-right', color, title, description) {
            const noti = this.$vs.notification({
                progress: 'auto',
                color,
                position,
                title: title,
                text: `${description}`
            })
        },
        alertErrorMessage(status, res) {
            switch (status) {
                case 500:
                    this.alertNotification('top-right', 'danger', `${status} Error! `, res.message);
                    break;

                default:
                    break;
            }
        },
    },
    created() {
        this.$Progress.start()
            //  hook the progress bar to start before we move router-view
        this.$router.beforeEach((to, from, next) => {
                //  does the page we want to go to have a meta.progress object
                if (to.meta.progress !== undefined) {
                    let meta = to.meta.progress
                        // parse meta tags
                    this.$Progress.parseMeta(meta)
                }
                //  start the progress bar
                this.$Progress.start()
                    //  continue to next page
                next()
            })
            //  hook the progress bar to finish after we've finished moving router-view
        this.$router.afterEach((to, from) => {
            //  finish the progress bar
            this.$Progress.finish()
        })

        this.$notify({
            group: 'succes',
            title: 'Important message',
            text: 'Hello user! This is a notification!'
          });

    }

});
