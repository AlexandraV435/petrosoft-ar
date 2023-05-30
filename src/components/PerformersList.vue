<template>
  <main>
    <div class="wrapper-modal" v-if="showModal">
      <div class="background"></div>
      <div class="modal">
        <h4>Удалить исполнителя</h4>
        <p>{{ personName }}</p>
        <form>
          <button type="button" @click="deletePerson(personIndex)" class="btn-delete btn">УДАЛИТЬ</button>
          <button type="button" @click="cancel" class="btn-cancel btn">ОТМЕНИТЬ</button>
        </form>
      </div>
    </div>
    <div class="select__main">
      <img src="./images/favicon.svg" alt="favicon" class="select__logo-image">
      <img src="./images/exit.svg" alt="exit" class="select__exit-image">
    </div>
    <div class="select__information">
      <button class="button">
        <img src="./images/back.svg" alt="">
        Назад
        </button>
      <h1>Исполнители</h1>
      <div class="select__information-descr">
        <p>
          Климов. Поиск и устранение неисправностей
        </p>
      </div>
    <div class="performers__information">
      <table>
        <tr>
          <th>ФИО</th>
          <th>Должность</th>
          <th class="th__pin">Пин-код <img src="./images/attention-light.svg" alt="" class="attention__persons"></th>
          <th class="none"></th>
        </tr>
        <br>
        <tr v-for="(keys, index) in personsData" :key="index" @click="selectedTag = index" :class="{'select': selectedTag == index}">
          <td>
            <input type="text" :readonly="edited == false" v-model="keys.name" class="person__name" :class="{'editInput': edited == true}">
          </td>
          <td>
            <input 
            class="td__title"
            type="text" 
            :readonly="edited == false" 
            v-bind:value="keys.title.length > 0 ? keys.title : '—'"
            :class="{'disabled': keys.title.length == 0, 'editInput': edited == true}"
            >
          </td>
          <td class="td__pin">
            <input type="text" 
            :readonly="edited == false" 
            v-bind:value="keys.pin.length > 0 ? keys.pin : '—'" 
            class="pin"
            :class="{'disabled': keys.pin.length == 0, 'editInput': edited == true}"
            >
          </td>
          <td class="person__det">
            <button v-if="selectedTag == index && edited == false" class="buttonEdit" @click="editDetails">РЕДАКТИРОВАТЬ</button>
            <button v-if="selectedTag == index && edited == true" class="buttonSave buttonEdit" @click="saveDetails">СОХРАНИТЬ</button>
            <button v-if="selectedTag == index && edited == true" class="buttonDelete" @click="deleteDetails(index, keys.name)"><img v-if="selectedTag == index && edited == true" class="buttonDelete" @click="deleteeDetails" src="./images/delete.svg" alt=""></button>
          </td>
        </tr>
        <br>
      </table>
    </div>
    <button class="button button-add">
      <img src="./images/addPerson.svg" alt="">
      Добавить
    </button>
  </div>
  </main>
</template>

