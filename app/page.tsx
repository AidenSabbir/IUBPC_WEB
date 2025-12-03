import { roboto } from "@/lib/font";
import _Iubpc from "./_Iubpc";
import _iubpc_logo from "./_iubpc_logo";
import { Ripple } from "@/components/Ripple";
import { Meteors } from "@/components/ui/Metteors";
export default function Home() {

  return (
    <div className={`${roboto.className} h-screen w-full`}>
      <Ripple />
      <Meteors />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col">
        <_iubpc_logo className="w-40" />
        <_Iubpc className="w-40" />
      </div>
    </div>
  );
}
