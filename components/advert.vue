<template>
    <div class="ad">
        <div class="ad1">
            <img src="public\dota2.jpg" id="dota2">
        </div>
        <div class="ad2">
            <img src="public\Eldenring.jpg" id="Eldenring">
        </div>
        <div class="ad3">
            <img src="public\forza5.jpg" id="forza5">
        </div>
        <div class="ad4">
            <img src="public\gta.jpg" id="gta">
        </div>
        <div class="ad5">
            <img src="public\cod2.jpg" id="cod2">
        </div>
    </div>
</template>
<style>
#dota2 {
    height: 400px;
}
#forza5 {
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
    
}

.ad1 {
    height: 400px;
    animation: slide 16s infinite;
}

.ad2 {
    height: 400px;
    animation: slide 16s infinite;
}

.ad3 {
    height: 400px;
    animation: slide 16s infinite;
}

.ad4 {
    height: 400px;
    animation: slide 16s infinite;
    
}
.ad5 {
    height: 400px;
    animation: slide 16s infinite;
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





