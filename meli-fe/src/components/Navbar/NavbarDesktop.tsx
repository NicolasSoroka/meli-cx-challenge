import { Link } from "react-router-dom"
import ShoppingCartIcon from "../Icons/ShoppingCartIcon"
import MenuIcon from "../Icons/MenuIcon"
import SearchIcon from "../Icons/SearchIcon"
import LogoMeli from "../../assets/logo__small_25years.png";
import { useState } from "react";

const NavbarDesktop = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
     <div className="hidden md:flex bg-meli_yellow items-center h-[50px] justify-around">
      <img src={LogoMeli} alt="logo_25y" className="w-[44px] h-[32px]" />
      <div className="flex items-center bg-white py-1 shadow shadow-slate-300 rounded-sm w-[500px]">
        <span className="px-2">
          <SearchIcon color="#AEAEAE" size={15} />
        </span>
        <input
          type="text"
          placeholder="Perdon que no llegue a terminar de estilar este nav"
          className="w-[500px] placeholder:text-[#AEAEAE] placeholder:opacity-50"
        />
      </div>
      <div className="flex gap-x-3 items-center">
        <button onClick={() => setIsExpanded((prev) => !prev)}>
          <MenuIcon
            size={32}
            classNames={`transition-all ${isExpanded ? "rotate-90" : ""}`}
          />
        </button>
        <Link to="/cart" className="disabled pointer-events-none">
          <ShoppingCartIcon color="#000" />
        </Link>
      </div>
    </div>
  )
}

export default NavbarDesktop