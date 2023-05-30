<template>
  <main>
    <div class="autorisation__wrapp">
      <img src="./images/favicon.svg" alt="favicon" class="favicon">
      <form class="autorisation__form">
        <input type="text" class="autorisation__form-login" placeholder="Логин">
        <div class="wrapp">
          <input type="text" class="autorisation__form-password" placeholder="Пароль">
          <button class="autorisation__form-button" type="button">
            <img src="./images/arrow-right.svg" alt="arrow" class="autorisation__form-button-icon">
         </button>
        </div>
      </form>
      <div class="tooltip__wrapper">
        <div class="tooltip">
          <img src="./images/icons8.png" alt="icons8" class="icon8">
          <span class="tooltiptext">Это система управления лицензионными ключами и пользователями платформы дополненной реальности. Петрософт, 2023</span>
        </div>
      </div>
    </div>
    <div class="wrapper__image">
      <img src="./images/img.jpg" alt="img" class="img">
    </div>
  </main>
</template>

<script>
export default {
  name: 'AutorisationAr',
}
</script>

<style scoped>

@font-face {
  font-family: Ubuntu;
  src: url(./fonts/Ubuntu-Light.ttf);
}

* {
  font-family: Ubuntu;
}

main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.autorisation__wrapp{
  width: 342px;
  height: 96%;
  background:rgba(28, 27, 32, 1);
  border-radius: 30px;
  margin-left: 2vh;
  padding-top: 15px;
}

.autorisation__form {
  margin-left: 25px;
  margin-right: 25px;
}

input {
  background: none;
  border: 2px solid rgba(90, 90, 90, 1);
  border-radius: 15px;
  height: 35px;
  color: white;
  margin-top: 15px;
  outline: none;
  padding: 5px;
  padding-left: 14px;
}

input:focus {
  border: 2px solid rgb(127, 127, 127);
}

input::-webkit-input-placeholder { color: rgba(143, 143, 143, 1);
;
}
input::-moz-placeholder { color: rgba(143, 143, 143, 1);

}

.favicon {
  margin-left: 20px
}

.autorisation__form-button {
  background: none;
  outline: none;
  border: 2px solid rgba(90, 90, 90, 1);
  border-radius: 15px;
  width: 50px;
  height: 50px;
  margin-left: 10px;
  margin-top: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.autorisation__form-button:hover {
  background: rgb(36, 36, 36);
  transition: all 0.2s ease;
}

.autorisation__form-button:active {
  background: rgb(47, 47, 47);
  transition: all 0.2s ease;

}
.autorisation__form-button:disabled {
  background: rgb(36, 36, 36);
}

.autorisation__form-button-icon {
  width: 20px;
  height: 20px;
}

.autorisation__form-wrapper {
  display: flex;
  flex-direction: row;
}

.autorisation__form-login {
  width: 230px;
}

.autorisation__form-password {
  width: 168px;
}
.wrapp {
  display: flex;
}

.icon8 {
  position: absolute;
  width: 25px;
  height: 25px;
  bottom: 0px;
  margin: 30px;
}

.wrapper__image {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img {
  width: 55vw;
  height: 55vw;
}

.tooltip {
  position: relative;
  display: inline-block;

}

.tooltiptext {
  visibility: hidden;
  width: auto;
  background-color: none;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 3;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.6s;
}


.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
  width: 200px;

}

.tooltip__wrapper {
  position: absolute;
  bottom: 0;
}

@media screen and (max-width:700px){
  .wrapper__image {
    display: none;
  }

  .img {
    display: none;
  }

  .autorisation__wrapp {
    margin-left: auto;
    margin-right: auto 
  }

}
</style>
