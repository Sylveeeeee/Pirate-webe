<template>
    <div>

        <navbar/>
        <navbar2/>
    
        <div>
    <div class="wheel-container">
      <div class="wheel" @click="spinWheel">
        <div class="prize" v-for="(prize, index) in prizes" :key="index">
          {{ prize.name }}
        </div>
      </div>
    </div>
    <div class="result">
      <p v-if="winner"> Congratulations! You won {{ winner.name }}! </p>
    </div>
  </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      prizes: [
        { name: 'Prize 1' },
        { name: 'Prize 2' },
        { name: 'Prize 3' },
        // Add more prizes here
      ],
      winner: null
    }
  },
  methods: {
    spinWheel() {
      // Generate a random number between 0 and the number of prizes
      const randomIndex = Math.floor(Math.random() * this.prizes.length);
      // Set the winner to the prize at the random index
      this.winner = this.prizes[randomIndex];
    }
  }
}
</script>

<style>
.wheel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background-color: #f0f0f0;
  cursor: pointer;
}

.wheel {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.prize {
  flex-basis: 20%;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
}

.result {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

</style>
