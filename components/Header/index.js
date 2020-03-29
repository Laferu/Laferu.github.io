import React, { useState } from 'react'
import Link from 'next/link'
import {
  StyledHeader
} from './styles'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='container-fluid'>
      <StyledHeader className={`container ${toggleMenu && 'nav-toggle-show'}`}>
        <div className='title'>
          <h1>Rafael Araujo</h1>
          <h2>Desenvolvedor Front-End</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link href='/'>
                <a title='Início'>Início</a>
              </Link>
            </li>
            <li>Perfil</li>
            <li>Projetos</li>
          </ul>
          <ul className={toggleMenu ? 'nav-show' : 'nav-hidden'}>
            <li>React</li>
            <li>React Native</li>
            <li onClick={() => setToggleMenu(true)}>Ver mais...</li>
          </ul>
          <ul>
            <li>React</li>
            <li>React Native</li>
            <li>Flutter</li>
          </ul>
          <ul>
            <li>PHP</li>
            <li>Github</li>
            <li>Linkedin</li>
          </ul>
          <ul className={toggleMenu ? 'nav-hidden' : 'nav-show'}>
            <li onClick={() => setToggleMenu(false)}>Recolher...</li>
          </ul>
        </nav>
      </StyledHeader>
    </div>

  )
}

export default Header
