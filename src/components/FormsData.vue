<template>
    <main class="main-content">
        <div class="form-header">
            <h1 class="main-head">Формы</h1>
            <Button buttonType="primary" text="Создать форму" padding="16px 21px" />
        </div>
        <ul class="form-list">
            <FormListItem v-for="(formListItem, formListItemIndex) in 5" :key="formListItem + formListItemIndex" />
        </ul>
    </main>
</template>

<script setup>
import Button from "@/components/Button.vue"
import FormListItem from "@/components/FormListItem.vue"
</script>

<style lang="scss" scoped>
.main-content {
    width: 1004px;
    padding: 80px 165px 90px 30px;
}

.form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
}

.main-head {
    margin: 0;
    font-size: 40px;
}

.form-list {
    width: 100%;
    max-height: calc(100vh - 270px);
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow-y: scroll;
}
</style>