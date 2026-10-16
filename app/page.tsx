import Link from "next/link"

function VideoCard() {
  return (
    <div className="bg-[#fdf8f6] border border-gray-200 rounded-[28px] p-6 w-[310px]">
      <h2 className="font-extrabold text-[23px] leading-[1.1]">Crea tu video<br/>con tu música</h2>
      <p className="text-[11px] text-gray-500 mt-2">Elige tu idea, tu canción y sorprende a tu Match con un clip único hecho con IA.</p>
      <Link href="/register" className="mt-4 inline-block bg-[#5b3df6] text-white text-[12px] px-5 py-2.5 rounded-full font-bold">Crear mi video ahora →</Link>

      <p className="text-[11px] font-bold mt-6 mb-2">Ideas populares para empezar:</p>
      <div className="flex flex-col gap-2 text-[11px]">
        <div className="border bg-white rounded-full px-4 py-2">♡ Dedicatoria romántica</div>
        <div className="border bg-white rounded-full px-4 py-2">🍽️ Cena en tu restaurante ideal</div>
        <div className="border bg-white rounded-full px-4 py-2">💃 Baile en la playa</div>
      </div>

      <div className="mt-5 flex justify-center">
        <img src="/promo-video.png" className="w-[150px] h-auto object-contain" alt="promo" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fefcfb]">
      <header className="pt-7 pb-3 flex flex-col items-center bg-white">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Amor Real" className="h-[100px] object-contain" />
        </div>
        <nav className="mt-3 flex items-center gap-5 text-[13px] text-gray-500">
          <Link href="/miembros" className="bg-black text-white px-4 py-2 rounded-full text-[12px] font-bold">Ver Miembros</Link>
          <span>Inicio</span><span>·</span><span>Cómo funciona</span><span>·</span><span>Seguridad</span><span>·</span>
          <Link href="/login">Iniciar sesión</Link>
          <Link href="/register" className="bg-[#ff2a3d] text-white px-5 py-2 rounded-full font-bold">Regístrate Gratis</Link>
        </nav>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-8 flex justify-center gap-6 flex-wrap">
        <VideoCard />

        {/* 4 FOTOS CENTRALES MAPEADAS CON TUS NOMBRES REALES */}
        <div className="grid grid-cols-2 gap-5 w-[620px]">
          <img src="/bailando.jpeg" className="w-full h-[260px] object-cover rounded-[20px]" alt="bailando" />
          <img src="/cena.jpeg" className="w-full h-[260px] object-cover rounded-[20px]" alt="cena" />
          <img src="/familia.jpeg" className="w-full h-[260px] object-cover rounded-[20px]" alt="familia" />
          <img src="/playa1.jpeg" className="w-full h-[260px] object-cover rounded-[20px]" alt="playa" />
        </div>

        <VideoCard />
      </main>
    </div>
  )
}