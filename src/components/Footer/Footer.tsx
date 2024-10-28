import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="font-bold text-lg">Assine o plano Premium agora!</h2>
            <p>Assine o LVS premium e tenha exclusividade na procura de oficinas</p>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Saiba mais</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Assinar</button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-2">Empresa</h3>
            <ul>
              <li><Link href="#" className="hover:underline">Projeto LVS</Link></li>
              <li><Link href="#" className="hover:underline">Sobre nós</Link></li>
              <li><Link href="#" className="hover:underline">Fiap</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Social</h3>
            <ul>
              <li><Link href="#" className="hover:underline">Gmail</Link></li>
              <li><Link href="#" className="hover:underline">Youtube</Link></li>
              <li><Link href="#" className="hover:underline">GitHub</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-200">
          <p>© 2023 LVS ltda. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline">Terms</Link>
            <Link href="#" className="hover:underline">Privacy</Link>
            <Link href="#" className="hover:underline">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}