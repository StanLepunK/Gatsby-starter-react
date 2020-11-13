import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `red`, fontSize: `72px` }}>
      <Header str="KNUPEL ART" />
      <Link to="/about/">about</Link>
      <img
        src="https://raw.githubusercontent.com/StanLepunK/git_media_src/main/knupel_72dpi/Atome_1_0_2015_11_450x300_72_dpi_Stan_le_Punk.jpg?token=AAZNRLLRDGVETFQF6XLYRW27W6E3S"
        alt=""
      />
    </div>
  )
}
