<template>
  <div>
    <main class="card-place">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12">
            <img :src="plRullet" height="100" alt="" class="mb-4">
            <h3>Замерщик
              <br>
              «Пластика Окон»
            </h3>
          </div>
          <form
            action=""
            @submit.prevent
            class="login-in"
            >
            <div class="col-12 input-relative">
              <label
                :class="{'labeldn' : phone != ''}"
                for="phone">
                Телефон без восьмёрки
              </label>
              <the-mask
                class="input-big"
                mask="+7 (###) ###-##-##"
                v-model="phone"
                type="tel"
                id="phone"
                placeholder=""/>
            </div>
            <div class="col-12 input-relative">
              <label
                :class="{'labeldn' : pass != ''}"
                for="password">
                Пароль
              </label>
              <input
                class="input-big"
                type="password"
                name="password"
                id="password"
                v-model="pass">
            </div>
            <div class="col-12">
              <input
                class="app-btn btn__blue"
                type="submit"
                @click="checkLogin"
                value="Отправить">
            </div>
            <div class="col-12">
              <b-alert
                :show="loginErr != ''"
                dismissible
                variant="warning"
              >
                <div>{{loginErr}}<br>
                Ошибка соединения, попробуйте позже.</div>
              </b-alert>
              <b-alert
                :show="(login != 1) && (login != '')"
                dismissible
                variant="danger"
              >
                <div>{{returnLogin(login)}}</div>
              </b-alert>
            </div>
            <code>--------------</code>
            <div class="col-12">
            {{phone}} <br> {{pass}}
            </div>
          </form>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import {TheMask} from 'vue-the-mask'
import plRullet from '@/assets/img/roll-small.svg'

export default {
  name: 'pl-schedule-page',
  components: {
    TheMask
  },
  data() {
    return {
      phone: '',
      pass: '',
      plRullet,
      dismissCountDown: 10,

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
      this.$cookies.set('phone', this.phone, '30d', '/')
      this.$cookies.set('pass', this.pass, '30d', '/login')
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
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    checkCookiesPhone() {
      if (this.$cookies.get('phone')) {
        this.phone = this.$cookies.get('phone')
      }
    },
    checkCookiesPass() {
      if (this.$cookies.get('pass')) {
        this.pass = this.$cookies.get('pass')
      }
    },
  },
  // watch: {
  //   loginin() {
  //     this.isLogin = this.login
  //   }
  // },
  computed: {
    ...mapState('account', [
      'auth',
      'login',
      'loginErr'
    ]),
  },
  mounted() {
    this.checkCookiesPhone()
    this.checkCookiesPass()
  }
}
</script>

<style lang="scss" scoped>
  .page-view {
    height: 100vh;
    main {
      height: 100%;
      .container {
        height: 100%;
        .row {
          height: 100%;
        }
      }
    }
  }

</style>