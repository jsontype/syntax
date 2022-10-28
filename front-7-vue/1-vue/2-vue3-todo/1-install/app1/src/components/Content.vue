<template>
    <div>
        <p>{{ name }}</p><br>
        <button @click="updateName">update</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Data',
        }
    },
    methods: {
        updateName() {
            this.name = 'Data Updated'
        }
    }
}
</script>