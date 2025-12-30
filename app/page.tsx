import { inter } from "@/lib/font";
import { cn } from "@/lib/utils";
import _iubpc_logo from "@/app/_iubpc_logo";
import { Code2, ArrowUpRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Squares from '@/components/Squares';
export default function Home() {
  return (
    <div className={cn(inter.className, "h-screen w-full")}>
      <div className="fixed top-0 left-0 h-full w-full z-0">
        <Squares direction="down" speed={0.5} borderColor={'hsl(237,61%,59%)'} />
      </div>
      <div className="h-[25vh] w-full"></div>
      <div className="flex flex-col items-center gap-1 w-[80%] mx-auto">
        <_iubpc_logo className="w-32 hover-float" style={{ "--time": "3s" } as React.CSSProperties} />
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-(--primary)/30 mb-6">
          <Code2 className="w-4 h-4 text-(--secondary)" />
          <span className="font-mono text-sm text-(--muted-foreground) text-center">
            Independent University Bangladesh Programming Club
          </span>
        </div>
        <h1 className="text-7xl font-mono text-(--primary) font-bold before:content-['<'] before:text-(--secondary) after:content-['/>'] after:text-(--secondary) hover-float text-center" style={{ "--time": "20s" } as React.CSSProperties}>Welcome to IUBPC</h1>
        <p className={cn("text-lg text-(--muted-foreground) text-wrap w-1/2 text-center", inter.className)} >Join the elite community of problem solvers. Master algorithms, compete in global contests, and push the boundaries of computational thinking.</p>
        <div className="flex items-center gap-10 z-0 mt-2">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdlvtBkCRZAQh3h8Mle18H423bnaSkYTZLtJEau_UBNdWvQQQ/viewform" target="_blank"><Button size="lg" className="drop-shadow-[0_0_5px_var(--primary)]" variant="default">Get Started<ArrowUpRightIcon /></Button></a>
          <a href="/gallery"><Button size="lg" className="drop-shadow-[0_0_5px_var(--secondary)]" variant="secondary">Explore Resources</Button></a>
        </div>
      </div>
      <ContainerScroll titleComponent="">
        <div className="h-full w-full bg-[#111] p-4 md:p-10 flex flex-col gap-6 overflow-hidden relative">
          <div className="flex items-center justify-between z-10">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-white font-mono">LATEST UPDATES</h2>
              <p className="text-sm md:text-base text-gray-400 mt-2">Stay tuned with IUBPC activities</p>
            </div>
            <Button variant="outline" className="hidden md:flex gap-2 border-(--primary) text-(--primary) hover:bg-(--primary) hover:text-white">
              View Archive <ArrowUpRightIcon className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 z-10 h-full">
            {[
              {
                title: "IntelliQuest v2.0",
                date: "15 OCT 2025",
                tag: "EVENT",
                desc: "Registration is now open for the biggest intra-university programming contest.",
                color: "var(--primary)"
              },
              {
                title: "Graph Theory Workshop",
                date: "02 NOV 2025",
                tag: "WORKSHOP",
                desc: "Join us for a deep dive into Graph algorithms with our mentors.",
                color: "var(--secondary)"
              },
              {
                title: "NCPC Team Selection",
                date: "20 NOV 2025",
                tag: "CONTEST",
                desc: "Preliminary selection contest for the upcoming National Collegiate Programming Contest.",
                color: "var(--primary)"
              }
            ].map((news, i) => (
              <div key={i} className="group relative bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:h-full" style={{ backgroundColor: news.color }}></div>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/10">{news.date}</span>
                    <span className="text-xs font-bold tracking-wider" style={{ color: news.color }}>{news.tag}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-(--secondary) transition-colors">{news.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-3">{news.desc}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-4 flex items-center text-sm text-gray-400 group-hover:text-white transition-colors cursor-pointer w-fit">
                  Read More <ArrowUpRightIcon className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(86,92,214,0.15)_0,rgba(0,0,0,0)_50%)] pointer-events-none" />
        </div>
      </ContainerScroll>
    </div>
  );
}
