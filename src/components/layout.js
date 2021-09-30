import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <Link to="/">
          <StaticImage
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/muzk.dev.png"
            height={40}
            quality={95}
            alt="Logo"
          />
        </Link>
        <a className="cta" href="https://muzk.dev/curso-gratuito">Curso gratuito</a>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
