import './App.css';
import FlashCard from './components/FlashCard.jsx'



const App = () => {
  return (
    <div className="App">
      <div className='header'>
        <h1>Learn some Chinese words!</h1>
        <h2>How good is your Chinese? Test your knowledge of Chinese (Traditional) and Pinyin!</h2>
        <FlashCard></FlashCard>

      </div>
    </div>
  )
}

export default App