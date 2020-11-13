import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
export default function Galery() {
  return (
    <div style={{ color: `red` }}>
      <Container>
        <Header str="Galery" />
        <Link to="/">home</Link>
        <p>Selected artwork</p>
      </Container>

      <img
        src="https://raw.githubusercontent.com/StanLepunK/git_media_src/main/knupel_72dpi/AttGen_13_60_75p5_CGTG_AA_72.jpg?token=AAZNRLPQF4UYHS26EU5FJYC7W7LDA"
        alt="CGTG_AA"
      />
      <img
        src="https://raw.githubusercontent.com/StanLepunK/git_media_src/main/knupel_72dpi/AttGen_6_60_37p5_CGAT_AA_72.jpg?token=AAZNRLPH35DHSKWY4RKPJCC7W7LGS"
        alt="CGAT_AA"
      />
      <img
        src="https://raw.githubusercontent.com/StanLepunK/git_media_src/main/knupel_72dpi/AttGen_7_60_32p5_ATAC_AA_72.jpg?token=AAZNRLIJENDZJXGOZOQKXIS7W7PAS"
        alt="ATAC_AA"
      />
    </div>
  )
}
