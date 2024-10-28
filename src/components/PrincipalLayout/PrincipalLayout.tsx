'use client'

import Footer from "../Footer/Footer"
import Header from "../Header/Header"


export default function PrincipalLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="min-h-screen">
        <Header/>
        <main>
        {children}
        </main>
        <Footer/>
    </div>
  )
}
