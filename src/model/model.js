class Model {
    constructor(state){
        this.state = state;
        this.minValue = 1;
        this.maxVAlue = 100;
    }
    setMinValue(value) {
        this.minValue = value;
    }
    setMaxValue(value) {
        this.maxValue = value;
    }
}

module.exports = Model;