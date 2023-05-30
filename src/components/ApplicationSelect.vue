<template>
  <main>
    <div class="select__main">
      <img src="./images/favicon.svg" alt="favicon" class="select__logo-image">
      <img src="./images/exit.svg" alt="exit" class="select__exit-image">
    </div>
    <div class="select__information">
      <h1>Доступные приложения</h1>
      <div class="select__information-descr">
        <p>
          <img src="./images/right.svg" alt="" class="img">
          Климов. Поиск и устранение неисправностей
        </p>
      </div>
      <div class="select__information-descr">
        <p>
          <img src="./images/right.svg" alt="" class="img">
          Kлимов. Осмотр двигателя
        </p>
      </div>
      <div class="select__information-descr">
        <p>
          <img src="./images/right.svg" alt="" class="img">
          Климов. Чек-листы
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ApplicationSelect',
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
  margin-top: 17.6vh;
  margin-left: 70px;
}

h1 {
  font-weight: 900;
  font-size: 45px;
  margin-bottom: 45px;
  font-family: Raleway-extra-bold;;
}

p {
  font-family: Raleway-semi-bold;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 25px;
  display: flex;
}

p:hover {
  margin-left: 39px;
  transition: margin-left 0.8s ease;
}

p:hover .img {
  display: block;
  margin-right: 16px;
}

.img {
  display: none;
}
</style>
