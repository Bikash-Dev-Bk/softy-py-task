const Navbar = () => {
  return (
    <div className="bg-[#1F2B6C]">
      <div className="lg:max-w-[1280px] mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1F2B6C] text-white rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Service</a>
                </li>
                <li>
                  <a>Doctor</a>
                </li>
                <li>
                  <a>News</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl text-white">
              MEDICAL
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Service</a>
              </li>
              <li>
                <a>Doctor</a>
              </li>
              <li>
                <a>News</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="font-semibold bg-white text-[#159EEC] text-base px-6 py-2 rounded-full hidden md:block">Appointment</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
