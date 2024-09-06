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
    height: 150px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
#EDL {
    height: 300px;  
}
.BT {
    padding-bottom: 5px;
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
    height: 300px;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
}
.card {
    height: 350px;
    width: 240px;
    border-radius:5px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    
}

.card:hover {
    background-color: transparent;
    border: 1px solid;
    border-color: aqua;
}


</style>