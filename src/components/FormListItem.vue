<template>
    <section class="form-list-item">
        <div class="form-list-item__left-element">
            <h2 class="form-list-item__head">Форма регистрации участников</h2>
            <p class="form-list-item__text">Автор: user 1</p>
            <p class="form-list-item__text">Дата создания: 01.01.2023</p>
        </div>
        <div class="form-list-item__right-element">
            <Button buttonType="secondary" text="Редактировать" padding="12px 32px" />
            <Button buttonType="secondary" text="Удалить" padding="12px 32px" noBorder />
        </div>
    </section>
</template>

<script setup>
import Button from "@/components/Button.vue"
</script>

<style lang="scss" scoped>
.form-list-item {
    display: flex;
    justify-content: space-between;
    min-width: 590px;
    border-radius: 10px;
    padding: 20px;
    background-color: #fff;

}

.form-list-item__left-element {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;

}

.form-list-item__right-element {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center
}

.form-list-item__head {
    font-size: 24px;
    margin: 0;
    padding: 0;
}

.form-list-item__text {
    font-size: 14px;
    opacity: 0.5;

    &:last-child {
        margin-top: 50px;
    }
}
</style>