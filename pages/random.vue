<template>
  <div>

      <navbar/>
      <navbar2 />
      <div class="htb-container">
          <div class="card2">
              <h3>CONTACT US</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officia enim, nobis architecto reprehenderit veritatis ratione accusamus minima veniam deserunt accusantium harum ullam cum totam nesciunt aperiam voluptates. Ab, non!</p>
          </div>
      </div>
  </div>
</template>

<style>

.htb-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card2 {
  width: 1400px;
  height: auto;
  background-color: rgb(49, 48, 48);
  border-radius: 10px;
  border: 2px solid;
  border-color: #00ffff;
  overflow: hidden;
  margin: 20px;

}

.card2 h3 {
  display: flex;
  justify-content: center;
  margin: 10px;
  font-size: 40px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: aqua;
  background: linear-gradient(to right, rgb(255, 3, 205) , rgb(0, 255, 76) );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

.card2 p {
  margin: 10PX;
  color: white;
}
</style>