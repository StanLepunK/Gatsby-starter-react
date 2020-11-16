import React from "react"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <Link to="/">home</Link>
      </div>
      <div>{children}</div>
    </div>
  )
}
