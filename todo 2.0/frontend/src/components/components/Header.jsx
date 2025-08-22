import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/todos", label: "Todos" },
    { to: "/about", label: "About" },
  ];
  return (
    <div className=" shadow-2xl">
      <div className="max-w-7xl p-3 mx-auto  flex items-center justify-between">
        <div>
          <NavLink to="/">Logo</NavLink>
        </div>
        <ul className="flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-foreground border-b-2 border-primary pb-1"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="space-x-2">
          <NavLink to="/login">
            <Button className="bg-gray-900 text-white hover:bg-gray-800 cursor-pointer">
              Login
            </Button>
          </NavLink>
          <NavLink to="/signup">
            <Button className="bg-blue-600 text-white hover:bg-blue-500 cursor-pointer">
              Sign up
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
