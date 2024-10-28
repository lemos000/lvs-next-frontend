"use client";
import { useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaBars, FaTimes, FaChevronRight } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import Image from "next/image";
import Goat from "@/assets/theGoat.png"; 

export default function Chatbot() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#00163e] min-h-screen text-[#3b82f6] flex">
      <div
        className={`w-72 bg-[#001e4d] p-4 overflow-y-auto transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-50 fixed md:relative`}
      >
        <h2 className="text-[#F1B82D] mb-4 text-xl flex items-center">
          <BsBoxSeam className="mr-2" />
          Oficinas Sugeridas
        </h2>
        <ul className="flex-grow">
          <li className="mb-2">
            <Link href="/payment/0">
              <p className="block p-3 bg-[#002a6e] rounded-lg text-white hover:bg-[#003a9e]">
                Oficina A - R$ 100,00
              </p>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/payment/1">
              <p className="block p-3 bg-[#002a6e] rounded-lg text-white hover:bg-[#003a9e]">
                Oficina B - R$ 150,00
              </p>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/payment/2">
              <p className="block p-3 bg-[#002a6e] rounded-lg text-white hover:bg-[#003a9e]">
                Oficina C - R$ 200,00
              </p>
            </Link>
          </li>
        </ul>
        <div className="flex flex-col gap-4 mt-auto pt-4">
          <Link href="/">
            <p className="flex items-center justify-center p-3 bg-[#F1B82D] text-[#00163e] rounded-lg font-bold hover:bg-[#e0a81d]">
              <FaChevronLeft className="mr-2" />
              Voltar à página principal
            </p>
          </Link>
          <button
            onClick={toggleSidebar}
            className="flex items-center justify-center p-3 bg-[#3b82f6] text-white rounded-lg font-bold hover:bg-[#2563eb] md:hidden"
          >
            <FaTimes className="mr-2" />
            Fechar
          </button>
        </div>
      </div>
      <div className="flex-grow flex flex-col">
        <header className="bg-[#00163e] p-4 flex justify-between items-center relative">
          <button onClick={toggleSidebar} className="text-[#F1B82D] md:hidden">
            <FaBars className="text-xl" />
          </button>
          <div className="hidden md:flex items-center justify-center">
            <h1 className="text-[#F1B82D] font-bold text-xl">Goat by LVS (BETA)</h1>
          </div>
          <Image
            src={Goat}
            alt="LVS Logo"
            width={80}
            height={80}
            className="w-20 h-20"
          />
        </header>
        <div className="flex justify-center border-b border-[#3b82f6] p-2">
          <Link href="/chatbot">
            <p className={`mx-4 p-2 text-white `}>Chat</p>
          </Link>
          <Link href="/oficinas">
            <p className={`mx-4 p-2 text-white`}>Oficinas</p>
          </Link>
        </div>
        <div className="flex-grow  bg-[#00163e]">
          <div className="flex flex-col h-full">
            <main className="flex-grow flex items-center justify-center p-4 overflow-y-auto">
              
            </main>
            <footer className="flex justify-center bg-blue-900 p-4 border-t w-full border-blue-500">
              <div className="flex items-center w-full max-w-2xl bg-blue-500 rounded-full p-2">
                <input
                  type="text"
                  placeholder="Envie uma mensagem para o LVSBot..."
                  className="flex-grow bg-transparent border-none outline-none text-blue-900 px-4"
                />
                <button className="bg-yellow-500 text-blue-900 p-2 rounded-full hover:bg-blue-500 hover:text-yellow-500 transition">
                  <FaChevronRight />
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
