import React from 'react'
import { pageLinks, navIcons } from '../data'
import logo from '../images/logo.svg'

type PageLinkTypes = {
  href: string,
  text: string
}

type NavIconTypes = {
  href: string,
  className: string
}

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        {/* <!-- left this comment on purpose --> */}
          <ul className="nav-links" id="nav-links">
            {pageLinks.map( (link: PageLinkTypes) => {
              const {href, text} = link
              return (
                <li>
                  <a href={href} className="nav-link">{text}</a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {
              navIcons.map( (link: NavIconTypes) => {
                const {href, className} = link
                return (
                  <li>
                    <a href={href} rel="noreferrer" target="_blank" className="nav-icon"><i className={className}></i></a>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar
