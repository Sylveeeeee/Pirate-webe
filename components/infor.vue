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
    width: 240px;    
    height: 350px;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 2px black;  
    background: #53535327;
}

.card:hover {
    border: 0.5px solid;
    border-color: aqua;
    background-color: transparent;
    color: aqua;
    border-radius: 2px;
   
    
}


</style>