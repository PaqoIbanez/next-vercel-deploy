import Link from 'next/link';
import { DarkLayout } from '../components/layouts/DarkLayout';
import { MainLayout } from '../components/layouts/MainLayout';
import styles from "../components/layouts/MainLayout.module.css";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>

      <h1 className={'title'}>
        Ir al <Link href='/about'> About </Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.js</code>
      </p>
    </>
  )
}

HomePage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}