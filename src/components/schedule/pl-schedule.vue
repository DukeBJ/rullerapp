<template>
  
    <div class="card card-schedule">
      <div class="card-header">
        <div class="client">
          №{{ number }}
        </div>
        <div class="time">
          {{ time }}
        </div>
      </div>

      <transition name="customer-card">
        <pl-customer-card
          v-if="isShow"
          :customer="customer"
          :number="number"
          :isEnd="isEnd"
          @mensure-start="start"
          @mensure-end="end"
          @to-config="addNewOrder"
          @modal-self="self"
        />
      </transition>

      <button :class="!isShow ? 'tape' : 'tape rotate'" @click="isShow = !isShow"></button>
      
      <div v-show="isEnd" class="label-left"><span>Завершён</span></div>

      <b-modal
        ref="paper-mensurement"
        centered
        v-model="isModalPhoto"
        title="Прикрепите фото вашего замера"
      >

        <form action="">
          <input type="file">
        </form>

        <template #modal-footer="{ ok }">
          <button disabled class="app-btn btn__blue" variant="success" @click="ok()">
            Отправить
          </button>
        </template>
        
      </b-modal>

      <b-modal
        ref="mensurement-end"
        centered
        no-stacking
        v-model="isModalEnd"
        title="Вы завершаете замер!<br>Каков результат вашего замера?"
      >
        <template #modal-footer>
          <button
            class="app-btn btn__blue"
            @click="mensurementEnd">
            Ура! Договор!
          </button>
          <button
            class="app-btn btn__blue"
            @click="mensurementEndNot">
            Пока недоговор 😭
          </button>
        </template>
      </b-modal>

      <b-modal
        ref="mensurement-reason"
        centered
        no-stacking
        v-model="isModalEndNot"
        title="Укажите причину по которой не удалось заключить договор"
      >

        <form action="">
          <div class="row">
            <div class="col-12">
              <v-select
                class="pl-select"
                v-model="reasonSelected"
                :options="PRICHINA_LIST"
                label="name"
                :clearable="false"
                :searchable="false">
                <template #open-indicator="{ attributes }">
                  <span v-bind="attributes">
                    <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.2588 5.8004c.3707-.4093 1.0031-.4406 1.4125-.07L5 8.7453V1c0-.5523.4477-1 1-1s1 .4477 1 1v7.7452l3.3287-3.0147c.4094-.3707 1.0418-.3394 1.4125.07.3707.4093.3394 1.0417-.0699 1.4124l-5 4.5283a1 1 0 01-1.3426 0l-5-4.5283c-.4093-.3707-.4406-1.0031-.0699-1.4125z" fill="#33C5F3"/></svg>
                  </span>
                </template>
              </v-select>
            </div>

            <div class="col-12">
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
        </form>
        <template #modal-footer>
          <button
            class="app-btn btn__blue"
            @click="reasonOff">
            Отправить
          </button>
        </template>
      </b-modal>

    </div>
    
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import plCustomerCard from "@/components/schedule/pl-customer-card"
import vSelect from 'vue-select'

export default {
  name: 'pl-schedule',
  components: {
    plCustomerCard,
    vSelect
  },
  props: {
    number: String,
    time: String,
    customer: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isStart: false,
      isShow: false,
      isModalPhoto: false,
      isModalEnd: false,
      isModalEndNot: false,
      isEnd: false,
      reasonSelected: 'Выберите причину',
    }
  },
  computed: {
    ...mapGetters('schedule', [
        'PRICHINA_LIST',
    ]),
  },
  methods: {
    ...mapActions('configurator', [
        'ADD_ORDER',
    ]),
    addNewOrder: function(number) {
      this.ADD_ORDER(number)
      this.$router.push({ name: 'configurator', params: {ordern: number}, query: { order: number } })
    },
    start(e) {
      console.log(e)
    },
    self(modalSelf) {
      this.isModalPhoto = modalSelf
    },
    end(modalEnd) {
      this.isModalEnd = modalEnd
    },
    reasonOff() {
      this.$refs['mensurement-reason'].hide()
      console.log('Причина не заключения договора:')
      console.log(this.reasonSelected.kod)
      console.log('Коментарий:')
      console.log('...')
      this.isEnd = true
    },
    mensurementEndNot() {
      this.$refs['mensurement-end'].hide()
      this.$refs['mensurement-reason'].show()
    },
    mensurementEnd() {
      this.$refs['mensurement-end'].hide()
      console.log('завершено')
      this.isEnd = true
    }
  },
}
</script>

<style lang="scss" scoped>
  .customer-card-enter, .customer-card-leave-to {
    transition: all 0.5s ease-in-out;
    max-height: 0;
  }
  .customer-card-enter-active, .customer-card-leave-active {
    transition: all 0.5s ease-in-out;
  }
  .customer-card-leave, .customer-card-enter-to {
    transition: all 0.5s ease-in-out;
    max-height: 1000px;
  }

</style>