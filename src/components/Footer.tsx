import { navIcons, pageLinks } from '../data'
import React from 'react'

type PageLinkTypes = {
  text: String,
  href: String
}

type NavIconTypes = {
  href: String,
  className: String
}

const Footer: React.FC = () => {
  return (
    <>
      <footer className="section footer" id="contact">
        <ul className="footer-links">
          {pageLinks.map( (link: PageLinkTypes) => {
            const {text, href} = link;
            return (
              <li>
                <a href={href.toString()} className="footer-link">{text}</a>
              </li>
            )
          })}

        </ul>
        <ul className="footer-icons">
          {
            navIcons.map ((link: NavIconTypes) => {
              const {href, className} = link;
              return (
                <li>
                  <a href={href.toString()} target="_blank" rel="noreferrer" className="footer-icon"><i className={className.toString()}></i></a>
                </li>
              );
            })
          }

        </ul>
        <p className="copyright">
          copyright & copy Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </>
  )
}

export default Footer
