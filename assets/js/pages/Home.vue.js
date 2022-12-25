import exercises from '/assets/data/fitness.json' assert {type: 'json'};
import Constants from '../mixins/Constants.js';

export default {
    data: () => {
        return {
            exercises,
        };
    },
    mixins: [Constants],
    template: `
        <Navbar :bodyParts="Object.keys(exercises)"/>
        
        <div class="container mt-4">
            <FitnessList
                v-for="bodyPart in Object.keys(exercises)"
                :bodyPart="bodyPart"
                :exercises="exercises[bodyPart].slice(0, HOME_EXERCISE_SIZE)"
            />
        </div>
    `,
};
