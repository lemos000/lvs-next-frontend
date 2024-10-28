"use client"
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ScrollableBars() {
    const containerRef = useRef<HTMLDivElement>(null);
    const phrases = [
        "Agende uma revisão para meu carro usando IA",
        "Peça à IA para diagnosticar problemas no motor",
        "Descubra dicas para economizar combustível",
        "Configure alertas de manutenção automotiva",
        "Use IA para encontrar as melhores oficinas na área",
        "Automatize o agendamento de trocas de óleo",
        "Receba notificações sobre recalls de veículos",
        "Obtenha sugestões de melhorias para o desempenho do carro",
        "Use IA para calcular o valor de revenda do meu carro",
        "Saiba como a IA pode ajudar na segurança automotiva",
        "Descubra tendências de tecnologia automotiva com IA"
    ];
    const duplicatedPhrases = [...phrases, ...phrases];

    useEffect(() => {
        const container = containerRef.current;
        let scrollAmount = 0;

        const scrollInterval = setInterval(() => {
            if (container) {
                scrollAmount += 1; // Ajuste a velocidade conforme necessário
                container.scrollLeft = scrollAmount;

                if (scrollAmount >= container.scrollWidth / 2) {
                    scrollAmount = 0;
                }
            }
        }, 50);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div 
            ref={containerRef} 
            className="flex overflow-hidden whitespace-nowrap p-4 w-[99.1vw] scroll-smooth"
        >
            {duplicatedPhrases.map((phrase, index) => (
                <Link 
                    href="/chatbot" 
                    key={index}
                    className="inline-block bg-[#F1B82D] text-black rounded-lg shadow-lg p-4 m-2 cursor-pointer transition-colors duration-300 hover:bg-blue-gray-200"
                >
                    {phrase} &rarr;
                </Link>
            ))}
        </div>
    );
}