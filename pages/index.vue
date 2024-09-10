<template>
    
<header>
    <navbar/>
    <navbar2/>
    <div class="body">
        <div class="TBadvert">
            <advert />  
        </div>
        <div class="body2">
            <div class="prpanel">
                <div class="pr">
                    <button class="pr1">NARAKA</button>
                    <button class="pr2">PUBG</button>
                    <button class="pr3">APEX LEGEND</button>
                    <button class="pr4">ELDEN RING</button>
                    <button class="pr5">FORZA</button>
                    <button class="pr6">GTA V</button>
                </div>
                <div class="TBpr">
                                          
                        <ul v-if="products.length" class="pr7"> 
                        <li v-for="product in products" :key="product.id">                         
                            <div class="card"> 
                            <img :src="product.image"/>
                            <div class="card-content">
                                <h3>{{ product.name }}</h3>
                                <p>{{ product.detail }}</p>
                                <routerLink :to="`/productdetail/${product.id}`" class="btn-buy">BUY NOW</routerLink>
                            </div>
                            </div>
                        </li>
                        </ul>
                    
                
            </div>
            </div>
        </div>
    </div>
    <footer><div class="footer"></div></footer>
    
</header>
</template>
<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const products = ref([]);

    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products'); // URL ของ API ของคุณ
        products.value = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    onMounted(fetchProducts);

    return {
      products
    };
  }
};
</script>
<style>
a {text-decoration: none;}
header {
    width: 100vw;
    height: 100vh;
    background-position: bottom;
    background-size: cover;
}
.TBadvert {
    display: flex;
    justify-content: center;
    align-items: center;
}
.TBpr {
    display: flex;
    justify-content: center;
    min-width: 90%;
    width: 100%;
    flex-wrap: wrap;
    height: auto; 
      
}
.body {  
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #191919;   
}
.body2 {
    background: #191919;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: auto;
    
}
.footer {
    height: auto;
    background:#191919;
}
.prpanel {
    color: aqua;
    width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    background: #191919;
}
#font {
    display: flex;
    justify-content: center;
    font-size: 30px;
    padding: 20px;
}
.pr {
    background: #191919;
    display: flex;
    justify-content: center;
    min-width: 90%;
    flex-wrap: wrap; 
}
.pr1 {
    height: 50px;
    width: 150px;
    background: #323232;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
    border: 3px solid;
    border-color: #323232;
}
.pr2 {
    height: 50px;
    width: 150px;
    background: #323232;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
    border: 3px solid;
    border-color: #323232;
}
.pr3 {
    height: 50px;
    width: 150px;
    background: #323232;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
    border: 3px solid;
    border-color: #323232;
}
.pr4 {
    height: 50px;
    width: 150px;
    background: #323232;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
    border: 3px solid;
    border-color: #323232;
}
.pr5 {
    height: 50px;
    width: 150px;
    background: #323232;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
    border: 3px solid;
    border-color: #323232;
}
.pr6 {
    height: 50px;
    width: 150px;
    background: #323232;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
    border: 3px solid;
    border-color: #323232;
}
.pr7 {
    
    display: flex;
    justify-content: center;
    flex-wrap: wrap; 
    
}

.card {
    width: 190px;
    height: 410px;
    background-color: rgb(33, 32, 32);
    border-radius: 8px;
    overflow: hidden;
    margin: 20px;

}

.card img {
    width: 100%;
    height: 250px;
}

.card-content {
    padding: 16px;

}

.card-content h3 {
    font-size: 25px;
    margin-bottom: 8px;
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    

}

.card-content p {
    color: rgb(255, 255, 255);
    font-size: 15px;
    line-height: 1.3;
}

.card-content .btn-buy {
    display: inline-block;
    padding: 8px 16px;
    background-color:  rgb(33, 32, 32);
    text-decoration: none;
    border-radius: 4px;
    margin-top: 16px;
    color: aqua;
    border: 1px solid;
    border-color: aqua;
    color: white;
}

.card-content .btn-buy:hover {
    background-color: aqua;
    color: black;
}


.pr1:hover {
    border: solid;
    border-color: aqua;
    background-color: transparent;
    color: aqua;
    transition: all .4s ease-in-out;
}

.pr2:hover {
    border: solid;
    border-color: aqua;
    background-color: transparent;
    color: aqua;
    transition: all .4s ease-in-out;
}

.pr3:hover {
    border: solid;
    border-color: aqua;
    background-color: transparent;
    color: aqua;
    transition: all .4s ease-in-out;
}

.pr4:hover {
    border: solid;
    border-color: aqua;
    background-color: transparent;
    color: aqua;
    transition: all .4s ease-in-out;
}

.pr5:hover {
    border: solid;
    border-color: aqua;
    background-color: transparent;
    color: aqua;
    transition: all .4s ease-in-out;
}

.pr6:hover {
    border: solid;
    border-color: aqua;
    background-color: transparent;
    color: aqua;
    transition: all .4s ease-in-out;
}

.card:hover {
    border: 1px solid;
    border-color: aqua;
    background-color: transparent;
    color: aqua;
}






</style>