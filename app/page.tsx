
import Link from 'next/link'
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFEF5] text-black">
      <header className="px-6 py-4 flex flex-col items-center bg-[#FFFEF5] shadow-sm">
  <img src="/logo.png" alt="Amor Real" className="h-[110px] w-auto object-contain" />
  <nav className="mt-1 flex gap-3 text-[11px] text-zinc-500">
    <span>Inicio</span> • <span>Cómo funciona</span> • <span>Seguridad</span> • <span className="text-[#5B21B6] font-bold">Iniciar sesión</span>
    <Link href="/register" style={{ 
  background: '#e5285a', 
  color: 'white', 
  padding: '10px 20px', 
  borderRadius: '20px', 
  marginLeft: '10px',
  fontWeight: 'bold',
  textDecoration: 'none'
}}>
  Regístrate Gratis
</Link>
  </nav>
</header>

     {/* HERO CON PROMOS DE VIDEO A LOS LADOS */}
{/* UNA PROMO DE CADA LADO - IZQUIERDA Y DERECHA */}
<section className="px-3 md:px-6 mt-4 max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-[320px_1fr_320px] gap-4 items-start">

  {/* LADO IZQUIERDO AZUL */}
  <div className="hidden md:block sticky top-4">
    <img src="/promo-video.png" alt="Crea tu video con tu música" className="w-full h-auto rounded-[20px] border border-[#E9D5FF] shadow-sm" />
  </div>

  {/* CENTRO - TUS 4 FOTOS BONITAS CUADRADAS */}
  <div className="grid grid-cols-2 gap-3">
    <img src="/bailando.jpeg" className="rounded-[20px] w-full aspect-[4/3] md:aspect-[16/10] object-cover" />
    <img src="/cena.jpeg" className="rounded-[20px] w-full aspect-[4/3] md:aspect-[16/10] object-cover" />
    <img src="/familia.jpeg" className="rounded-[20px] w-full aspect-[4/3] md:aspect-[16/10] object-cover" />
    <img src="/playa2.jpeg" className="rounded-[20px] w-full aspect-[4/3] md:aspect-[16/10] object-cover" />

    {/* En celular, la promo va aquí en medio para no dejar vacío */}
    <div className="col-span-2 md:hidden">
      <img src="/promo-video.png" className="w-full h-auto rounded-[20px] border shadow-sm" />
    </div>
  </div>

  {/* LADO DERECHO AZUL - LA MISMA PROMO */}
  <div className="hidden md:block sticky top-4">
    <img src="/promo-video.png" alt="Crea tu video con tu música" className="w-full h-auto rounded-[20px] border border-[#E9D5FF] shadow-sm" />
  </div>

</section>

      <section className="mt-12 bg-white mx-6 md:mx-24 rounded-[24px] p-2 border flex justify-center gap-10 py-6">
        <div className="text-center"><div className="bg-[#5B21B6] w-10 h-10 rounded-full mx-auto flex items-center justify-center text-white">👤</div><p className="text-xs font-bold mt-2">Crea tu perfil</p></div>
        <div className="text-center"><div className="bg-[#FF6B6B] w-10 h-10 rounded-full mx-auto flex items-center justify-center text-white">♡</div><p className="text-xs font-bold mt-2">Descubre conexiones</p></div>
        <div className="text-center"><div className="bg-[#5B21B6] w-10 h-10 rounded-full mx-auto flex items-center justify-center text-white">💬</div><p className="text-xs font-bold mt-2">Conecta y conoce</p></div>
      </section>

      <footer className="mt-10 text-center text-[11px] text-zinc-500 pb-8">© 2024 Amor Real • Privacidad • Términos • Ayuda • Contacto</footer>
    </main>
  )
}