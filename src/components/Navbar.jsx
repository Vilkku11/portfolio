import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  console.log("location");
  console.log(location);

  const links = [
    { name: "Main", url: "/" },
    { name: "W", url: "/w" },
  ];

  return (
    <div className="shadow-xl w-full fixed top-0 left-0 bg-dark z-10">
      <div className="items-center justify-between py-4 px-10">
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
