'use client';

import Eu from "@/app/images/eu.jpeg";
import Image from "next/image";
import { GitHubIcon, InstagramIcon, LinkedInIcon} from "@/components/social-icons";
import Link, { LinkProps } from 'next/link'; 
import React from 'react';

interface SocialLinksProps extends LinkProps {
  icon: React.ElementType; 
}

function SocialLinks({ icon: Icon, ...string }: SocialLinksProps) {
  return (
    <Link className="group -m-1 p-1" {...string}>
      <Icon className="h-6 w-6 fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-200" />
    </Link>
  );
}
function AboutSection() {
    return (
        <section id="about" className="ml-[15%] container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24"
        >
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
                <div className="lg:pl-20 flex justify-center">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={Eu}
                            alt='Henrique Alvarenga'
                            width={370}
                            height={370}
                            quality='95'
                            priority={true}
                            className="aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2 text-center md:text-start xs:ml-[-25%] md:ml-[-1%]">
                    <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl sm:ml-[-5%] md:ml-[-2%]">@alvarenga</h1>
                    <p className="mt-4 text-base text-muted-foreground">Olá, Sou Henrique Alvarenga Hastenreiter, tenho  17 anos e sou apaixonado por tecnologia.
                        Estudo desenvolvimento Front-End e já tenho alguns projetos pessoais em andamento, além de
                        colaborar com soluções inovadoras para a comunidade. Meu foco é criar interfaces elegantes,
                        intuitivas e funcionais, sempre buscando proporcionar a melhor experiência ao usuário.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start gap-6 sm:ml-[-5%] md:ml-[-0.9%]">
                        <SocialLinks icon={InstagramIcon} href="https://www.instagram.com/henrift_/" />
                        <SocialLinks icon={GitHubIcon} href="https://github.com/Alvarenga7" />
                        <SocialLinks icon={LinkedInIcon} href="https://www.linkedin.com/in/henrique-hastenreiter-8933992a3/" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection;
