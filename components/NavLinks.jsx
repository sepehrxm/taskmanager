import Link from 'next/link';
const links = [
  { href: '/tasks', label: 'All Tasks' },
  { href: '/todo', label: 'To Do' },
  { href: '/completed', label: 'Completed' },
];

const NavLinks = () => {
  return (
    <ul className='menu  text-base-content'>
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link href={link.href} className='capitalize text-lg font-semibold '>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default NavLinks;