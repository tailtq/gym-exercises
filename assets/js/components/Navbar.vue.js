export default {
    props: {
        bodyParts: {
            type: Array,
            required: true,
        },
    },
    template: `
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
                <router-link :to="{name: 'home'}" class="navbar-brand">Gym Exercises</router-link>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Exercises
                            </a>
                            
                            <ul class="dropdown-menu">
                                <li v-for="bodyPart in bodyParts">
                                    <router-link
                                        :to="{ name: 'bodyPartExerciseList', params: { bodyPart: bodyPart } }"
                                        class="dropdown-item">
                                        {{ capitalize(bodyPart) }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `
};
