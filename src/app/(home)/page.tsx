"use client";

import { useState, useEffect } from "react";

import { RiSendPlaneFill } from "react-icons/ri";

import usePost from "@/service/post/usePost";

import { Button } from "@/components/ui/button";


import { FaRegLightbulb } from "react-icons/fa";
import { CgPen } from "react-icons/cg";

import { FaQuestion } from "react-icons/fa6";
import { LuBookMinus } from "react-icons/lu";

import { TbLoader2 } from "react-icons/tb";
import {
  Avatar,
  AvatarFallback,
  
} from "@/components/ui/avatar"
export default function Home() {

  const[text, setText] = useState<string>("");
  const[audioUrl, setAudioUrl] = useState<string>("");
  const[listAudio, setListAudio] = useState<string[]>([]);
  const[reply, setReply] = useState<string>("");
  const[loader, setLoader] = useState<boolean>(false);
  // const sendData = () => {

  //   const data = {
  //     text: text,
  //     model: "davron",
  //     mood: "neutral",
  //     blocking: "true",
  //     webhook_notification_url: ""
  //   }

  //   usePost.getData(data).then((res) => {
  //       console.log(res.data.result.url)
  //       setAudioUrl(res.data.result.url)
  //       setListAudio((prevList) => [...prevList, res.data.result.url]);
  //       setText(" ");
  //   }).catch((err: any) => {
  //     console.log(err)
  //   })
  // }

  const getData = () => {
    setLoader(true);
    setTimeout(() => {
      const data = `Huquqiy davlat – insoniyatning ming yillar mobaynidagi mashaqqatli mehnati evaziga shakllangan taraqqiyot g‘oyasi bo‘lib, huquq normalariga, insonning qadr-qimmati, erkinligi va huquqlarini himoya qilishga qaratirilgan fundamental huquqiy prinsiplariga so‘zsiz rioya qiladigan, demokratik prinsiplar asosida qabul qilingan qonunlar oldida barcha teng va hisobdor bo‘lgan, hech kim qonundan ustun turmaydigan davlatdir Bugun Yangi O‘zbekiston insonparvar, adolatli, erkin va xalqchil bo‘lgan huquqiy davlat qurish yo‘lida odimlamoqda O‘zbekiston Respublikasi Prezidenti ShMirziyoyev 2022-yil 20-iyunda Konstitutsiyaviy komissiya aʼzolari bilan uchrashuvda “Faqat huquqiy davlat sharoitidagina insonning hayoti, erkinligi, shaʼni, qadr-qimmatini to‘liq taʼminlash, tom maʼnoda xalqparvar boshqaruv tizimini shakllantirish mumkin”, deb taʼkidlagan edi Shu maqsadda, yangi tahrirdagi Konstitutsiyamizning 1-moddasida “O‘zbekiston – huquqiy davlat” degan tamoyil mustahkamlandi Konstitutsiyada O‘zbekistonni huquqiy davlat ekanligini alohida belgilash – davlat o‘z faoliyatini, jamiyat va fuqarolarning yashash tarzini faqat Konstitutsiya va qonunlar asosidagina amalga oshirilishini taʼminlaydi Pirovardida, davlat organlari va mansabdor shaxslar qonun ustuvorligi asosida xalq manfaatlari uchun ishlaydi, unga xizmat qiladi Yangilangan Konstitutsiyamizning boshqa normalarida ham huquqiy davlat prinsipini ro‘yobga chiqarishga qaratilgan mexanizmlar va kafolatlar mustahkamlandi Birinchidan, davlat faoliyati qonun ustuvorligi, qonuniylik prinsipi asosida amalga oshirilishini taʼminlash bo‘yicha Konstitutsiyaning oliy yuridik kuchga egaligi hamda uning to‘g‘ridan-to‘g‘ri amal qilishi belgilandi Natijada davlat organlari, shu jumladan, sudlar o‘z faoliyatida Konstitutsiyaga to‘g‘ridan-to‘g‘ri murojaat qilgan holda qarorlar qabul qiladi Ikkinchidan, inson huquq va erkinliklari xalqaro huquq va Konstitutsiya normalariga muvofiq kafolatlanmoqda, ular qonunchilik va davlat organlari faoliyatining mazmunini belgilashi mustahkamlandi Shuningdek, insonga nisbatan davlatning huquqiy taʼsir choralari qonunlarda nazarda tutilgan maqsadlarga erishish uchun yetarli va mutanosib bo‘lishi shartligi va inson bilan davlat organlarining o‘zaro munosabatlarida yuzaga keladigan qonunchilikdagi barcha qarama-qarshiliklar va noaniqliklar inson foydasiga talqin qilinishi mustahkamlandi Fransiya, Germaniya, Ispaniya, Turkiya kabi davlatlar konstitutsiyalarida o‘zini huquqiy davlat deb belgilagan Mazkur yangilik barchaning qonun oldida tengligini va qonundan xech kim ustun emasligini taʼminlash, insonlar ongiga qonunlarga hurmat va itoat etib yashash lozimligini singdirish, umuman olganda davlat organlarining xalqqa xizmat qilishi uchun mustahkam huquqiy asos bo‘ladi Shuningdek, O‘zbekistonning “Huquq ustuvorligi indeksi”, “Jahon mamlakatlari demokratiyasi indeksi” kabi xalqaro nufuzli reytinglarda o‘rnini yaxshilanishiga imkon beradi`;
      setReply(data);
      setLoader(false)
    }, 5000);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // sendData();
      getData()
    }
  };
  

  return (
   <>
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center justify-center">
          <div className="p-4">
          {
            // audioUrl ? (
            //   <ul className="flex flex-col gap-y-4">
            //     {
            //       listAudio.map((item) => (
            //           <li>
            //             <audio controls>
            //               <source src={item} type="audio/mp3" />
            //             </audio>
            //           </li>
                  
            //       ))
            //     }
            //   </ul>
            loader ? (
              <p className="flex items-center justify-center pt-[200px]">
                <TbLoader2   className="animate-spin text-[40px]"/>
              </p>
            ): (
              reply ? (
                <div className="flex flex-col items-start">
                    <div className="mb-5">
                        <div className="flex gap-x-4 justify-center">
                          <Avatar>
                            <AvatarFallback>HS</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-extrabold text-lg mb-2">You</p>
                            <p className="text-justify mb-5">{text}</p>
                          </div>
                        </div>
                    </div>
                    <div>
                       <div className="flex gap-x-4 justify-center">
                          <Avatar>
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-extrabold text-lg mb-2">ChatBot</p>
                            <p className="text-justify mb-5">{reply}</p>
                          </div>
                        </div>
                    </div>
                   
                </div>
                
              ): (
                <>
                  <div >
                     <div className="text-[50px] font-bold mb-24">
                     <h1 style={{
                        background: 'linear-gradient(135deg, #f66a4b 15.87%, #a24ae7 60.65%, #4859f3 89.14%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}>                  
                          Salom, men huquqshunos AI!
                        </h1>
                        <h2 className="text-gray-300">Qanday yordam bera olaman?</h2>
                     </div>
  
                     <div className="flex items-start justify-between gap-x-2">
                        <div className="w-[200px] h-[200px] bg-red-300 bg-[#F0F4F9] dark:bg-transparent dark:border dark:border-gray-400 hover:bg-[#edeff1] rounded-[12px] relative cursor-pointer border border-blue-200">
                          <p className="absolute top-4 left-4 text-sm">Ko'rsatmalar</p>
                          <span className="bg-white w-[40px] h-[40px] block rounded-full flex items-center justify-center absolute right-3 bottom-4 dark:bg-transparent dark:border dark:border-gray-400">  
                            <FaRegLightbulb className="text-2xl" />
                          </span>
                        </div>
  
                        <div className="w-[200px] h-[200px] bg-red-300 bg-[#F0F4F9] dark:bg-transparent dark:border dark:border-gray-400 hover:bg-[#edeff1] rounded-[12px] relative cursor-pointer border border-blue-200">
                          <p className="absolute top-4 left-4 text-sm">Fan sohalari</p>
                          <span className="bg-white w-[40px] h-[40px] block rounded-full flex items-center justify-center absolute right-3 bottom-4 dark:bg-transparent dark:border dark:border-gray-400">  
                            <LuBookMinus className="text-2xl" />
                          </span>
                        </div>
                        <div className="w-[200px] h-[200px] bg-red-300 bg-[#F0F4F9] dark:bg-transparent dark:border dark:border-gray-400 hover:bg-[#edeff1] rounded-[12px] relative cursor-pointer border border-blue-200">
                          <p className="absolute top-4 left-4 text-sm">YouTube kanalini qanday rivojlantirish kerak</p>
                          <span className="bg-white w-[40px] h-[40px] block rounded-full flex items-center justify-center absolute right-3 bottom-4 dark:bg-transparent dark:border dark:border-gray-400">  
                            <CgPen className="text-2xl" />
                          </span>
                        </div>
                        <div className="w-[200px] h-[200px] bg-red-300 bg-[#F0F4F9] dark:bg-transparent dark:border dark:border-gray-400 hover:bg-[#edeff1] rounded-[12px] relative cursor-pointer border border-blue-200">
                          <p className="absolute top-4 left-4 text-sm">Savollar ro'yxati</p>
                          <span className="bg-white w-[40px] h-[40px] block rounded-full flex items-center justify-center absolute right-3 bottom-4 dark:bg-transparent dark:border dark:border-gray-400">  
                            <FaQuestion className="text-2xl" />
                          </span>
                        </div>
                     </div>
                  </div>
                </>
              )
            )
          
          }
        
          </div>
        </div>

        <div className="flex items-center justify-center pb-4">
        
          <div className="w-[900px] flex items-center justify-center border border-blue-200 px-3 rounded-[30px]">
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown}  placeholder="Qidirish..." className="placeholder:text-md p-4 py-4 focus:ring-0 appearance-none outline-0 border-none text-lg w-full bg-transparent"/>
              <Button onClick={() => getData()} className="text-lg dark:bg-transparent dark:border dark:border-gray-400 dark:text-white py-6 rounded-full" title="Send">
                <RiSendPlaneFill />
              </Button>
          </div>

        </div>
      </div>
   </>
  );
}
