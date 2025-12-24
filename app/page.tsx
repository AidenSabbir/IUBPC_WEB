import { roboto } from "@/lib/font";
import { cn } from "@/lib/utils";
import _iubpc_logo from "@/app/_iubpc_logo";
export default function Home() {
  return (
    <div className={cn(roboto.className, "h-screen w-full relative flex items-center justify-evenly")}>
      <_iubpc_logo className="w-10" />
    </div>

  );
}
