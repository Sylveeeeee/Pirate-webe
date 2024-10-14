<template>
    <div>

        <navbar/>
        <navbar2 />
        <div class="htb-container">
            <div class="card2">
                <h3>HOW TO BUY</h3>
                <img src="public/htbb.jpg">
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

.card2 img {
    height: auto;
    width: 1200px;
}

.card2 {
    width: 1400px;
    height: auto;
    background-color: #2b2929;
    border-radius: 10px;
    border: 2px solid;
    border-color: aqua;
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
    background: linear-gradient(to right, rgb(0, 255, 255) , rgb(255, 0, 115) );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}

.card2 p {
    margin: 10PX;
    color: white;
}
</style>