import HomePage from '/assets/js/pages/Home.vue.js';
import BodyPartPage from '/assets/js/pages/BodyPart.vue.js';
import BodyPartDetailPage from '/assets/js/pages/BodyPartDetail.vue.js';
import Navbar from '/assets/js/components/Navbar.vue.js';
import FitnessList from '/assets/js/components/FitnessList.vue.js';
import FitnessListItem from '/assets/js/components/FitnessListItem.vue.js';
import TextConverterMixins from './mixins/TextConverter.js';
import ChunkMixins from './mixins/Chunk.js';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/body-part/:bodyPart',
            name: 'bodyPartExerciseList',
            component: BodyPartPage,
        },
        {
            path: '/:slug',
            name: 'bodyPartExerciseDetail',
            component: BodyPartDetailPage,
        },
    ],
});
const app = Vue.createApp({});
app.use(router);
app.mixin(TextConverterMixins);
app.mixin(ChunkMixins);
app.component('Navbar', Navbar);
app.component('FitnessList', FitnessList);
app.component('FitnessListItem', FitnessListItem);
app.mount('#app');
