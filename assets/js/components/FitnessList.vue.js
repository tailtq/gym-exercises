export default {
    props: {
        bodyPart: {
            type: String,
            required: true,
        },
        exercises: {
            type: Array,
            required: true,
        },
        hideSeeMoreBtn: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        console.log('test');
    },
    components: ['FitnessListItem'],
    template: `
        <div class="fitness__body-part-list">
            <div class="d-flex justify-content-between align-items-center">
                <h3>{{ capitalize(bodyPart) }}</h3>
                <router-link v-if="!hideSeeMoreBtn" :to="{ name: 'bodyPartExerciseList', params: { bodyPart: bodyPart } }">
                    See more
                </router-link>
            </div>
            
            <div class="row mb-4" v-for="chunkData in chunk(exercises, 4)">
                <div class="col-3" v-for="(exercise, index) in chunkData">
                    <FitnessListItem
                        :title="exercise.title"
                        :gifLink="exercise.gif"
                        :slug="exercise.title"
                    />
                </div>
            </div>
        </div>
    `,
};
