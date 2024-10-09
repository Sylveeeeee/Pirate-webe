<template>
    <div>

        <navbar/>
        <navbar2 />
        <div class="htb-container">
            <div class="card2">
                <h3>HOW TO BUY</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officia enim, nobis architecto reprehenderit veritatis ratione accusamus minima veniam deserunt accusantium harum ullam cum totam nesciunt aperiam voluptates. Ab, non!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur quidem beatae aliquam. Delectus quo ipsa tenetur fuga sint soluta laborum, dolores sunt, ducimus voluptatem nostrum eum, magnam esse asperiores.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem provident nemo veniam. Fuga temporibus incidunt omnis similique tempora cumque reiciendis quasi autem consequatur sunt, quod corporis facilis eligendi laudantium. Quia.</p>
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