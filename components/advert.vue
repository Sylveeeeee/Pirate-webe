<template>
    <div class="TBAD">
        <div class="TBad">
            <div class="ad">
                <div class="ad1">
                    <img src="public\dota2.jpg" id="dota2">
                </div>
                <div class="ad2">
                    <img src="public\Eldenring.jpg" id="Eldenring">
                </div>
                <div class="ad3">
                    <img src="public\forza.jpg" id="forza">
                </div>
                <div class="ad4">
                    <img src="public\gta.jpg" id="gta">
                </div>
                <div class="ad5">
                    <img src="public\cod2.jpg" id="cod2">
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.TBAD {
    width: 100%;
    overflow: hidden;
}
.TBad {
    width: 85vmin; 
    
}
#dota2 {
    height: 400px;
}
#forza {
    height: 400px;
}
#Eldenring {
    height: 400px;
}
#gta {
    height: 400px;
}
#cod2 {
    height: 400PX;
}
.ad {
    height: 400px;
    margin-block: 10px;
    display: flex;
    align-items: center;
    animation: slide 16s infinite; 
}
.ad1 {
    margin-right: 25px;
    height: 400px; 
}
.ad2 {
    margin-right: 25px;
    height: 400px; 
}
.ad3 {
    margin-right: 25px;
    height: 400px;  
}
.ad4 {
    margin-right: 25px;
    height: 400px; 
}
.ad5 {
    margin-right: 25px;
    height: 400px; 
}
@keyframes slide{
    0%{
        transform: translateX(0);
    }
    25%{
        transform: translateX(0);
    }
    30% {
        transform: translateX(-100%);
    }
    50% {
        transform: translateX(-100%);
    }
    55% {
        transform: translateX(-200%);
    }
    75% {
        transform: translateX(-200%);
    }
    80% {
        transform: translateX(-300%);
    }
    100% {
        transform: translateX(-300%);
    }
}
</style>





