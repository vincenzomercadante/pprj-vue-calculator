const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      textDisplayed: "0",
      numberPressed: false,
      firstNumber: null,
      calcOperator: "",
      calcHistory: [],
      cancClicked: false,
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
      if (this.textDisplayed == "0" && value != "0" && value != ".")
        this.textDisplayed = value;
      else if (
        this.textDisplayed != "0" ||
        (this.textDisplayed == "0" && value == ".")
      )
        this.textDisplayed += value;
      this.numberPressed = true;
    },

    /**
     * erase all the number inserted
     */
    eraseDisplay() {
      if (!this.cancClicked) {
        this.textDisplayed = "0";
      } else if (this.cancClicked) {
        this.firstNumber = "0";
        this.calcOperator = "";
        this.numberPressed = false;
      }

      this.cancClicked = !this.cancClicked;
    },

    /**
     * change the sign of the textDisplayed Number
     */
    changeSign() {
      if (this.textDisplayed[0] == "-") {
        this.textDisplayed = this.textDisplayed.slice(1);
      } else if (this.textDisplayed[0] != "0")
        this.textDisplayed = "-" + this.textDisplayed;
    },

    /**
     * Save the calc operator if it doesn't, and the first typed number exist or make the calculation
     * and at the and push the calculation on the calc history array
     *
     * @param {string} opr the opr string contains the operator of my calculation
     */
    operatorClicked(opr) {
      if (!this.calcOperator) {
        this.calcOperator = opr;
        this.firstNumber = this.textDisplayed;
        this.textDisplayed = "0";
      } else {
        const firstCalcNum = parseFloat(this.firstNumber);
        const secondCalcNum = parseFloat(this.textDisplayed);
        switch (this.calcOperator) {
          case "+":
            this.textDisplayed = (firstCalcNum + secondCalcNum).toString();
            this.pushCalcHistory(
              firstCalcNum,
              opr,
              secondCalcNum,
              this.textDisplayed
            );
            break;
          case "-":
            this.textDisplayed = (firstCalcNum - secondCalcNum).toString();
            this.pushCalcHistory(
              firstCalcNum,
              opr,
              secondCalcNum,
              this.textDisplayed
            );
            break;
          case "/":
            this.textDisplayed = (firstCalcNum / secondCalcNum).toString();
            this.pushCalcHistory(
              firstCalcNum,
              opr,
              secondCalcNum,
              this.textDisplayed
            );
            break;
          case "*":
            this.textDisplayed = (firstCalcNum * secondCalcNum).toString();
            this.pushCalcHistory(
              firstCalcNum,
              opr,
              secondCalcNum,
              this.textDisplayed
            );
            break;
          case "%":
            console.log("ciao");
        }
      }
    },

    pushCalcHistory(firstNum, operator, secondNum, result) {
      const calculation =
        firstNum.toString() + operator + secondNum.toString() + "=" + result;

      this.calcHistory.push(calculation);

      this.calcOperator = "";
      this.firstNumber = "";
    },
  },
});

app.mount("#app");
