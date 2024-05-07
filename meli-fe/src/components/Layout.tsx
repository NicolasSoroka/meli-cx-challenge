import NavbarDesktop from "./Navbar/NavbarDesktop";
import NavbarMobile from "./Navbar/NavbarMobile";

const Layout = ({ children }) => {
  return (
    <div className="font-proximaNova bg-meli_gray h-screen">
      <NavbarMobile/>
      <NavbarDesktop/>
      <div className="container m-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
