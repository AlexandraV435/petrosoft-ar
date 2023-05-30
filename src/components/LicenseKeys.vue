<template>
  <main>
    <button class="buttonUp" v-if="showButton" @click="scrollToTop">
      <img src="./images/buttonUp.svg">
    </button>
    <div class="select__main">
      <img src="./images/favicon.svg" alt="favicon" class="select__logo-image">
      <img src="./images/exit.svg" alt="exit" class="select__exit-image">
    </div>
    <div class="select__information">
      <button class="button__back">
        <img src="./images/back.svg" alt="">
        Назад
        </button>
      <h1>Доступные приложения</h1>
      <div class="select__information-descr">
        <p>
          Климов. Поиск и устранение неисправностей
        </p>
      </div>
    <div class="keys__information">
      <div class="keys__information-type">
        <div class="keys__information-type-wrapp" @click="changeType('active', 0, 'active')" :class="{ 'active': type == 'active'}">
          <img src="./images/right.svg" alt="" class="img">
          <p>Активированные</p>
          <sup>{{ activatedKeys.length ?  activatedKeys.length : 0}}</sup>
        </div>
        <div class="keys__information-type-wrapp" @click="changeType('notActive', 2, 'notactive')" :class="{ 'active': type == 'notActive'}">
          <img src="./images/right.svg" alt="" class="img">
          <p>Не активированные</p>
          <sup>{{ notActivatedKeys.length ?  notActivatedKeys.length : 0 }}</sup>
        </div>
        <div class="keys__information-type-wrapp" @click="changeType('expired', 1, 'expired')" :class="{ 'active': type == 'expired'}">
          <img src="./images/right.svg" alt="" class="img">
          <p>Истекшие</p>
          <sup>{{expiredKeys.length ?  expiredKeys.length : 0}}</sup>
        </div>
      </div>
      <div v-if="keys[ativeKeysIndex][ativeKeysName].length">
        <table v-if="type == 'active'">
          <tr>
            <th>Ключ</th>
            <th>Дата активации</th>
            <th>Дата истечения</th>
          </tr>
          <br>
          <tr v-for="keys in activatedKeys" :key="keys">
            <td v-for="key in keys" :key="key"> {{ key}}</td>
          </tr>
          <br>
        </table>
        <table v-if="type == 'notActive'">
          <tr>
            <th>Ключ</th>
            <th>Срок действия (дни)</th>
            <th class="none"></th>
          </tr>
          <br>
          <tr v-for="(keys, index) in notActivatedKeys" :key="keys" @click="selectedTag = index" :class="{'select': selectedTag == index}">
            <td>{{ keys.key }}</td>
            <td><input type="text" v-model="keys.date" :readonly="edited == false" :class="{'editInput': edited == true}"></td>
            <button v-if="selectedTag == index && edited == false" class="buttonEdit" @click="editDetails">РЕДАКТИРОВАТЬ</button>
            <button v-if="selectedTag == index && edited == true" class="buttonEdit" @click="saveDetails">СОХРАНИТЬ</button>
          </tr>
          <br>
        </table>
        <table v-if="type == 'expired'">
          <tr>
            <th>Ключ</th>
            <th>Дата активации</th>
            <th>Дата истечения</th>
          </tr>
          <br>
          <tr v-for="keys in expiredKeys" :key="keys">
            <td v-for="key in keys" :key="key"> {{ key}}</td>
          </tr>
          <br>
        </table>
      </div>
      <div v-else-if="ativeKeysName == 'expired'"  class="attention">
        <p> <img src="./images/attention.svg" alt="">Нет ключей c истекшим сроком давности</p>
      </div>
       <div v-else-if="ativeKeysName == 'notactive'" class="attention">
        <p>Нет неактивированных ключей</p>
      </div>
      <div v-else-if="ativeKeysName == 'active'"  class="attention">
        <p> <img src="./images/attention.svg" alt="">Нет активированных ключей</p>
      </div>
    </div>
  </div>
  </main>
</template>

<script>
export default {
  name: 'LisenseKey',
  data() {
    return {
      showButton: false,
      selectedTag: null,
      type: 'active',
      edited: false,
      editedKey: null,
      editedDate: null,
      ativeKeysIndex: 0,
      ativeKeysName: 'active',
      keys: [
        {"active": [{key: 'HFGYPHDY', dateActivated: '01.01.23', dateDeactivated: '01.01.24'}, {key: 'HFGYPHDY', dateActivated: '01.01.23', dateDeactivated: '01.01.24'}, {key: 'HFGYPHDY', dateActivated: '01.01.23', dateDeactivated: '01.01.24'}]}, 
        {"expired": []},
        {"notactive": [{key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'},{key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'},{key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}, {key: 'HFGYPHDY', date: '365'}]}], 
      }
  },
  computed: {
    activatedKeys() {
      const data = this.keys[0].active;
      return data;
    },
    notActivatedKeys() {
      const data = this.keys[2].notactive;
      return data;
    },
    expiredKeys() {
      const data = this.keys[1].expired;
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
      this.edited = true;
      // this.editedKey = this.notActivatedKeys[index].key;
      // this.editedDate = this.notActivatedKeys[index].date;
    },
    saveDetails() {
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

.keys__information-descr {
  background: rgba(240, 240, 240, 1);
  width: 570px;
  border-radius: 25px;
  margin-left: 40px;
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
  background-color: rgb(45, 45, 45);
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
  min-width: 570px;
  background: rgba(240, 240, 240, 1);
  border-radius: 25px;
  margin-left: 40px;
  border-collapse: collapse; 
}

table tr th:first-child {
  padding-left: 35px;
}

table tr td:first-child {
  padding-left: 35px;
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
  height: 35px;
  padding-left: 20px
}

.buttonEdit {
  margin-top: 15px;
  font-family: Raleway-semi-bold;
  border: none;
  background: none;
  color: rgba(162, 159, 173, 1);
  font-size: 14px;

}

input {
  outline: none;
  background: none;
  border: none;
  font-family: Raleway-semi-bold;
  height: 35px;
  text-align: center;
  width: 63px;
  font-size: 16px;
}

.editInput:focus {
  outline: 1px solid rgba(162, 159, 173, 1);
  color: rgba(162, 159, 173, 1);
  border-radius: 15px;
}

.none {
  width: 140px;
}

table th {
  padding-right: 20px;
}

.buttonUp {
  position: fixed;
  background: none;
  border-radius: 15px;
  border: 2px solid rgba(162, 159, 173, 1);
  width: 47px;
  height: 47px;
  bottom: 0;
  right: 0;
  margin-bottom: 20px;
  margin-right: 100px;
}

tr {
  height: 45px;
}
</style>
