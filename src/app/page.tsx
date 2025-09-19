import '@/app/style.css'
import styles from "./page.module.css";
import About from "@/component/About/About";
import Start from '@/component/Start/Start';
import History from '@/component/History/History';
import Methods from '@/component/Methods/Methods';

import 'react-vertical-timeline-component/style.min.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Start />
      <Methods />
      <History />
    </main>
  );
}
