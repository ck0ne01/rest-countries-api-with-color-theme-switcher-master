import styles from './Detail.module.css';

function Detail({ setShowDetail }) {
  return (
    <div className={styles.content}>
      <h2>Detail Page</h2>
      <button onClick={setShowDetail}>Back</button>
    </div>
  );
}

export default Detail;
