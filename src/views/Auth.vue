<template>
    <section class="main-section">
        <div class="side-nav-wrapper">
            <aside class="side-nav">
                <div class="form-wrapper">
                    <a class="logo" href="https://tpu.ru/" target="_blank" rel="noopener noreferrer">
                        <img src="@/assets/images/logo.png" alt="Politech logo">
                    </a>
                    <form>
                        <h1 class="auth-head">Авторизация</h1>
                        <input class="auth-input" type="text" name="" id="" placeholder="Логин">
                        <input class="auth-input" type="password" name="" id="" placeholder="Пароль">
                        <Button buttonType="primary" text="Вход" padding="16px 32px" />
                    </form>
                </div>
                <div class="text-wrapper">
                    <p>Если возникла проблема, то можете<br>написать <a
                            href="https://www.instagram.com/monicabellucciofficiel/" target="_blank"
                            rel="noopener noreferrer">Алёне из
                            Сибтеха</a></p>
                    <p>С любовью, ваш <a href="https://www.youtube.com/@sibteh" target="_blank"
                            rel="noopener noreferrer">Сибтех</a></p>
                </div>
            </aside>
        </div>
    </section>
</template>

<script setup>
import Button from "@/components/Button.vue"
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.main-section {
    display: flex;
    background-color: $primary-color;
    background-image: url(@/assets/images/auth-bg.png);
    background-size: 100%;
    background-position: 100% 100%;
    background-repeat: no-repeat;
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

.text-wrapper {
    margin-top: auto;

    & p {
        font-size: 16px;

        line-height: 24px;
    }

    & p:first-child {
        margin-bottom: 8px;
    }

    & a {
        color: $primary-color;
    }
}

.logo {
    margin-bottom: 30px;
}

.side-nav__list-item:not(:last-child) {
    padding-bottom: 16px;
}

.auth-head {
    margin-bottom: 30px;
    font-family: "Cera Pro Medium";
    font-size: 40px;
    cursor: default;
}

.auth-input {
    display: block;
    width: 350px;
    height: 70px;
    padding-left: 30px;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    background-color: #F6F6F6;

    &::placeholder {
        opacity: 0.5;
    }

    &:hover,
    &:focus,
    &:active {
        outline: 2px solid $primary-color;
    }

    &:not(:last-of-type) {
        margin-bottom: 10px;
    }

    &:last-of-type {
        margin-bottom: 30px;
    }
}
</style>