module.exports = {
    content: ["./src/**/*.{vue,css}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            sora: ["Sora", "sans-serif"],
        },
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                purple: "#994FF5",
                warning: "#FFC41F",
                light: "#F8F7F6",
                dark: "#050C17",
                gray: "#7780A1",
                white: "#FFFFFF",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-liner": "linear-gradient(var(--tw-gradient-stops))",
            },
        },
        plugins: [require("@tailwindcss/forms")],
    },
};
