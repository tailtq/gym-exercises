export default {
    methods: {
        /**
         * @param {Array} objects
         * @param {Number} chunkSize
         * @return {Array[Object]}
         */
        chunk: (objects, chunkSize) => {
            const chunks = [];
            let currentChunk = [];

            objects.forEach((object, index) => {
                currentChunk.push(object);

                if (index !== 0 && (index + 1) % chunkSize === 0) {
                    chunks.push(currentChunk);
                    currentChunk = [];
                }
            });

            return chunks;
        },
    },
};
