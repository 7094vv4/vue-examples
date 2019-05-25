export default {
  methods: {
    $_sleepable_sleep: time => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, time)
      })
    }
  }
}
