import { Scroll, Timer } from 'phosphor-react'
import { HeaderContainer } from './styles'

import { NavLink } from 'react-router-dom'
import LogoIgnite from '../../assets/Logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />

      <nav>
        <NavLink to="/" title="Contador" end>
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
