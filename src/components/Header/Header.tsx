"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiArrowFromLeft, BiUser, BiMenu } from "react-icons/bi";

import Logo from "@/assets/logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const router = useRouter()

  const handleLogout = () => {
    sessionStorage.clear();
    router.push("/login");
  };

  const endpointsHome = [
    { caminho: "/", nome: "Home" },
    { caminho: "/about", nome: "Sobre nós" },
    { caminho: "/chat/oficinas", nome: "Oficinas" },
  ];

  return (
    <header className="p-4 bg-[#00163e] flex justify-between items-center relative">
      <Image src={Logo} alt="Logo da LVS" className="h-14 sm:h-28 w-auto" />

      <button
        className="text-white flex items-center justify-center md:hidden"
        onClick={() => setIsMenuOpen(true)}
      >
        <BiMenu className="w-6 h-6" />
      </button>

      <nav className="hidden md:flex text-white font-bold gap-16 items-center text-xl">
        {endpointsHome.map((endpoint, index) => (
          <Link
            key={index}
            href={endpoint.caminho}
            className="hover:text-[#F1B82D] transition-all duration-200"
          >
            {endpoint.nome}
          </Link>
        ))}
        <Link
          href="/chatbot"
          className="z-30 flex items-center bg-white text-black font-bold rounded-2xl p-2 m-2 transition-all duration-200 hover:text-[#F1B82D] hover:bg-gray-900"
        >
          Goat by LVS
        </Link>
      </nav>

      <div className="relative">
        <button
          className="text-white"
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        >
          <BiUser className="w-8 h-auto md:w-6" />
        </button>

        {isUserMenuOpen && (
          <div className="z-50 absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
            <div className="p-4 border-b border-gray-200">Configurações</div>
            <button
              className="w-full text-left p-4 hover:bg-gray-200"
              onClick={handleLogout}
            >
              Sair
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-gradient-to-l from-[#00163e] to-[#0f172a] text-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden z-30`}
      >
        <button
          className="text-white p-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <BiArrowFromLeft className="h-12" />
        </button>
        <nav className="flex flex-col gap-4 p-4">
          {endpointsHome.map((endpoint, index) => (
            <Link
              key={index}
              href={endpoint.caminho}
              className="active:bg-blue-400"
            >
              {endpoint.nome}
            </Link>
          ))}
          <Link href="/chatbot" className="active:bg-blue-400">
            Goat by LVS
          </Link>
        </nav>
      </div>
    </header>
  );
}