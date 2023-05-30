<template>
  <main>
    <div class="select__main">
      <img src="./images/favicon.svg" alt="favicon" class="select__logo-image">
      <img src="./images/exit.svg" alt="exit" class="select__exit-image">
    </div>
    <div class="select__information">
      <button class="button__back">
        <img src="./images/back.svg" alt="">
        Назад
        </button>
      <h1>Доступные функции</h1>
      <p class="select__information-p">Климов. Поиск и устранение неисправностей</p>
      <div class="select__information-descr">
        <p class="functions">
          <img src="./images/right.svg" alt="" class="img">
          Лицензионные ключи
        </p>
        <p class="functions">
          <img src="./images/right.svg" alt="" class="img">
          Исполнители
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'SectionSelect',
}
</script>

<style scoped>

@font-face {
  font-family: Raleway-extra-bold;
  src: url(./fonts/Raleway-ExtraBold.ttf);
}

@font-face {
  font-family: Raleway-semi-bold;
  src: url(./fonts/Raleway-SemiBold.ttf);
}

main {
  width: 100%;
  height: 100%;
  display: flex;
}

.button__back {
  border: 1px solid rgba(162, 159, 173, 1);
  border-radius: 13px;
  color: rgba(162, 159, 173, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97px;
  height: 37px;
  font-size: 15px;
  margin-bottom: 23px;
  background: none;
}

.button__back:hover {
  background-color: rgb(237, 237, 237);
  transition: all 0.5s;
}

.button__back:active {
  background-color: rgb(59, 59, 59);
  transition: all 0.5s;
}


.button__back img {
  margin-right: 10px;
  width: 13px;
  height: 17px;
}

.select__information-p {
  color: rgba(162, 159, 173, 1);

}

.select__main {
  display: flex;
  flex-direction: column;
  width: 104px;
  background: #1C1B20;
  border-radius: 25px;
  height: 96%;
  margin-left: 2vh;
  align-items: center;
  margin-top: 2vh
}

.select__exit-image {
  position: fixed;
  bottom: 0;
  padding: 0 0 30px 0;
}

.select__logo-image {
  width: 60px;
  height: 60px;
  margin-top: 10px
}

.select__information {
  margin-top: 51px;
  margin-left: 70px;
}

h1 {
  font-weight: 900;
  font-size: 45px;
  margin-bottom: 18px;
  font-family: Raleway-extra-bold;;
}

p {
  font-family: Raleway-semi-bold;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 25px;
  display: flex;
}

.functions:hover {
  margin-left: 39px;
  transition: margin-left 0.8s ease;
}

.functions:hover .img {
  display: block;
  margin-right: 16px;
}

.img {
  display: none;
}

.select__information-descr {
  margin-top: 52px
}
</style>
