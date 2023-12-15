<template>
    <section class="main-section">
        <div class="side-nav-wrapper">
            <aside class="side-nav">
                <a class="logo" href="https://tpu.ru/" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/images/logo.png" alt="Politech logo">
                </a>
                <ul class="side-nav__list">
                    <li class="side-nav__list-item">Формы</li>
                    <li class="side-nav__list-item">Пользователи</li>
                </ul>
                <Button class="exit-btn" buttonType="secondary" text="Выход" padding="16px 56px" />
            </aside>
        </div>
        <main class="main-content">
            <div class="form-header">
                <h1 class="main-head">Формы</h1>
                <Button buttonType="primary" text="Создать форму" padding="16px 21px" />
            </div>
            <ul class="form-list">
                <FormListItem v-for="(formListItem, formListItemIndex) in 5" :key="formListItem + formListItemIndex" />
            </ul>
        </main>
    </section>
</template>

<script setup>
import Button from "@/components/Button.vue"
import FormListItem from "@/components/FormListItem.vue"
</script>

<style lang="scss" scoped>
.main-section {
    display: flex;
    background-color: #F6F6F6;
}

.side-nav-wrapper {
    background-color: #fff;
}

.side-nav {
    height: calc(100vh - 152px);
    padding-left: 179px;
    padding-right: 95px;
    padding-top: 80px;
    padding-bottom: 72px;
    display: flex;
    flex-direction: column;

}

.logo {
    margin-bottom: 30px;
}

.side-nav__list-item:not(:last-child) {
    padding-bottom: 16px;
}

.exit-btn {
    margin-top: auto;
}

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