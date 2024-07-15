<template>
    <span ref="counter" class="counter">{{ value }}</span>
</template>
<script>
export default {
    name: 'CounterWidget',
    props: { value: { type: Number, default: 10 } },
    mounted() { },
};
</script>
