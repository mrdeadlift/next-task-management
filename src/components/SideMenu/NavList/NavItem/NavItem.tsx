"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
    label: string;
    link: string;
    icon: React.ReactNode;
    }

const NavItem : React.FC<NavItemProps> = ({
    label,
    link,
    icon
}) => {
    const pathName = usePathname();
  return (
    <Link href={link}>
        <div className={`flex items-center gap-4 px-4 py-2 hover:bg-gray-700 cursor-pointer 
             ${pathName === link ? "bg-gray-600 border-r-4 border-r-green-400" : ""}`}>
            {icon}
            <span>{label}</span>
        </div>
    </Link>
  )
}

export default NavItem