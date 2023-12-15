<template>
    <button :class="getClassObject()" :style="{ padding: padding }">{{ text }}</button>
</template>

<script setup>

const props = defineProps({
    text: {
        type: String,
        default: "Редактировать",
        required: false
    },
    padding: {
        type: String,
        default: "10px",
        required: false
    },
    buttonType: {
        type: String,
        default: "primary",
        required: false
    },
    noBorder: {
        type: Boolean,
        default: false,
        required: false,
    }
});

const getClassObject = () => {
    return {
        [props.buttonType]: true,
        'no-border': props.noBorder
    };
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

button {
    min-width: 160px;
    min-height: 40px;
    border: 1px solid $primary-color;
    font-family: 'Cera Pro Medium', Arial, sans-serif;
    font-size: 16px;
    line-height: 1;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;

    &:hover,
    &:active {
        opacity: 0.75;
    }
}

.primary {
    background-color: $primary-color;
}

.secondary {
    background-color: transparent;
    color: $primary-color;
}

.no-border {
    border: none;
}
</style>
