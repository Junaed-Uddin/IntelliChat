import Link from "next/link";
import React from "react";
import { FaBrain } from "react-icons/fa";
import Image from "next/image";
import user from "../../../public/user.jpg";

export default function NavBar() {
  const navRoutes = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/history">History</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/pricing">Pricing</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#0f0f0f] shadow-xl fixed top-0 left-0 right-0 z-50 sm:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navRoutes}
          </ul>
        </div>
        <Link href="/" className="flex justify-center items-center gap-2">
          <FaBrain className="text-violet-600 text-xl"></FaBrain>
          <span className="bg-clip-text text-transparent font-bold text-2xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            IntelliChat
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navRoutes}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image src={user} alt="user-image"></Image>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
