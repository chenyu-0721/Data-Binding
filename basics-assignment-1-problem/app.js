const app = Vue.createApp({
  data() {
    return {
      name: "Chen Guan Yu",
      age: 24,
      imageUrl:"",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
