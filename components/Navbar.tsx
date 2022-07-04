import { ActiveLink } from "./ActiveLink";
import styles from './Navbar.module.css'

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
];

const Navbar = () => {
  return (
    <nav className={styles.menu_container}>
      {menuItems.map((m, i) => (<ActiveLink key={`${i}_${m.href}`} href={m.href} text={m.text} />))}
    </nav>
  );
};

export default Navbar;
