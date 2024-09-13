import { defineEventHandler, createError } from 'h3';

export default defineEventHandler(async (event) => {
  // เข้าถึง params ของ URL โดยใช้ event.node
  const id = event.context.params?.id as string;
  
  // ข้อมูลสินค้า
  const products = [
    { id: 1, name: 'Naraka', price: 5200, image: '/naraka2.jpg', image2: '/dnrk.jpg', image3: '/dnrk2.jpg',imageC: '/nrk.jpg',detail: 'Red Skins : 9 สกินอาวุธทองหลัก + ชุดทองสวยๆครบ มีอันติแปรงร่าง 3 ตัว : Tianhai / Yueshan / FerriaShen' },
    { id: 2, name: 'Digimon', price: 600, image: '/dddm.jpg', image2: '/dgd.jpg', image3: '/dgd2.jpg',imageC: '/dg.jpg',detail: 'Full Digimon Max Level : 100+' },
    { id: 3, name: 'Wukong', price: 1400, image: '/wkk.jpg', image2: '/dwk.jpg', image3: '/dwk2.jpg',imageC: '/wk.jpg',detail: '  เป็นเกมแอ็กชันผจญภัยปี 2024 ที่พัฒนาและจัดจำหน่ายโดยบริษัทเกมไซแอนซ์ ตัวเกมได้รับแรงบันดาลใจมาจากวรรณกรรมจีนคลาสสิกเรื่องไซอิ๋ว โดยมีตัวละครหลักเป็นลิงเผือกที่ได้รับแรงบันดาลใจมาจากตัวละครซุน หงอคง ' },
    { id: 4, name: 'APEX', price: 4800, image: '/apex.jpg', image2: '/dapx.jpg', image3: '/dapx2.jpg',imageC: '/apx.jpg',detail: 'Level : 210 Gold item : 155+ ปืนหลักครบ สกินทวิต Horizon ไม่มีขายเเล้ว  💯' },
    { id: 5, name: 'Green hell', price: 300, image: '/grh.jpg', image2: '/dgrh.jpg', image3: '/dgrh2.jpg',imageC: '/gh.jpg',detail: 'เข้าสู่โลกโอเพนเวิลด์ที่จำลองการเอาตัวรอดจากสภาพแวดล้อมสุดขั้วในป่าแอมะซอนที่ไม่เคยมีผู้ใดก้าวเข้าไป ใช้เทคนิคการเอาชีวิตรอดจากชีวิตจริงมาประดิษฐ์ ออกล่า ต่อสู้ และเก็บทรัพยากร สร้างที่หลบภัยชั่วคราวหรือสร้างป้อมปราการ รักษาบาดแผลและรักษาสภาพจิตใจของคุณให้ดี ไม่ว่าจะตามลำพังหรือร่วมมือกับเพื่อนก็ตาม' },
    { id: 6, name: 'Rainbow 6', price: 1000, image: '/rain6.jpg', image2: '/dr6.jpg', image3: '/dr62.jpg',imageC: '/r6.jpg',detail: 'อัลติเมทเอดิชั่น ประกอบด้วย เกมตัวเต็ม, เจ้าหน้าที่ 50 รายจาก ปี 1 ถึง ปี 8 และแพ็คของตกแต่ง Disruptor "หนึ่งในเกมยิงมุมมองบุคคลที่หนึ่งที่ดีที่สุดเท่าที่เคยมีมา" —GameSpot เรนโบว์ ซิกซ์ ซีจ เป็นเกมยิงแนวแทคติกแบบทีมชั้นยอดและสมจริง ที่การวางแผนและปฏิบัติการที่เหนือชั้นนำไปสู่ชัยชนะ' },
    { id: 7, name: 'Grand Chase', price: 300, image: '/grc.jpg', image2: '/dgc.jpg', image3: '/gc2.jpg',imageC: '/gc.jpg',detail: 'Grand Chase is a free side-scrolling online action RPG with anime inspired graphics. Enjoy exciting adventures in dungeons and PvP with unique characters.' },
    { id: 8, name: 'Gundam 4', price: 1300, image: '/gu4.jpg', image2: '/dg4.jpg', image3: '/dg42.jpg',imageC: '/g4.jpg',detail: 'ผลงานล่าสุดจากซีรีส์ "GUNDAM BREAKER" ต่อสู้ด้วย "กันพลา" ที่สามารถปรับแต่งชิ้นส่วนได้ถึง 11 ส่วน และติดตั้งอาวุธด้านซ้ายและขวาที่แตกต่างกันได้เป็นครั้งแรก พร้อมแอ็กชันที่วิวัฒนาการขึ้นอีกขั้น และ "โหมดโมเดลจำลอง" ซึ่งผู้เล่นสามารถติดตั้งพื้นหลังและเอฟเฟกต์เพื่อสร้างและจัดแสดง "กันพลา" ของคุณเอง!' },
    { id: 9, name: 'DragonBall Z', price: 300, image: '/draz.jpg', image2: '/dgz.jpg', image3: '/dgz2.jpg',imageC: '/dz.jpg',detail: 'สนุกไปกับเรื่องราวของโกคูและเหล่ายอดนักสู้ Z ภายในโลกของ DRAGON BALL Z: KAKAROT! ที่ซึ่งนอกจากการต่อสู้น่าตื่นตาแล้ว ยังมีกิจกรรมอื่นอย่างการตกปลา ทำอาหาร และการฝึกวิชากับโกคูและนักสู้คนอื่นๆ ขณะออกเดินทางผจญภัยไปในจักรวาล DRAGON BALL Z!' },
    { id: 10, name: 'Ark Survival', price: 300, image: '/survival.jpg', image2: '/dark.jpg', image3: '/dark2.jpg',imageC: '/ark.jpg',detail: 'ARK is reimagined from the ground-up into the next-generation of video game technology with Unreal Engine 5! Form a tribe, tame & breed hundreds of unique dinosaurs and primeval creatures, explore, craft, build, and fight your way to the top of the food-chain. Your new world awaits!' },
  ];

  // ค้นหาสินค้าตาม ID
  const product = products.find(p => p.id === parseInt(id));

  // หากไม่พบสินค้าให้แสดงข้อผิดพลาด
  if (!product) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' });
  }

  return product;
});
