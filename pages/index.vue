<template>
<div class="BGH">
    <navbar />
    <navdar2 />
    <div class="TBadvert">
        <advert />  
    </div>
    <div class="body">
        <div class="body2">
            <div class="prpanel">
                <div class="pr">
                    <button class="pr1">ROV</button>
                    <button class="pr2">PUBG</button>
                    <button class="pr3">VALORANT</button>
                    <button class="pr4">ELDER RING</button>
                    <button class="pr5">FORZA</button>
                    <button class="pr6">DOTA</button>
                </div>
                <div class="TBpr">
                    <div class="pr7"><infor/></div>
                    <div class="pr8"><infor/></div>
                    <div class="pr9"><infor/></div>
                    <div class="pr10"><infor/></div>
                </div>
            </div>
        </div>
        <div class="foot"></div>
    </div>
</div>
</template>
<style scoped>
div {
    font-family: "Noto Sans Thai", sans-serif;  
    font-optical-sizing: auto;
    font-weight: 100px;
    font-style: normal;
    font-variation-settings:"wdth" 87.5;
}
</style>
<style>
.BGH {
    background: #1d1d1d; 
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
     
}
.body {  
    display: flex;
    flex-direction: column;
    
}
.body2 {
    
    display: flex;
    justify-content: center;
    width: 100%;
}
.foot {
    height: 100px;
    background: #000;
}
.prpanel {
    color: aqua;
    width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
}
#font {
    display: flex;
    justify-content: center;
    font-size: 30px;
    padding: 20px;
}
.pr {
    display: flex;
    justify-content: center;
    min-width: 90%;
    flex-wrap: wrap; 
}
.pr1 {
    height: 50px;
    width: 150px;
    background: #4e4e4e;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
}
.pr2 {
    height: 50px;
    width: 150px;
    background: #4e4e4e;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
}
.pr3 {
    height: 50px;
    width: 150px;
    background: #4e4e4e;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
}
.pr4 {
    height: 50px;
    width: 150px;
    background: #4e4e4e;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
}
.pr5 {
    height: 50px;
    width: 150px;
    background: #4e4e4e;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
}
.pr6 {
    height: 50px;
    width: 150px;
    background: #4e4e4e;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
}
.pr7 {
    height: 350px;
    width: 240px;
    
    margin-right: 10px;
    display: flex;
    justify-items: center;
}
.pr8 {
    height: 300px;
    width: 240px;
   
    margin-right: 10px;
    display: flex;
    justify-items: center;
}
.pr9 {
    height: 300px;
    width: 240px;
   
    margin-right: 10px;
    display: flex;
    justify-items: center;
}
.pr10 {
    height: 300px;
    width: 240px;
   
    margin-right: 10px;
    display: flex;
    justify-items: center;
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

.pr7:hover {
    border:0.2px solid;
    border-color: aqua;
    background-color: transparent;
    color: aqua;
    
}


.pr8:hover {
    border:0.2px solid;
    border-color: aqua;
    background-color: transparent;
    color: aqua;
    
}

.pr9:hover {
    border:0.2px solid;
    border-color: aqua;
    background-color: transparent;
    color: aqua;
    
}

.pr10:hover {
    border:0.2px solid;
    border-color: aqua;
    background-color: transparent;
    color: aqua;
    
}




</style>