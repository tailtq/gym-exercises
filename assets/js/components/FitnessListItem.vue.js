export default {
    props: ['gifLink', 'title', 'slug'],
    template: `
        <div class="card">
            <img :src="gifLink" class="card-img-top" alt="...">
          
            <div class="card-body">
                <h5 class="card-title">
                    <router-link :to="{ name: 'bodyPartExerciseDetail', params: { slug: slugify(title) } }">
                        {{title}}
                    </router-link>
                    </h5>
                <a href="#" class="btn btn-primary">Add to list</a>
            </div>
        </div>
    `,
};
