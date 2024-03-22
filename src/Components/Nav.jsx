
const Nav = () => {
    return (
        <div className="mx-5">
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Programming Loser</a>
  </div>
  <div className="flex-none gap-5">
        <div className="hidden sm:flex">
            <button className="text-white font-bold btn bg-[#4e1a60]">Continue Course</button>
        </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-16 rounded-full">
          <img alt="user" src="https://i.ibb.co/cDBVm5N/html-css-collage-concept-with-person.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Profile</a></li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Nav;