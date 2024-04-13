import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
export default function LogoutButton() {
  const { laoding, logOut } = useLogout();
  return (
    <div className="mt-auto">
      {!laoding ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logOut}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}
