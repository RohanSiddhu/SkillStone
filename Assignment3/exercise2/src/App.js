import styles from './App.module.css';

function App() {
  return (
    <div className={`App ${styles.textAlignCenter}`}>
      <h1 className={styles.headingColor}>Hello React</h1>
    </div>
  );
}

export default App;
