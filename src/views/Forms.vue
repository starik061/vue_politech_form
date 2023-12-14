<template>
    <section>
        <aside>
            <a href="">
                <img src="@/assets/images/logo.png" alt="Politech logo">
            </a>
            <ul>
                <li>Формы</li>
                <li>Пользователи</li>
            </ul>
            <Button buttonType="secondary" text="Выход" padding="20px 56px" />
        </aside>
        <main>
            <div>
                <h1>Формы</h1>
                <Button buttonType="primary" text="Создать форму" padding="20px 21px" />
            </div>
            <ul>
                <FormListItem v-for="(formListItem, formListItemIndex) in 4" :key="formListItem + formListItemIndex" />
            </ul>
        </main>
    </section>
</template>

<script setup>
import Button from "@/components/Button.vue"
import FormListItem from "@/components/FormListItem.vue"
</script>

<style lang="scss" scoped></style>