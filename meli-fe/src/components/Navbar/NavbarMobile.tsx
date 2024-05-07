import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../Icons/MenuIcon";
import LogoMeli from "../../assets/logo__small_25years.png";
import SearchIcon from "../Icons/SearchIcon";
import ShoppingCartIcon from "../Icons/ShoppingCartIcon";

const NavbarMobile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex md:hidden bg-meli_yellow items-center h-[50px] justify-around">
      <img src={LogoMeli} alt="logo_25y" className="w-[44px] h-[32px]" />
      <div className="flex items-center bg-white py-1 shadow shadow-slate-300 rounded-sm">
        <span className="px-2">
          <SearchIcon color="#AEAEAE" size={15} />
        </span>
        <input
          type="text"
          placeholder="Estoy buscando..."
          className="w-[200px] placeholder:text-[#AEAEAE] placeholder:opacity-50"
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
  );
};

export default NavbarMobile;
