import { inter } from "@/lib/font";
import { cn } from "@/lib/utils";
import _iubpc_logo from "@/app/_iubpc_logo";
import { Code2, ArrowUpRightIcon, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Squares from '@/components/Squares';

export default async function Home() {
  let total: any;
  let contests: any;
  let participants: any;
  let announcements: any;
  try {
    const Total = await fetch('https://iubpc.vercel.app/api/members').then(res => res.json());
    const Contests = await fetch('https://iubpc.vercel.app/api/contests').then(res => res.json());
    const Participants = await fetch('https://iubpc.vercel.app/api/leaderboard').then(res => res.json());
    const Announcements = await fetch('https://iubpc.vercel.app/api/announcements?public=true').then(res => res.json());
    if (!Total || !Contests || !Participants || !Announcements) {
      throw new Error('Failed to fetch data');
    }
    total = Total.stats.total;
    contests = Contests.length;
    participants = Participants.total;
    announcements = Announcements.announcements;
  } catch (error) {
    console.log(error);
  }
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
        <div className="flex items-center gap-4 z-0 mt-2">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdlvtBkCRZAQh3h8Mle18H423bnaSkYTZLtJEau_UBNdWvQQQ/viewform" target="_blank"><Button size="xl" className="drop-shadow-[0_0_5px_var(--primary)]" variant="default">Get Started<ArrowUpRightIcon /></Button></a>
          <a href="/gallery"><Button size="xl" variant="outline" >Explore Resources<ArrowUpRightIcon /></Button></a>
        </div>
        <div className="py-3 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-5 h-5 text-(--secondary)" />
              <span className="text-3xl font-bold font-mono text-foreground">{total}+</span>
            </div>
            <span className="text-sm text-muted-foreground font-mono">Members</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-(--primary)" />
              <span className="text-3xl font-bold font-mono text-foreground">{contests}+</span>
            </div>
            <span className="text-sm text-muted-foreground font-mono">Contests</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Code2 className="w-5 h-5 text-(--secondary)" />
              <span className="text-3xl font-bold font-mono text-foreground">{participants}+</span>
            </div>
            <span className="text-sm text-muted-foreground font-mono">Participants</span>
          </div>
        </div>
      </div>
      <ContainerScroll titleComponent="">
        <div className="h-full w-full bg-[#111] p-4 md:p-10 flex flex-col gap-6 overflow-hidden relative">
          <div className="flex items-center justify-between z-10">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-(--primary) font-mono">Announcements</h2>
              <p className="text-sm md:text-base text-gray-400 mt-2">Stay tuned with IUBPC activities</p>
            </div>
            <Button variant="outline" className="hidden md:flex gap-2 border-(--primary) text-(--primary) hover:bg-(--primary) hover:text-white">
              View Archive <ArrowUpRightIcon className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 z-10 h-full">
            {announcements
              .sort((a: any, b: any) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
              .filter((news: any) => news)//change this and add a menu to select between announcements
              .map((news: any, i: number) => {
                const rawContent = news.content || "";
                const contestUrlMatch = rawContent.match(/(https?:\/\/vjudge\.net\/contest\/\d+)/);
                const contestUrl = contestUrlMatch ? contestUrlMatch[0] : null;
                const passwordMatch = rawContent.match(/Password:\s*(\w+)/i);
                const password = passwordMatch ? passwordMatch[1] : null;
                return (
                  <div key={i} className="group md:min-w-74 relative bg-white/5  border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors flex flex-col justify-between overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:h-full" style={{ backgroundColor: news.stats === 'Active' ? 'var(--destructive)' : 'lightgreen' }} />

                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/10">
                          {new Date(news.startDate).toLocaleDateString()}
                        </span>
                        <span className="text-xs font-bold tracking-wider" style={{ color: news.stats === 'Active' ? 'var(--destructive)' : 'lightgreen' }} >{news.type}</span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-(--secondary) transition-colors">{news.title}</h3>
                        <p className="text-sm text-gray-400 text-wrap font-mono whitespace-pre-line mb-3">
                          Please make sure to participate fairly and follow the rules.
                        </p>
                        {contestUrl && (
                          <div className="bg-black/20 p-2 rounded border border-white/5 inline-block">
                            <p className="text-xs text-gray-400 font-mono">
                              Contest URL: <span className="text-white font-bold select-all">{contestUrl}</span>
                            </p>
                          </div>
                        )}
                        {password && (
                          <div className="bg-black/20 p-2 rounded border border-white/5 inline-block">
                            <p className="text-xs text-gray-400 font-mono">
                              Password: <span className="text-white font-bold select-all">{password}</span>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="pt-6 border-t border-white/5 mt-4">
                      <a
                        href={contestUrl || "#"}
                        target={contestUrl ? "_blank" : "_self"}
                        className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors cursor-pointer w-fit"
                      >
                        {contestUrl ? "Join Contest" : "Read More"}
                        <ArrowUpRightIcon className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(86,92,214,0.15)_0,rgba(0,0,0,0)_50%)] pointer-events-none" />
        </div>
      </ContainerScroll>
    </div>
  );
}
