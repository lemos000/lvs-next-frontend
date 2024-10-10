import Image from 'next/image';

type CardProps = {
    titleProps: string;
    messageProps: string;
    imagemProps: string;
}

export default function Card({ titleProps, messageProps, imagemProps }: CardProps) {
    return (
        <div className="flex flex-col items-start p-4 bg-white rounded-lg shadow-lg transition-shadow duration-300 cursor-pointer hover:shadow-xl">
            <h2 className="text-xl font-bold mb-2">
                {titleProps}
            </h2>
            <p className="text-gray-700 mb-4">
                {messageProps}
            </p>
            <p className="text-blue-500 font-medium">
                {/* Conteúdo do Link, se necessário */}
            </p>
            <div className="mt-4 w-24 h-24 relative">
                <Image 
                    src={imagemProps} 
                    alt={titleProps} 
                    layout="fill" 
                    objectFit="contain"
                />
            </div>
        </div>
    );
}