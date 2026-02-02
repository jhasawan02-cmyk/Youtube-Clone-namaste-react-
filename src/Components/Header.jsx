import React from "react";

function Header() {
  return (
    <div className="border w-full h-fit flex items-center px-2">
      
   
      <div className="flex items-center w-3/12 py-0.5">
        <img
          alt="hamburger-icon"
          className="h-16 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9Mu4yCMe-nK3QxKol2x4cCia-nTqJu-PCA&s"
        />
        <img
          alt="youtube-logo"
          className="h-16 ml-2 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBaCgGJcTwKX5EYMuhYd3xuGQHUDo6wq07MQ&s"
        />
      </div>

      
      <div className="flex justify-center items-center w-6/12 ">
        <div className="flex items-center w-full max-w-xl border rounded-full overflow-hidden  ">
          <input
            placeholder="Search"
            className="px-4 py-2 w-full outline-none border-r"
          />
          <img
            alt="search-icon"
            className="h-8 px-3 cursor-pointer "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8E-ADHCUm0aVqpN5TmbJxdE1CLNw50o5JA&s"
          />
        </div>

        <img
          alt="mic-icon"
          className="h-13 ml-2 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvkm-IIm70JONUoXGgJxI08erSIFmgtj_vA&s"
        />
      </div>

      
      <div className="flex items-center justify-end w-3/12">
        <img
          alt="bellIcon-logo"
          className="h-18 mr-3 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTiUrVaXOHR6zxamtHVpKkRmFm2H2a0rdbg&s"
        />
        <img
          alt="user-avatar"
          className="h-12 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtKkOaBtdg8WrVMovsDXKVlE_7PWTdfnjrg&s"
        />
      </div>

    </div>
  );
}

export default Header;
