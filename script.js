const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      textDisplayed: "0",
      numberPressed: false,
    };
  },

  methods: {
    /**
     *
     * This function concat the pressed button value
     *
     * @param {string} value pressed button value
     */
    addValue(value) {
      if (this.textDisplayed == "0" && value != "0") this.textDisplayed = value;
      else if (this.textDisplayed != "0") this.textDisplayed += value;
      this.numberPressed = true;
    },

    /**
     * erase all the number inserted
     */
    eraseDisplay() {
      this.textDisplayed = "0";
      this.numberPressed = false;
    },
  },
});

app.mount("#app");
