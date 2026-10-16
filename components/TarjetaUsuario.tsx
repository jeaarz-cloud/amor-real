import Link from "next/link"
export default function TarjetaUsuario({id,name,email,foto}: any){
  return (
    <div className="bg-white border rounded-[24px] p-6 text-center">
      <img src={foto} className="w-[100px] h-[100px] rounded-full mx-auto object-cover" alt={name} />
      <h3 className="font-bold mt-3">{name}</h3>
      <p className="text-xs text-gray-500">{email}</p>
      <Link href={`/miembro/${id}`} className="bg-black text-white px-4 py-2 rounded-full text-xs mt-4 inline-block">Ver Perfil</Link>
    </div>
  )
}