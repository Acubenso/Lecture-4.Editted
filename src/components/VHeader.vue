<template>
  <header class="header">
    <a class="header-logo">
      <img src="../assets/logo.png" alt="Logo" />
      <h1>Рекуператори</h1>
      <p>Відчуй свіжість у своєму просторі</p>
    </a>
    <form class="header-search">
      <input
        class="header-search__input"
        type="text"
        placeholder="Пошук по сайту"
        aria-label="Пошук"
      />
      <button class="header-search__button" type="submit">Знайти</button>
    </form>
    <div class="header-options">
      <button class="header-options__button" type="button">Prana</button>
      <button class="header-options__button" type="button">Klimatronic</button>
      <button class="header-options__button" type="button">Blauberg</button>
      <button class="header-options__button" type="button">ME</button>
      <button class="header-options__button" type="button">Vents</button>
    </div>
    <div class="header-contacts">
      <h1>Контактні телефони:</h1>
      <p>(068)-68-68-688 (viber)</p>
      <p>(063)-63-63-633</p>
    </div>
    <div v-if="!isLogin" class="header-validation">
      <div class="header-validation-logIn">
          <button class="header-validation-logIn_btn">
            Увійти
          </button>
      </div>
      <div class="header-validation-register">
          <button class="header-validation-register_btn">
            Зареєструватись
          </button>
      </div>
    </div>
    <div v-else>
      <p class="nowrap">Привіт {{ name }}</p>
      <button
          v-on:click="unLogin"
          class="header-validation-logIn_btn">
        Вийти
      </button>
    </div>
    <button id="header-burger" class="header-burger">&#9776;</button>
  </header>
</template>

<script>
export default {
  name: "VHeader",
  props: {},
  data: () => {
    return {
      isLogin: false,
      name: ''
    }
  },
  mounted() {
    const nameInfo = localStorage.getItem('login');
    if (nameInfo) this.name = nameInfo;

    const loginInfo = localStorage.getItem('isLogin');
    if (loginInfo) {
      this.isLogin = loginInfo === 'true';
    }
  },
  methods: {
    unLogin() {
      this.isLogin = false;
      localStorage.removeItem('login');
      localStorage.setItem('isLogin', this.isLogin);
    }
  }
};
</script>

<style scoped>
.header {
     display: grid;
     grid-template-columns: min-content 1fr min-content min-content min-content;
     column-gap: 3em;
     background-color: #eaf3f0;
     padding: 1vh 1vw;
     margin-bottom: 1.5em;
}

.header-logo img {
     width: 5em;
     height: 5em;
     border-radius: 50%;
}

.header-search {
     display: grid;
     grid-template-columns: 1fr min-content;
     grid-gap: 0.5em;
     height: 3em;
     margin-block-end: 0em;
     margin-top: 6em;
}

.header-search__input {
     font-size: 1em;
     max-height: 1.5em;
}

.header-search__button {
     margin: 0;
     cursor: pointer;
     background-color: #e0dede;
     border: 1px solid black;
     border-radius: 0.3em;
     font-size: 1.2em;
     max-height: 1.5em;
}

.header-search__button:hover {
     background-color: #eaf3f0;
}

.header-options {
     display: grid;
     grid-auto-flow: column;
     column-gap: 0.5em;
     margin-top: 0.5em;
     grid-row-start: 2;
     grid-column: 2;
}

.header-options__button {
     padding: 0 0.6em;
     background-color: #e0dede;
     border: 1px solid black;
     border-radius: 0.3em;
     font-size: 1em;
     font-family: inherit;
     cursor: pointer;
}

.header-options__button:hover {
     background-color: #eaf3f0;
}

.header-contacts {
     margin-top: 1em;
     width: 12em;
     height: 4em;
}

.header-contacts h1 {
     font-size: 1em;
}

.header-validation {
     display: flex;
     flex-direction: column;
     gap: 0.4em;
     margin-top: 1em;
     align-items: start;
}

.header-validation button {
     background-color: #34ebde;
     border-radius: 0.4em;
     cursor: pointer;
}

.header-validation button:hover {
     background-color: #16f5f1;
}

.header-burger {
     display: none;
}

</style>
