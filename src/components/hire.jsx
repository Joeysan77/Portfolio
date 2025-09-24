import {FaEnvelope , FaWhatsapp } from 'react-icons/fa'

export function Hire() {
    return (
        <div class="mt-[7rem] w-full font-semibold">
            <div>
                <p class="text-[#0583f2] text-4xl inline">Expert Front-End Developer</p><p class="text-black text-4xl inline ml-1">& DevOps Engineer</p>
                <p class="text-md text-[rgb(0,0,0,0.4)] mt-5 w-[90%] ml-[5%] font-medium text-break text-center">I build high-performance, scalable, and secure web applications that drive business growth. Let's transform your vision into a digital reality.</p>
            </div>
            
            <div class=" mt-7 w-[90%] ml-[5%] flex justify-around gap-2 ">
                <button class="shadow-md text-white bg-[#0583f2] flex p-2 rounded-lg hover:-translate-y-1 hover:shadow-lg transition">
                    <FaEnvelope size={20} class=" m-0 p-0 mr-2 align-middle inline" />
                    <p class="align-middle inline m-0 p-0">Start a Conversation</p>
                </button>
                   
                <button class="bg-white text-[#0583f2] flex  p-2 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition">
                     <FaWhatsapp class="mr-2 text-xl"/> 
                    <p>Let's Chat</p>
                </button>
            </div>
        </div>
    )
}