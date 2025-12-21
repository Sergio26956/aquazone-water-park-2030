"use client"
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa"

export default function SocialFloatingButton(){
  return (
    <div style={{
      position:"fixed", right:20, bottom:100, zIndex:9999,
      display:"flex", flexDirection:"column", gap:12
    }}>
      <a href="#" target="_blank"><FaInstagram size={26}/></a>
      <a href="#" target="_blank"><FaFacebook size={26}/></a>
      <a href="#" target="_blank"><FaTiktok size={26}/></a>
    </div>
  )
}
