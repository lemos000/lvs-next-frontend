"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '@/assets/logo.png'; // Certifique-se de que o caminho está correto
import backgroundImage from '@/assets/background-lvs.png'; // Certifique-se de que o caminho está correto

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  function handleSignUp(event: React.FormEvent) {
    event.preventDefault();

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email) {
        setErrorMessage('Usuário já cadastrado!');
        return;
      }
    }
    if (!email || !name || !password) {
      setErrorMessage("Preencha os campos necessários");
      return;
    }
    
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    console.log('Usuário cadastrado!');
    router.push('/login');
  }

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="hidden lg:block w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage.src})` }}></div>
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8">
        <Image src={Logo} alt="Logo da LVS" className="mb-8 w-24 lg:w-32" />
        <h1 className="text-xl lg:text-2xl font-bold mb-4">Crie sua conta</h1>
        <form onSubmit={handleSignUp} className="w-full max-w-sm lg:max-w-md">
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Insira seu nome"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Insira seu email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Insira sua senha"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <div className="flex justify-around items-center gap-2">
            <button type="submit" className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-md hover:bg-blue-500 transition-colors">
              Sign Up
            </button>
            <button type="button" onClick={() => router.push('/login')} className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}