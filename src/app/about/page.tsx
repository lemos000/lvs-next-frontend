import Image from "next/image";
import Time from "@/assets/time.jpg";
import Lavinia from "@/assets/lavinia.jpeg";
import Lemos from "@/assets/lemos.jpg";
import Samuel from "@/assets/samuel.png";
import PrincipalLayout from "@/components/PrincipalLayout/PrincipalLayout";

export default function About() {
  return (
    <PrincipalLayout>
      <div className="bg-[#00112e] p-16 flex flex-col justify-center items-center text-center">
        <h1 className="text-white font-bold font-oswald text-8xl md:text-4xl mb-8">
          Sobre nós
        </h1>
        <p className="w-3/5 text-white text-xl mb-8 md:text-base">
          A LVS é uma empresa de pesquisa e desenvolvimento com IA. Nossa missão
          é assimilar o mundo de seguros automotivos à realidade das
          inteligências artificiais emergentes no mercado.
        </p>
        <div className="flex mt-32 bg-[#00050e] w-4/5 flex-col lg:flex-row">
          <div className="p-8">
            <h2 className="text-white text-3xl font-bold">Visão da LVS</h2>
            <p className="text-left text-white p-12 text-lg md:text-sm">
              A LVS está na vanguarda da revolução tecnológica no setor
              automotivo, incorporando inteligência artificial (IA) para
              transformar e agilizar processos essenciais. No dinâmico mundo dos
              veículos, onde a eficiência e a precisão são cruciais, nossa
              empresa se destaca ao implementar soluções de IA que estão
              redefinindo os padrões da indústria.
              <br />
              <br />
              Desde o diagnóstico avançado de problemas mecânicos até a
              otimização de rotas para frotas, a IA da LVS está presente em cada 
              etapa do ciclo de vida automotivo. Nossos sistemas inteligentes
              analisam vastos conjuntos de dados em tempo real, permitindo uma
              manutenção preditiva que antecipa falhas antes que elas ocorram,
              reduzindo drasticamente o tempo de inatividade dos veículos e os
              custos associados.
            </p>
          </div>
          <Image src={Time} alt="Time" className="w-full lg:w-1/2 h-auto" />
        </div>
        <h2 className="text-white font-bold mt-32 text-5xl md:text-2xl drop-shadow-lg">
          Conheça nossa equipe
        </h2>
        <div className="bg-black bg-opacity-60 w-4/5 flex flex-col lg:flex-row justify-between items-center my-20">
          <Image
            src={Lavinia}
            alt="Lavinia"
            className="w-1/3 lg:w-2/4"
          />
          <div className="font-oswald p-16 md:p-8 w-full">
            <h3 className="text-white text-6xl md:text-3xl font-medium">
              Lavinia Park
            </h3>
            <p className="text-white">1TDSPF RM555679</p>
          </div>
        </div>
        <div className="bg-black bg-opacity-60 w-4/5 flex flex-col-reverse lg:flex-row justify-between items-center my-20">
          <div className="font-oswald p-16 md:p-8 w-full">
            <h3 className="text-white text-6xl md:text-3xl font-medium">
              Samuel Yariwake
            </h3>
            <p className="text-white">1TDSPV RM556461</p>
          </div>
          <Image
            src={Samuel}
            alt="Samuel"
            className="w-1/3 lg:w-2/4"
          />
        </div>
        <div className="bg-black bg-opacity-60 w-4/5 flex flex-col lg:flex-row justify-between items-center my-20">
          <Image
            src={Lemos}
            alt="Lemos"
            className="w-1/3 lg:2-2/4"
          />
          <div className="flex flex-col justify-center items-center font-oswald p-16 md:p-8 w-full">
            <h3 className="text-white text-6xl md:text-3xl font-medium">
              Gabriel Lemos
            </h3>
            <p className="text-white">1TDSPV RM554819</p>
          </div>
        </div>
      </div>
    </PrincipalLayout>
  );
}
