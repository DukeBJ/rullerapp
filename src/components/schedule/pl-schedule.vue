<template>
  
    <div class="card card-shedule">
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
        />
      </transition>

      <button :class="!isShow ? 'tape' : 'tape rotate'" v-on:click="isShow = !isShow"></button>
      
      <div v-show=" done === true " class="label-left"><span>Завершен</span></div>

      <b-modal
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
        centered
        no-stacking
        v-model="isModalEnd"
        title="Вы завершаете замер!<br>Каков результат вашего замера?"
      >
        <template #modal-footer="{ ok }">
          <button
            class="app-btn btn__blue"
            @click="ok()"
          >Ура! Договор!</button>
          <button
            class="app-btn btn__blue"
            @click="isModalEndNot = !isModalEndNot"
          >Пока недоговор 😭</button>
        </template>
      </b-modal>

      <b-modal
        centered
        no-stacking
        v-model="isModalEndNot"
        title="Укажите причину по которой не удалось заключить договор"
      >

        <form action="">
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <br>
          <input type="checkbox" name="" id="">
        </form>
        <template #modal-footer="{ ok }">
          <button
            class="app-btn btn__blue"
            @click="ok()"
          >Отправить</button>
        </template>
      </b-modal>

    </div>
    
</template>

<script>
import { mapActions } from 'vuex'
import plCustomerCard from "@/components/schedule/pl-customer-card";

export default {
  name: 'pl-schedule',
  components: {
    plCustomerCard
  },
  props: {
    number: String,
    time: String,
    // done: Boolean,
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
      done: false
    }
  },
  methods: {
    ...mapActions('configurator', [
        'ADD_ORDER',
    ]),
    
    addNewOrder: function(number) {
      this.ADD_ORDER(number)
      this.$router.push({ name: 'configurator', params: {ordern: number}, query: { order: number } })
    },
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