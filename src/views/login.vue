<template>
  <div>
    <main class="card-place">
      <div class="container">
        <div class="row justify-content-center">
          <form action="" @submit.prevent>
            <div class="col-12">
              <label for="phone">Телефон</label>
              <br>
              <input
                type="tel"
                name="phone"
                id="phone"
                v-model="phone">
              <br><br>
            </div>
            <div class="col-12">
              <label for="login">Пароль</label>
              <br>
              <input
                type="password"
                name="password"
                id="password"
                v-model="pass">
              <br><br>
            </div>
            <div class="col-12">
              <input type="submit" @click="checkLogin" value="Отправить">
            </div>
          </form>
          <div class="col-12">
          {{phone}} <br> {{pass}}
          <br><br>
          {{returnLogin(login)}}
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'pl-schedule-page',
  components: {
  },
  data() {
    return {
      phone: '',
      pass: '',
      // isLogin: 'нету'
    }
  },
  methods: {
    ...mapActions('account', [
        'GET_AUTH',
    ]),
    checkLogin() {
      console.log(this.phone)
      console.log(this.pass)
      const pass = this.pass
      const phone = this.phone
      const payload = {
        phone,
        pass
      }
      this.GET_AUTH(payload)
    },
    returnLogin(login) {
      if (login == 1) {
        return this.$router.push({name: 'dashboard'})
      } else {
        return login
      }
    }
  },
  // watch: {
  //   loginin() {
  //     this.isLogin = this.login
  //   }
  // },
  computed: {
    // ...mapGetters('account', [
    //   'login',
    // ]),
    ...mapState('account', [
      'auth',
      'login'
    ]),
  },
}
</script>

