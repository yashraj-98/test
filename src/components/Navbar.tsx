import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <div className="fixed top-0 flex px-16 py-4 h-[100px] justify-between w-full items-center z-[50]">
      <div className="h-16 w-28">
        <img
          src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
