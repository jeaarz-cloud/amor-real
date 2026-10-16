import { prisma } from "@/lib/prisma"
import BotonInicio from "@/components/BotonInicio"
import TarjetaUsuario from "@/components/TarjetaUsuario"

export default async function MiembrosPage() {
  const usuarios = await prisma.user.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div className="min-h-screen bg-[#fefcfb] p-8">
      <div className="max-w-[1100px] mx-auto">
        <BotonInicio />
        <h1 className="text-[26px] font-extrabold mt-6 mb-6">Miembros: {usuarios.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {usuarios.map((u) => (
            <TarjetaUsuario key={u.id} id={u.id} name={u.name} email={u.email} foto="/familia.jpeg" />
          ))}
        </div>
      </div>
    </div>
  )
}