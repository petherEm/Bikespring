"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Our Bikes", path: "/our-bikes" },
];

const Nav = ({ containerStyles }) => {
  const pathname = usePathname();
  return (
    <nav classname={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${link.path === pathname && "text-accent"} ml-4`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
