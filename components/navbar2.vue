<template>
    <div class="nav2">
        <button @click="goToIndex">
            <div class="item">หน้าหลัก</div>
        </button>
        <button @click="goToHTB">
            <a id="howtobuy">วิธีซื้อ</a>           
        </button>
        <button @click="goToTopup">
            <a id="topup">เติมเงิน</a>
                      
        </button>
        <button @click="goToRandom">
            <a id="random">สุ่มรางวัล</a>
                       
        </button>
    </div>
</template>
<script>
export default {
  methods: {
    goToIndex() {
      this.$router.push('/');
    },
    goToHTB() {
      this.$router.push('/howtobuy');
    },
    goToTopup() {
      this.$router.push('/Topup');
    },
    goToRandom() {
      this.$router.push('/random');
    },
  }
}
</script>
<style>
.nav2 {
    background-color: rgb(0, 0, 0);
    height: 50px;
    width: auto;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
}
.item {
    height: 50px;
    margin: 30px;
    
    align-items: center;
    display: flex;
    padding-inline: 20px;
    
}
#howtobuy {
    height: 50px;
    margin: 30px;
    
    align-items: center;
    display: flex;
    padding-inline: 20px;
}
#topup {
    height: 50px;
    margin: 30px;
    
    align-items: center;
    display: flex;
    padding-inline: 20px;
}
#random {
    height: 50px;
    margin: 30px;
    
    align-items: center;
    display: flex;
    padding-inline: 20px;
}

.item:hover {
    background-color: rgba(0, 255, 255, 0.115);
    color:aqua;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
   

}

#howtobuy:hover {
    background-color: rgba(0, 255, 255, 0.115);
    color:aqua;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

}

#topup:hover {
    background-color:  rgba(0, 255, 255, 0.115);
    color:aqua;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

}

#random:hover {
    background-color: rgba(0, 255, 255, 0.115);
    color:aqua;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    

}


</style>