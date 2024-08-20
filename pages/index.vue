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
                    <div class="pr11"><infor/></div>
                    <div class="pr12"><infor/></div>
                    <div class="pr13"><infor/></div>
                    <div class="pr14"><infor/></div>
                    <div class="pr15"><infor/></div>
                    <div class="pr16"><infor/></div>
                </div>
            </div>
        </div>
    </div>
    <footer><div class="footer"></div></footer>
    
</header>
</template>
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #ff9b9b;   
}
.body2 {
    background: #ff0000;
    display: flex;
    justify-content: center;
    width: 100vw;
    
}
.footer {
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
    background: #d0ff00;
}
#font {
    display: flex;
    justify-content: center;
    font-size: 30px;
    padding: 20px;
}
.pr {
    background: #00ff15;
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
    height: 350px;
    width: 240px;
    margin-right: 10px;
    display: flex;
    justify-items: center;
}
.pr8 {
    height: 350px;
    width: 240px;
    
    margin-right: 10px;
    display: flex;
    justify-items: center;
}
.pr9 {
    height: 350px;
    width: 240px;
    
    margin-right: 10px;
    display: flex;
    justify-items: center;
}
.pr10 {
    height: 350px;
    width: 240px;
    
    margin-right: 10px;
    display: flex;
    justify-items: center;
}

.pr11 {
    height: 350px;
    width: 240px;
    margin-right: 10px;
    display: flex;
    justify-items: center;
}

.pr12 {
    height: 350px;
    width: 240px;
    margin-right: 10px;
    display: flex;
    justify-items: center;
    margin-top: 20px;
}

.pr13 {
    height: 350px;
    width: 240px;
    margin-right: 10px;
    display: flex;
    justify-items: center;
    margin-top: 20px;
}

.pr14 {
    height: 350px;
    width: 240px;
    margin-right: 10px;
    display: flex;
    justify-items: center;
    margin-top: 20px;
}

.pr15 {
    height: 350px;
    width: 240px;
    margin-right: 10px;
    display: flex;
    justify-items: center;
    margin-top: 20px;
}

.pr16 {
    height: 350px;
    width: 240px;
    margin-right: 10px;
    display: flex;
    justify-items: center;
    margin-top: 20px;
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






</style>