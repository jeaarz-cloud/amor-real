"use client"
import { useState } from "react"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    })
    const data = await res.json()
    if (res.ok) {
      alert("¡Cuenta creada! Ve a /login")
      window.location.href = "/login"
    } else {
      alert("Error: " + data.error)
    }
  }

  return (
    <div style={{ padding: 40, maxWidth: 400, margin: "0 auto" }}>
      <h1>Crear cuenta - Amor Real</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
        <input placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)} required style={{padding:10, border:'1px solid #ccc', borderRadius:8}} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required style={{padding:10, border:'1px solid #ccc', borderRadius:8}} />
        <input placeholder="Contraseña" type="password" value={password} onChange={e=>setPassword(e.target.value)} required style={{padding:10, border:'1px solid #ccc', borderRadius:8}} />
        <button type="submit" style={{padding:12, background:'#e5285a', color:'white', borderRadius:20, border:'none', fontWeight:'bold'}}>Crear cuenta</button>
      </form>
    </div>
  )
}