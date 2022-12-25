import exercises from '/assets/data/fitness.json' assert { type: 'json' };

const EXERCISE_MAPPING = {};

export default {
    data() {
        const { slug } = this.$route.params;
        const exerciseMapping = {};

        Object.values(exercises).forEach((bodyPartExercises) => {
                console.log(bodyPartExercises);
            bodyPartExercises.forEach((exercise) => {
                exerciseMapping[this.slugify(exercise.title)] = exercise;
            });
        });
        const exerciseDetail = exerciseMapping[slug.toLowerCase()];
        console.log(exerciseMapping);

        return {
            exercises,
            exerciseDetail,
        };
    },
    mixins: [],
    template: `
        <Navbar :bodyParts="Object.keys(exercises)"/>
        
        <div class="container mt-4">
            <h1>{{exerciseDetail.title}}</h1>
            <img :src="exerciseDetail.gif" alt="">
            
            <div v-if="exerciseDetail.how_steps.length > 0">
                <h3>How</h3>
                <ul>
                    <li v-for="step in exerciseDetail.how_steps">{{step}}</li>
                </ul>
            </div>
            
            <div v-if="exerciseDetail.benefits.length > 0">
                <h3>Benefits</h3>
                <ul>
                    <li v-for="benefit in exerciseDetail.benefits">{{benefit}}</li>
                </ul>
            </div>
            
            <div v-if="exerciseDetail.impacted_muscle_img">
                <h3>Impacted muscles</h3>
                <img :src="exerciseDetail.impacted_muscle_img" alt="">
            </div>
        </div>
    `,
};
