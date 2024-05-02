import NavbarDesktop from "./Navbar/NavbarDesktop";
import NavbarMobile from "./Navbar/NavbarMobile";

const Layout = ({ children }) => {
  return (
    <div className="font-proximaNova">
      <NavbarMobile/>
      <NavbarDesktop/>
      <div className="container border-2 border-blue-600 m-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
