import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Encryption from '../components/encryption/encryption';
import TextAnonymizer from '../components/text/text';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Encryption />
      <TextAnonymizer />
    </div>
  )
}

export default Home
