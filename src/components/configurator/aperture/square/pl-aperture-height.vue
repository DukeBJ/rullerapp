<template>
  <div class="row">
    <div class="col-12">
      <div class="aperture-height">
        <h4>Улица ({{addHeight}})</h4>
        <div>
          <label for="sizeOut">Высота</label>
          <input id="sizeOut" v-model="sizeOut" type="number">
        </div>
      </div>
      <div class="aperture-width">
        <h4>Помещение ({{addHeight}})</h4>
        <div>
          <label for="sizeIn">Высота</label>
          <input id="sizeIn" v-model="sizeIn" type="number">
        </div>
      </div>
      <button class="app-btn btn__blue btn__min-width" @click="sendSize">Ок высота</button>
    </div>
    <div class="modal-area">
      <b-modal
        centered
        no-stacking
        v-model="isWarning40"
        title="Внимание!"
      >
        Разница между внутренним размером проема и размером готового изделия <strong>меньше 70мм</strong>.
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
        Разница между внутренним размером проема и размером готового изделия <strong>больше 130мм.</strong><br>
        Следует перепроверить внешний размер проема. Если он верен, то необходимо выписать пеноплекс <nobr>(1 лист</nobr> 20мм <nobr>на 1 проём</nobr>)
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
  name: "pl-aperture-height",
  props: ['orderID', 'winNo', 'addHeight'],
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
      const letter = this.addHeight
      const close = true
      const sizeOut = this.sizeOut
      const sizeIn = this.sizeIn
      const constrSize = +sizeOut - 30
      let checkSize = Number(sizeIn - constrSize)
      if (checkSize >= 70 && checkSize <= 130) {
        const payload = {
          orderID,
          winNo,
          constrSize,
          letter,
          close
        }
        this.$emit('send-size', payload)
        console.log(`Ширина изделия ${constrSize}`)
      } else if (checkSize < 70) {
        console.log(`Разница менее 40, нужен перерасчет`)
        return this.isWarning40 = true
      } else if (checkSize > 130) {
        console.log(`Разница более 120, нужен перерасчет. Или заказать пенопласт =)`)
        return this.isWarning120 = true
      }
    },
  }
}
</script>