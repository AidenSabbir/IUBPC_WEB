import { roboto } from "@/lib/font";
import _Iubpc from "./_Iubpc";
import _iubpc_logo from "./_iubpc_logo";
import Particles from "@/components/ui/Particel";
import { LayoutTextFlip } from "@/components/layout-text-flip";
import { TextGenerateEffect } from "@/components/text-generate-effect";
export default function Home() {
  const texts = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.';
  return (
    <div className={`${roboto.className} h-screen w-full relative flex items-center justify-evenly`}>
      <div className="h-fit  w-fit flex items-center justify-center flex-col absolute top-6 left-2 ">
        <_iubpc_logo className="w-8" />
        <_Iubpc className="w-8" />
      </div>
      <Particles
        disableRotation={true}
        moveParticlesOnHover={false}
        alphaParticles={true}
        particleSpread={20}
        pixelRatio={2}
        particleBaseSize={60}
        className="-z-1 fixed top-0 left-0"
      />
      <div className="h-screen w-fit text-center flex flex-col justify-center items-center ">
        <div className="flex  items-center justify-center">
          <LayoutTextFlip
            text={`Welcome to \u00a0`}
            words={["IUBPC", "Programming Club", "Coders"]}
          />
        </div>
        <TextGenerateEffect words={texts} />
      </div>

    </div>

  );
}
