<template>
    <div>
        <navbar/>
        <navbar2/>
        <title></title>
        <div class="flex justify-center">
            <div  class="TBDT">
               <div class="DT w-[70%]  flex ">
                    <div class="tbimg1 w-[750px] h-[400px]  overflow-hidden">
                        <img class="w-[750px] " :src="product.image"/>
                    </div>
                    <div class="tbimg2 w-[750px]    mt-[20px] flex">
                        <div class="w-[375px] h-[210px] ] overflow-hidden mr-[20px]">
                            <img class="w-[1000px] " :src="product.image"/>
                        </div>
                        <div class="w-[375px] h-[210px]  overflow-hidden">
                            <img class="w-[1000px] " :src="product.image"/>
                        </div>
                    </div>
                    <div class=" w-[98.4%] mt-[20px]">
                        <div class="DTPD flex   border-b-2 border-[#ffffff81] text-[#ffff]">
                            รายละเอียดสินค้า
                        </div>
                        <div class="bg-transparent px-2 text-[#ffffff98]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis soluta sunt culpa excepturi pariatur, natus rem ratione facere quidem dignissimos, molestias atque dolore, veniam quos? Nihil adipisci modi doloremque ipsa.
                        </div>
                    </div>
               </div>
               <div class="DT w-[30%]     ">
                <div class="flex w-[100%] flex-col justify-center   ">
                    <div class="">
                        <img class="w-[1000px] " :src="product.image"/>
                        <div class="bg-transparent px-2 border-b-2 border-[#ffffff81] text-[#ffffff98]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis soluta sunt culpa excepturi pariatur, natus rem ratione facere quidem dignissimos, molestias atque dolore, veniam quos? Nihil adipisci modi doloremque ipsa.
                        </div>
                    </div>
                    <div class="TBpay mt-[10px] flex flex-col items-center ">
                        <a class="text-[30px] text-[#ffffff98]">
                            {{ product.name }}
                        </a>
                        <a class="text-[25px] text-[#ffffff98]">
                            {{ product.price }}
                        </a>
                        <button class="border-2 p-[10px] mt-[10px] px-20 rounded-[5px] text-[#ffffff98]">เพิ่มลงตะกร้า</button>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'


const apiUrl = import.meta.env.VITE_API
const product = ref({})
const route = useRoute()

const productdetail = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API}/${route.params.id}`)
        product.value = response.data
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}

onMounted(() => {
    console.log(route.params.id)  // ตรวจสอบค่าของ route.params.id
    productdetail()
})

</script>


<style> 
.DT {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
.TBDT {
    width: 60%;
    display: flex;
}

</style>