import { Shoppic } from "../image";



export function Shop(){
return(
<div className="relative w-full">
      <img src={Shoppic} alt="shoppic" className="w-full h-auto" />
      <div className="absolute inset-0  flex flex-col md:items-center justify-center md:items-start">
        <p className="text-primary2 mt-96  text-2xl md:text-4xl font-bold drop-shadow-lg text-center">
          Click on Shop to start Shopping ...
        </p>
        <p className="text-primary2  text-2xl md:text-4xl font-bold drop-shadow-lg text-center">Great Offers available!!!</p>
      </div>
    </div>
    )
}