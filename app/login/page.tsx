"use client"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    if (res.ok) {
      alert("¡Bienvenido " + data.user.name + "!")
      window.location.href = "/"
    } else {
      alert("Error: " + data.error)
    }
  }

  return (
    <div style={{ padding: 40, maxWidth: 400, margin: "0 auto" }}>
      <h1>Iniciar Sesión - Amor Real</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required style={{padding:10, border:'1px solid #ccc', borderRadius:8}} />
        <input placeholder="Contraseña" type="password" value={password} onChange={e=>setPassword(e.target.value)} required style={{padding:10, border:'1px solid #ccc', borderRadius:8}} />
        <button type="submit" style={{padding:12, background:'#e5285a', color:'white', borderRadius:20, border:'none', fontWeight:'bold'}}>Entrar</button>
      </form>
      <p style={{marginTop:15}}>¿No tienes cuenta? <a href="/register" style={{color:'#e5285a'}}>Crear cuenta</a></p>
    </div>
  )
}