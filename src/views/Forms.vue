<template>
    <section class="main-section">
        <div class="side-nav-wrapper">
            <aside class="side-nav">
                <a class="logo" href="https://tpu.ru/" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/images/logo.png" alt="Politech logo">
                </a>
                <ul class="side-nav__list">
                    <li class="side-nav__list-item">
                        <RouterLink class="side-nav__item" to="forms" active-class="active">Формы
                        </RouterLink>
                    </li>
                    <li class="side-nav__list-item">
                        <RouterLink class="side-nav__item" to="users" active-class="active">Пользователи</RouterLink>
                    </li>
                </ul>
                <Button class="exit-btn" buttonType="secondary" text="Выход" padding="16px 56px" />
            </aside>
        </div>
        <RouterView></RouterView>
    </section>
</template>

<script setup>
import Button from "@/components/Button.vue"
import { RouterLink } from 'vue-router'




</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

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

.side-nav__item {
    font-size: 16px;
    color: inherit;
    text-decoration: none;
}

.exit-btn {
    margin-top: auto;
}

.active {
    color: $primary-color;
}
</style>