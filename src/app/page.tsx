import Link from "next/link";
import MovingBars from "@/components/MovingBars/MovingBars";
import PrincipalLayout from "@/components/PrincipalLayout/PrincipalLayout";
import Image from "next/image";
import Lemos from "@/assets/lemos.jpg";

export default function Home() {
  return (
    <PrincipalLayout>
      <div className="bg-[#00163e] flex flex-col justify-center items-center text-center">
        <div className="relative w-full lg:h-[40rem]">
          <div className="absolute inset-0 bg-black opacity-75 z-10"></div>
          <div
            className="relative bg-cover bg-center w-full h-full flex flex-col items-center justify-center"
            style={{
              backgroundImage: "url(https://i.ibb.co/2yY3f95/mecanico.jpg)",
            }}
          >
            <p className="font-oswald relative z-20 text-white p-4 text-3xl sm:text-3xl md:text-4.5xl lg:text-6xl">
              Agilize seu atendimento automotivo!
            </p>
            <div className="z-20 flex flex-col justify-center items-center">
              <h1 className="font-oswald text-2.25rem text-white font-bold text-center mb-4 sm:text-3xl lg:text-3.75rem">
                GOAT by LVS
              </h1>
              <p className="text-center text-white text-lg mb-8">
                Inicie o chatbot agora!
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/chatbot">
                  <p className="bg-[#F1B82D] text-black font-medium py-2 px-4 rounded-full hover:bg-blue-gray-200 transition duration-300 ease-in-out">
                    Iniciar atendimento &rarr;
                  </p>
                </Link>
                <Link href="/sobre">
                  <p className="text-white font-medium py-2 px-4 hover:underline">
                    Conheça a LVS &rarr;
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <MovingBars />
      </div>
      <div className="w-full bg-[#00163e] text-white py-12 px-6 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          &quot;Agilidade e simplicidade são pontos fundamentais&quot;
        </h2>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-8">
          Pensamos em algo que{" "}
          <span className="text-amarelo">
            facilitasse o acesso ao atendimento automotivo
          </span>{" "}
          de forma fácil, simples e automatizada, pulando os processos que
          impedem uma solução ágil em momentos de urgência
        </p>
        <div className=" flex items-center">
          <Image
            src={Lemos}
            alt="Adam Wathan"
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
          <div>
            <p className="font-bold">Gabriel Lemos</p>
            <p className="text-gray-400">Sócio da LVS</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-azulEscuro text-white flex justify-center items-center">
        <div className="w-3/4 m-10">
          <h2 className="text-3xl font-bold mb-8 font-oswald">Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col bg-amarelo text-black p-4 rounded-lg hover:scale-105 transition-all ease-in-out">
              <span className="text-xl font-bold mb-2">01</span>
              <h3 className="text-2xl font-bold mb-4">
                Revolucionando a Confiança nos Serviços Automotivos
              </h3>
              <p>
                Em um mercado de reparação automotiva tradicionalmente
                conservador, nossa missão é integrar a tecnologia de forma a
                reconstruir a confiança dos clientes. Ao garantir transparência
                e honestidade nos diagnósticos e preços, buscamos eliminar as
                fraudes frequentemente associadas ao setor, criando um novo
                padrão de confiabilidade.
              </p>
            </div>

            <div className="flex flex-col bg-amarelo text-black p-4 rounded-lg hover:scale-105 transition-all ease-in-out">
              <span className="text-xl font-bold mb-2">02</span>
              <h3 className="text-2xl font-bold mb-4">
                Experiência Phygital para um Serviço Sem Interrupções
              </h3>
              <p>
                Nosso objetivo é desenvolver uma experiência phygital onde os
                serviços começam virtualmente e concluem-se presencialmente nas
                oficinas. Utilizando inteligência artificial, fornecemos
                diagnósticos precisos no conforto de casa, garantindo orçamentos
                exatos e prazos de conclusão predefinidos, aumentando a
                credibilidade e eficiência.
              </p>
            </div>

            <div className="flex flex-col bg-amarelo text-black p-4 rounded-lg hover:scale-105 transition-all ease-in-out">
              <span className="text-xl font-bold mb-2">03</span>
              <h3 className="text-2xl font-bold mb-4">
                Empoderando a Escolha do Cliente
              </h3>
              <p>
                Empoderamos nossos usuários oferecendo dois caminhos: explorar
                nossa lista curada de oficinas com avaliações e informações
                detalhadas, ou optar por uma rota mais tradicional. Essa
                flexibilidade atende a um público diversificado, garantindo que
                até mesmo aqueles menos familiarizados com tecnologia se sintam
                confortáveis e no controle.
              </p>
            </div>

            <div className="flex flex-col bg-amarelo text-black p-4 rounded-lg hover:scale-105 transition-all ease-in-out">
              <span className="text-xl font-bold mb-2">04</span>
              <h3 className="text-2xl font-bold mb-4">Inovando com Cautela</h3>
              <p>
                Enquanto nosso principal objetivo é impulsionar a inovação
                digital no campo mecânico, estamos igualmente comprometidos em
                oferecer opções alternativas para evitar resultados negativos.
                Nossa abordagem é introduzir mudanças gradualmente, garantindo
                uma recepção positiva do público em geral.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:text-[1rem] text-[0.5rem] overflow-x-auto flex flex-col  bg-azulEscuro justify-center items-center lg:p-10 p-4">
        <h2 className="text-3xl font-bold mb-8 font-oswald text-white text-center">
          Comparação
        </h2>
        <table className="max-w-screen-lg divide-y divide-gray-700 m-4 sm:m-10">
          <thead className="bg-black">
            <tr>
              <th className="px-2 sm:px-6 py-3 text-left font-medium text-white uppercase tracking-wider">
                Comparação com o atendimento normal
              </th>
              <th className="px-2 sm:px-6 py-3 text-left font-medium text-white uppercase tracking-wider">
                LVS Goat AI
              </th>
              <th className="px-2 sm:px-6 py-3 text-left font-medium text-white uppercase tracking-wider">
                Atendimento Automotivo Comum
              </th>
            </tr>
          </thead>
          <tbody className="bg-black divide-y divide-gray-800">
            <tr>
              <td className="px-2 sm:px-6 py-4 whitespace-nowrap font-medium text-white">
                Segurança de Dados
              </td>
              <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-amarelo font-semibold bg-blue-900">
                Alto
              </td>
              <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-white bg-blue-900">
                Baixo
              </td>
            </tr>
            <tr>
              <td className="px-2 sm:px-6 py-4 whitespace-nowrap font-medium text-white">
                Agilidade no Atendimento
              </td>
              <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-amarelo font-semibold bg-blue-900">
                Alto
              </td>
              <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-white bg-blue-900">
                Médio
              </td>
            </tr>
            <tr>
              <td className="px-2 sm:px-6 py-4 whitespace-nowrap  font-medium text-white">
                Satisfação do Cliente
              </td>
              <td className="px-2 sm:px-6 py-4 whitespace-nowrap  text-amarelo font-semibold bg-blue-900">
                Alto
              </td>
              <td className="px-2 sm:px-6 py-4 whitespace-nowrap  text-white bg-blue-900">
                Baixo
              </td>
            </tr>
            <tr>
              <td className="px-2 sm:px-6 py-4 whitespace-nowrap  font-medium text-white">
                Eficiência Operacional
              </td>
              <td className="px-2 sm:px-6 py-4 whitespace-nowrap  text-amarelo font-semibold bg-blue-900">
                Alto
              </td>
              <td className="px-2 sm:px-6 py-4 whitespace-nowrap  text-white bg-blue-900">
                Baixo
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </PrincipalLayout>
  );
}
