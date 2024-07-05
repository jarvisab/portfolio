import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ links, onClickAction }) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`menu-link ${pathname === link.path ? 'navlink-active' : ''}`}
          onClick={onClickAction ? onClickAction : undefined}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}