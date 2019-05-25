<template lang="pug">
  .OpenModal
    p.p ボタンを押すとモーダルウィンドウが開きます
    VEButton(@click='openModal') 開く
    VEModal(@close='closeModal' v-if='modal')
      p.p This is Modal Window!
      div
        VEInput(v-model='message')
      template(slot='footer')
        VEButton(@click='doSend') 送信
</template>

<script>
export default {
  data () {
    return {
      modal: false,
      message: ''
    }
  },
  methods: {
    openModal () {
      this.modal = true
    },
    closeModal () {
      this.modal = false
    },
    doSend () {
      if (this.message.length > 0) {
        alert(this.message)
        this.message = ''
        this.closeModal()
      } else {
        alert('メッセージを入力してください')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.p {
  margin-bottom: 0.5rem;
}
</style>
