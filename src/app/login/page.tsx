"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo.png';
import backgroundImage from '@/assets/background-lvs.png'; 
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    try {
      const response = await fetch(`/api/user/verificar?email=${(email)}&senha=${(senha)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        router.push("/home")
        
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor: ' + err);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8">
        <Image src={Logo} alt="Logo da LVS" className="mb-8 w-24 lg:w-32" />
        <h1 className="text-xl lg:text-2xl font-bold mb-4">
          Acesse sua conta
        </h1>
        <form onSubmit={handleLogin} className="w-full max-w-sm lg:max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira seu email"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Insira sua senha"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <div className="mb-4 text-black">
            Não tem um usuário?{' '}
            <Link href="/signup">
              <a className="text-blue-400 hover:text-blue-600">Inscreva-se agora</a>
            </Link>
          </div>
          {error && (
            <p className="text-red-500 mb-4">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
      <div 
        className="hidden lg:block w-full lg:w-1/2 bg-cover bg-center" 
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      />
    </div>
  );
}