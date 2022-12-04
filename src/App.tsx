import { useState } from 'react';
import Detail from './components/details/Detail';
import Header from './components/Header';
import Overview from './components/overview/Overview';

function App() {
  const [showDetail, setShowDetail] = useState(false);
  const showDetailHanlder = () => {
    setShowDetail((prevState) => !prevState);
  };

  return (
    <>
      <Header />
      {/* TODO: Add context for detial country and showdetailhandler, maybe other states too */}
      {showDetail ? (
        <Detail setShowDetail={showDetailHanlder} />
      ) : (
        <Overview setShowDetail={showDetailHanlder} />
      )}
    </>
  );
}

export default App;
