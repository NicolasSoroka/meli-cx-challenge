import MenuIcon from "../MenuIcon";
import LogoMeli from "../../assets/logo__small_25years.png";
import SearchIcon from "../SearchIcon";
import ShoppingCartIcon from "../ShoppingCartIcon";
import { Link } from "react-router-dom";
import { useState } from "react";
import profilePic from "../../assets/Profile.jpg";

const NavbarMobile = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
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

      <aside>
        <Link
          to="/profile"
          className="flex gap-x-2 items-center p-2 bg-meli_yellow"
        >
          <img
            src={profilePic}
            alt="profile_img"
            className="rounded-full w-11 h-11 border border-white"
          />
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Nicolas Soroka</span>
            <span className="text-sm">
              Mi perfil <span>==</span>
            </span>
          </div>
        </Link>
        <ul></ul>
      </aside>
    </>
  );
};

export default NavbarMobile;
