
import { ModeToggle } from "./mode-toggle";


function IntroSection(){
    return(
        <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-32 relative xs:ml-[-25%] md:ml-[1%]">
        <svg viewBox="0 0 1024 1024" className=" absolute left-1/3 top-full md:left-1/2 md:top-1/2 h-[16rem] w-[16rem] md:h-[54rem] md:w-[54rem] size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset="1" stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
          <div className="container flex max-w-[100rem] flex-col items-center text-center gap-4 sm:ml-[40%]  md:ml-[-1%]">
            <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center">
              
              <ModeToggle />
            </span>
            <h1 className="font-heading text-6xl md:text-7xl lg:text-7xl ">
              FRONT-END
              <br />
              <span className="text-primary text-7xl">DEVELOPER</span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Desenvolvedor Front-End com
              habilidades em Javascript e
              Typescript e experiência em suas frameworks.
              Familiarizado com metodologias ágeis e organização de projetos.</p>
            <div className="space-x-4 z-10 mt-[1%]">
              <a href="https://api.whatsapp.com/send?phone=31991285511" className=" bg-primary py-2 px-4 text-md text-white rounded shadow-lg font-bold">Contrate meu Serviço</a>
              
            </div>
          </div>
        </section>
  
    )
}

export default IntroSection;