<script>
export default {
  name: 'PerformersList',
  data() {
    return {
      showButton: false,
      selectedTag: null,
      type: 'active',
      edited: false,
      editedKey: null,
      editedDate: null,
      ativeKeysIndex: 0,
      showModal: false,
      personName: 'Кучка Андрей Витальевич',
      personIndex: null,
      keys: [
        {"persons": [{name: 'Кучка Андрей Витальевич', title: '', pin: ''}, {name: 'Горемыка Константин Львович', title: 'Начальник ОППС', pin: '1620'},{name: 'Медведь Игорь Вениаминович', title: 'Контролер ИЦ', pin: ''},{name: 'Кучка Андрей Витальевич', title: '', pin: ''}, {name: 'Горемыка Константин Львович', title: 'Начальник ОППС', pin: '1620'},{name: 'Медведь Игорь Вениаминович', title: 'Контролер ИЦ', pin: ''}, ]}, 
        ], 
      }
  },
  computed: {
    personsData() {
      const data = this.keys[0].persons;
      return data;
    }
  },
  methods: {
    changeType(e, index, name) {
      this.type = e;
      this.ativeKeysIndex = index;
      this.ativeKeysName = name;
    },
    editDetails() {
      //oтправка данных
      this.edited = true;
      // this.editedKey = this.notActivatedKeys[index].key;
      // this.editedDate = this.notActivatedKeys[index].date;
    },
    saveDetails() {
      //oтправка данных
      this.edited = false;
    },
    handleScroll() {
      if (window.pageYOffset > 300) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    cancel() {
      //oтправка данных
      this.showModal = false;
      this.personName = null;
    }, 
    deletePerson(personIndex) {
      this.showModal = false;
      //oтправка данных
      this.personIndex = null;
      personIndex;
    },
    deleteDetails(index, key) {
      this.showModal = true;
      this.personName = key;
    }

  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
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

@font-face {
  font-family: Raleway;
  src: url(./fonts/Raleway-Medium.ttf);
}



main {
  width: 100%;
  height: 100%;
  display: flex;
}

.keys__information-type-wrapp {
  display: flex;
}

.select {
  background: rgba(230, 230, 230, 1);
;
}

.keys {
  display: flex;
}
.keys__information-descr-key .descr {
  display: flex;
  border-bottom: 1px solid rgba(162, 159, 173, 0.3);
  padding-bottom: 17px;
  padding-top: 23px;
  padding-left: 35px;
  justify-content: space-between;
}

.keys__information-descr-key .descr .dateExpired  {
  margin-right: 70px
}

.keys__wrapper {
  padding-top: 20px;
  padding-bottom: 20px;
}

.key__notactive-date {
  margin-right: 210px
}

.descr p {
  font-family: Raleway;
  color: rgba(162, 159, 173, 1);
  font-size: 14px;
  font-weight: 600;
}

.keys__information {
  display: flex;
}

.keys__information-type {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(240, 240, 240, 1);
  width: 282px;
  height: 160px;
  border-radius: 25px;
  padding-left: 38px;
  padding-top: 15px;
  color: rgba(162, 159, 173, 1);
  font-size: 17px;
  font-family: Raleway-semi-bold;
}

.keys__information-type div {
  margin-bottom: 20px
}

.keys__information-type div:last-child {
  margin-bottom: 14px
}

.keys{
  font-family: Raleway-semi-bold;
  color: rgba(56, 54, 65, 1);
  padding-left: 35px;
  padding-top: 10px;
  padding-bottom: 10px
}

.keys:last-child {
  margin-bottom: 0;
}

.keys p{
  margin-right: 116px;
}

.keys p:last-child {
  margin-right: 116px;
}

.button {
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

.button:hover {
  background-color: rgb(237, 237, 237);
  transition: all 0.5s;
}

.button:active {
  background-color: rgb(45, 45, 45);
  transition: all 0.5s;
}

.button img {
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
  position: absolute;
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

.img {
  display: none;
}

.select__information-descr {
  margin-top: 18px;
  margin-bottom: 52px;
  color: rgba(162, 159, 173, 1);
  font-family: Raleway-semi-bold;
  font-size: 20px
}

sup {
  margin-left: 3px;
  font-size: 11px;
}

.active {
  color: black
}

.active .img{
  display: block;
  margin-right: 9px;
}
.attention {
  margin-left: 40px;
  margin-top: 30px
}

.attention p{
  font-family: Raleway;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  color: rgba(56, 54, 65, 0.3);
}

.attention img {
  margin-right: 11px;
}

table {
  background: rgba(240, 240, 240, 1);
  border-radius: 25px;
  border-collapse: collapse; 
  width: 70vw;
}

table tr th:first-child {
  padding-left: 35px;
}

table tr td:first-child {
  padding-left: 25px;
}

tr:first-child {
  border-bottom: 1px solid rgba(162, 159, 173, 0.3);
  color: rgba(162, 159, 173, 1);
}

tr:first-child th {
  padding-top: 23px;
  padding-bottom: 17px;
  font-family: Raleway;
  font-size: 14px;
  text-align: start;
}

td {
  font-family: Raleway-semi-bold;
  height: 45px;
}

.buttonEdit {
  font-family: Raleway-semi-bold;
  border: none;
  background: none;
  color: rgba(162, 159, 173, 1);
  font-size: 14px;
  padding-right: 10px;

}

input {
  outline: none;
  background: none;
  border: none;
  font-family: Raleway-semi-bold;
  height: 45px;
  text-align: start;
  font-size: 16px;
  height: 35px;
}

.editInput:focus {
  outline: 1px solid rgba(162, 159, 173, 1);
  color: rgba(162, 159, 173, 1);
  border-radius: 15px;
}

.none {
  width: 140px;
}

.person__name{
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  padding-right: 20px;
}

.pin {
  width: 70px;
  box-sizing: border-box;
}

.th__pin {
  width: 120px;
  display: flex;
  align-items: center;
}

.buttonDelete {
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.person__det {
  display: flex;
  align-items: center;
}

.attention__persons {
  margin-left: 13px
}

.button-add {
  width: 113px;
  margin-top: 25px;
}

.background {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(49, 49, 49, 0.5);
  z-index: 99;
}

.modal {
  position: absolute;
  z-index: 100;
  width: 384px;
  height: 180px;
  background: rgba(247, 248, 250, 1);
  border-radius: 30px;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-family: Raleway-semi-bold;
  padding-left: 34px;
  padding-top: 38px;
  box-sizing: border-box;
}

.wrapper-modal h4 {
  font-size: 25px;
  margin-bottom: 8px;
}

.wrapper-modal p {
  font-size: 14px;
  color: rgba(162, 159, 173, 1);
}

.btn {
  font-family: Raleway-semi-bold;
  font-size:14px;
  border: none;
  background: none;
  margin-top: 35px
}

.btn-delete {
  color: rgba(60, 214, 75, 1);
  font-size: 14px;
  margin-right: 30px
}

.btn-cancel {
  color: rgba(162, 159, 173, 1);
}

.btn-delete:hover {
  color: rgb(51, 173, 63);
  transition: all 600ms;
}

.btn-cancel:hover {
  color: rgb(116, 114, 122);
  transition: all 600ms;
}

.btn-delete:active {
  color: rgb(37, 138, 47);
  transition: all 200ms;
}

.btn-cancel:active {
  color: rgb(57, 56, 59);
  transition: all 200ms;
}

.disabled {
  color: rgba(162, 159, 173, 1);
}

input {
  padding-left: 12px
}

.td__title {
  width: 152px;
}
</style>
