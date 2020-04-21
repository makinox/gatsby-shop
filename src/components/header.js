import React, { useContext } from "react"
import { Link } from "gatsby"
import { MenuItem, StyledHeader } from '../styles/components'
import { CartContext } from '../context'

const Header = () => {
  const { cart } = useContext(CartContext)

  return (
    <StyledHeader>
      <Link to="/">
        <img src="https://i.postimg.cc/6q3pg48v/Logo.png" alt="Logo pagina" ></img>
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to="/">Productos</Link>
          </MenuItem>
          <MenuItem margin>
            <Link to="https://jesusbossa.dev">
              <span >
                <img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="cart" />
              </span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <span>
                <img
                  src="https://i.postimg.cc/L6wpMxLt/cart.png"
                  alt="cartlogo"
                />
                {cart.length}
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header
