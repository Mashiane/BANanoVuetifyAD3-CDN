Vue.component("renderstring", {
  props: {
    string: {
      required: true,
      type: String
    }
  },
  data: () => ({
    string: '',
  }),
  render(h) {
    const self = this
    const render = {
      template: "<div>" + this.string + "</div>",
    }
    return h(render)
  }
})