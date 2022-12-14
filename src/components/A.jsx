import Link from "next/dist/client/link";
import Router from 'next/router';
import styles from '../../styles/Header.module.scss';

export default function A({ text, href, onClick }) {

  return (
    <Link href={href}>
      <a onClick={e => {
        e.preventDefault();
        onClick && onClick(e);
        Router.replace(href);
      }} className={styles.link}>{text}</a>
    </Link>
  )
}
