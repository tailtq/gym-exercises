import HomePage from './pages/Home.vue.js';
import BodyPartPage from './pages/BodyPart.vue.js';
import BodyPartDetailPage from './pages/BodyPartDetail.vue.js';
import Navbar from './components/Navbar.vue.js';
import FitnessList from './components/FitnessList.vue.js';
import FitnessListItem from './components/FitnessListItem.vue.js';
import TextConverterMixins from './mixins/TextConverter.js';
import ChunkMixins from './mixins/Chunk.js';

const pathPrefix = '/gym-exercises';

const router = VueRouter.createRouter({
    history: VueRouter.createMemoryHistory(),
    routes: [
        {
            path: '',
            name: 'home',
            component: HomePage,
        },
        {
            path: `${pathPrefix}/body-part/:bodyPart`,
            name: 'bodyPartExerciseList',
            component: BodyPartPage,
        },
        {
            path: `${pathPrefix}/:slug`,
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
