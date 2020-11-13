import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `red`, fontSize: `72px` }}>
      <Header str="KNUPEL ART" />
      <Link to="/about/">about</Link>
      <Link to="/galery/">galery</Link>
    </div>
  )
}
