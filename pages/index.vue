<template>
    <div class="body">
        <navbar />
        <navdar2 />
        <advert />
        
        <div class="body2">
            <div class="prpanel">

                <div class="pr">
                    <button class="pr1">ROV</button>
                    <button class="pr2">PUBG</button>
                    <button class="pr3">VALORANT</button>
                    <button class="pr4">ELDER RING</button>
                    <button class="pr5">FORZA</button>
                    <button class="pr6">DOTA</button>
                    
                    <div class="pr7">
                        <infor/>
                    </div>
                    <div class="pr8"><infor/></div>
                    <div class="pr9"><infor/></div>
                    <div class="pr10"><infor/></div>
                </div>
            </div>
        </div>
        <div class="foot"></div>
    </div>
</template>
<style>

.body {
    display: flex;
    flex-direction: column;
    background: #1d1d1d;
}
.body2 {
    display: flex;
    justify-content: center;
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
    background: #1d1d1d;
    
}
.pr1 {
    height: 50px;
    width: 150px;
    background: #4e4e4e;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    
}
.pr2 {
    height: 50px;
    width: 150px;
    background: #4e4e4e;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.pr3 {
    height: 50px;
    width: 150px;
    background: #4e4e4e;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.pr4 {
    height: 50px;
    width: 150px;
    background: #4e4e4e;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.pr5 {
    height: 50px;
    width: 150px;
    background: #4e4e4e;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.pr6 {
    height: 50px;
    width: 150px;
    background: #4e4e4e;
    padding-inline: 10px;
    margin: 20px;
    border-radius: 5px;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.pr7 {
    height: 300px;
    width: 240px;
   
    padding-inline: 10px;
    display: flex;
    justify-items: center;
}
.pr8 {
    height: 300px;
    width: 240px;
   
    padding-inline: 10px;
    display: flex;
    justify-items: center;
}
.pr9 {
    height: 300px;
    width: 240px;
   
    padding-inline: 10px;
    display: flex;
    justify-items: center;
}
.pr10 {
    height: 300px;
    width: 240px;
   
    padding-inline: 10px;
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



</style>