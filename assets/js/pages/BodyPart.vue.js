import exercises from '/assets/data/fitness.json' assert { type: 'json' };
import Constants from '../mixins/Constants.js';

export default {
    data() {
        return {
            exercises,
        };
    },
    mixins: [Constants],
    template: `
        <Navbar :bodyParts="Object.keys(exercises)"/>
        
        <div class="container mt-4">
            <FitnessList
                :bodyPart="$route.params.bodyPart"
                :exercises="exercises[$route.params.bodyPart]"
                v-bind:hideSeeMoreBtn="true"
            />
        </div>
    `,
};
