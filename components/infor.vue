<template>
    <div class="card">
        <div class="PT"><img src="public\Eldenring.jpg" id="EDL"></div>
        <div class="BGG">
            <div class="NM">Elden Ring</div>
            <div class="BT"> <addID /> </div>
        </div>
    </div>
</template>
<style>
.BGG {
    background: #53535327;
    height: 100px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
#EDL {
    height: 200px;
    
}
.BT {
    
    margin-top: 15px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.NM {
    margin-left: 10px;
    margin-top: 5px;
    font-size: 20px;
    color: white;
  
}
.PT {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 200px;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
}
.card {
    height: 300px;
    width: 240px;
    border-radius:20px;
    display: flex;
    flex-direction: column;
    
}


</style>