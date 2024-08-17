import Image from "next/image";
import { TracingBeamDemo } from "./beam";
import { GoogleGeminiEffectDemo } from "./geminieffect";
import { MacbookScrollDemo } from "./macbookscroll";
import { ThreeDCardDemo } from "./threadcard";
import { CanvasRevealEffectDemo } from "./reveal effect";
import { GlobeDemo } from "./globe";
import { BackgroundGradientDemo } from "./gradient";


export default function Home() {

  /* 
    <main className="">
      

     
    <MacbookScrollDemo></MacbookScrollDemo>
    <ThreeDCardDemo></ThreeDCardDemo>
    </main>
      
      
    </> **/
  return (
    <><div className="bg-black">
    <GlobeDemo></GlobeDemo>
      <MacbookScrollDemo></MacbookScrollDemo>
      <BackgroundGradientDemo></BackgroundGradientDemo>
      <br />
      <br />
      <div className="text-5xl text-center text-white">Main Components</div>
      <CanvasRevealEffectDemo></CanvasRevealEffectDemo>
      <div className="text-5xl text-center text-white">Our Model's training graphs</div>
      <br />
      <Image src="/training_graphs.png" width={1500} height={350} alt='training graphs'/>
      <br /> 
      <div className="text-5xl text-center text-white">All components</div> 
      <ThreeDCardDemo></ThreeDCardDemo>
      </div> 
      </>
  );
}
