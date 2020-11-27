<template>
  <div class="row">
    <div class="col-12">
      <div class="aperture-height">
        <h4>Улица ({{addWidth}})</h4>
        <div>
          <label for="sizeOut">Ширина</label>
          <input v-model="sizeOut" id="sizeOut" type="number">
        </div>
      </div>
      <div class="aperture-width">
        <h4>Помещение ({{addWidth}})</h4>
        <div>
          <label for="sizeIn">Ширина</label>
          <input v-model="sizeIn" id="sizeIn" type="number">
        </div>
      </div>
      <button class="app-btn btn__blue btn__min-width" @click="sendSize">Ок ширина</button>
    </div>
    <div class="modal-area">
      <b-modal
        centered
        no-stacking
        v-model="isWarning40"
        title="Внимание!"
      >
        Разница между внутренним размером проема и размером готового изделия <strong>меньше 40мм</strong>.
        <template #modal-footer="">
          <button
            class="app-btn btn__blue"
            @click="isWarning40 = !isWarning40"
          >Пересчитать</button>
        </template>
      </b-modal>

      <b-modal
        centered
        no-stacking
        v-model="isWarning120"
        title="Внимание!"
      >
        Разница между внутренним размером проема и размером готового изделия <strong>больше 120мм.</strong><br>
        Следует перепроверить внешний размер проема. Если он верен, то необходимо выписать пеноплекс (1 лист 20мм на 1 проём)
        <template #modal-footer="{ ok }">
          <button
            class="app-btn btn__blue"
            @click="ok()"
          >Данные верны</button>
          <button
            class="app-btn btn__blue"
            @click="isWarning120 = !isWarning120"
          >Ввести новые размеры</button>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "pl-aperture-width",
  props: ['orderID', 'winNo', 'addWidth'],
  data() {
    return {
      sizeIn: '',
      sizeOut: '',
      checkSize: '',
      isWarning40: false,
      isWarning120: false
    }
  },
  methods: {
    sendSize() {
      const orderID = this.orderID
      const winNo = this.winNo
      const letter = this.addWidth
      const close = true
      const sizeOut = this.sizeOut
      const sizeIn = this.sizeIn
      const constrSize = +sizeOut + 50
      let checkSize = Number(sizeIn - constrSize)
      if (checkSize >= 40 && checkSize <= 120) {
        const payload = {
          orderID,
          winNo,
          constrSize,
          letter,
          close
        }
        this.$emit('send-size', payload)
        console.log(`Ширина изделия ${constrSize}`)
      } else if (checkSize < 40) {
        console.log(`Разница менее 40, нужен перерасчет`)
        return this.isWarning40 = true
      } else if (checkSize > 120) {
        console.log(`Разница более 120, нужен перерасчет. Или заказать пенопласт =)`)
        return this.isWarning120 = true
      }
    },
  }
}
</script>