export default {
    methods: {
        capitalize: (text) => {
            const firstLetter = text.charAt(0);
            const firstLetterCap = firstLetter.toUpperCase();
            const remainingLetters = text.slice(1);
            return firstLetterCap + remainingLetters;
        },
        slugify: (text) => {
            return slugify(text, {
                lower: true,
            });
        },
    },
};
