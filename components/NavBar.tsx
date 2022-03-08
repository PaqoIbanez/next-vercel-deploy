import { ActiveLink } from './ActiveLink';
import styles from './NavBar.module.css';

export const NavBar = () => {

  const menuItems = [
    {
      href: '/',
      text: 'Home'
    },
    {
      href: '/about',
      text: 'About'
    },
    {
      href: '/contact',
      text: 'Contact'
    },
    {
      href: '/pricing',
      text: 'Pricing'
    },
  ];

  return (
    <nav className={styles.menu}>
      {
        menuItems.map(({ text, href }, i) => <ActiveLink key={i} text={text} href={href} />)
      }
    </nav>
  )
}
