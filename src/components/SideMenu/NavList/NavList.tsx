import React from "react";
import { FaRegCheckSquare, FaRegClock, FaTasks } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";

interface NavListProps {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {

  const navList: NavListProps[] = [
    {
      id: 1,
      label: "All Tasks",
      link: "/",
      icon: <FaTasks className="size-5"/>
    },
    {
      id: 2,
      label: "Completed Tasks",
      link: "/completed",
      icon: <FaRegCheckSquare className="size-5"/>
    },
    {
      id: 3,
      label: "Expired Tasks",
      link: "/expired",
      icon: <FaRegClock className="size-5"/>
    },
  ]
  return (
    <div className="mt-8">
        {navList.map((navItem) => (
          <NavItem key={navItem.id} label={navItem.label} link={navItem.link} icon={navItem.icon} />
        ))}
    </div>
  )
}

export default NavList