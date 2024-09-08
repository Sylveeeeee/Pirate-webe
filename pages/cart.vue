<<template>
    <navbar/>
    <navbar2/>
    <div class="CA">
        <div class="cartTB">
            <a id="CTT">
                CART
            </a>
            <div class="TBP_F">
                <div class="TBP">
                    <div class="TL">รายการ</div>
                    <div class="PPP">
                        <a id="P1">สินค้า</a>
                        <a id="P2">ราคา</a>
                        <a id="P3">จำนวน</a>
                    </div>
                </div>
                <div class="PAY">
                    <div class="CRP">เลือกช่องทางชำระเงิน</div>
                </div>
            </div>
        </div>
    </div>
</template>>
<style>
.CRP {
    color: aqua;
    font-size: 30px;
}
.PAY {
    width: 40%;
    background: #444444;
    padding: 20px;
}
#P3 {
    font-size: 20px;
    color: #ffffff;
}
#P2 {
    font-size: 20px;
    margin-right: 150px;
    color: #ffffff;
}
#P1 {
    font-size: 20px;
    margin-right: 400px;
    color: #ffffff;
}
.PPP {
    margin-top: 20px;
    border-bottom: #b1b1b1 solid 2px;
    padding-inline: 40px;
    padding-bottom: 10px;
}
.TL {
    padding-inline: 40px;
    color: aqua;
    font-size: 30px;
    
}
.TBP {
    
    width: 60%;
    flex-direction: column;
    display: flex;
    margin-right: 20px;
}
.cartTB{
    display: flex;

    align-items: center;
    background: #1d1d1d;
    flex-direction: column;
    
}
#CTT {
    font-size: 40px;
    color: aqua;
    margin-top: 50px;
}
.TBP_F {
    width: 70%;
    margin-top: 50px;
    display: flex;
}
body {
    background: #1d1d1d;
}
</style>