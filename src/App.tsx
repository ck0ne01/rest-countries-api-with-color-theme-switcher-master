import Header from './components/Header';

import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <section className={styles.content}></section>
    </>
  );
}

export default App;
