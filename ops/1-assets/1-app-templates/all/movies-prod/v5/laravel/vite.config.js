import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "public/dashboard/scss/streamit.scss",
                "public/dashboard/scss/dashboard-custom.scss",
                // "public/dashboard/scss/dark.scss",
                "public/dashboard/scss/customizer.scss",
                "public/dashboard/scss/pro.scss",
                "public/dashboard/scss/rtl.scss",
                "public/dashboard/scss/custom.scss",
                "resources/css/app.scss",
                "resources/js/app.js",
            ],
            refresh: true,
        }),
    ],
});
