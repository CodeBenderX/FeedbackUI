import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';

function App() {
  return (
    <>
      <Header bgColor={'red'} textColor={'white'} />
      
      <div className="container">
        <FeedbackItem />  
      </div>
    </>
  );
}

export default App;