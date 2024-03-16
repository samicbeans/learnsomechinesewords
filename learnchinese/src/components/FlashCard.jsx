import { useState } from 'react';
const FlashCard = () => {
    //define state variables
    const [showAnswer, setShowAnswer] = useState(false); //Dont show answer by default
    const [currIndex, setCurrIndex] = useState(0);

    const [userGuess, setUserGuess] = useState('');
    const [feedback, setFeedback] = useState('');
    const [inputClass, setInputClass] = useState(''); //marks correctness of user input
    const [cardPairs, setCardPairs] = useState([{question: "Pinyin and translation of 美國?", answer:"měi guó (America)"},
    {question: "Pinyin and translation of 中文?", answer:"zhōng wén (Chinese)"},
    {question: "Pinyin and translation of 大學生?", answer:"dà xué shēng (college student)"},
    {question: "Pinyin and translation of 朋友?", answer:"péng yǒu (friend)"},
    {question: "Pinyin and translation of 什麼?", answer:"shén me (what)"},
    {question: "Pinyin and translation of 家?", answer:"jiā (home; family)"},
    {question: "Pinyin and translation of 老師?", answer:"lǎo shī (teacher)"},
    {question: "Pinyin and translation of 電腦?", answer:"diàn nǎo (computer)"},
    {question: "Pinyin and translation of 練習?", answer:"liàn xí (to practice)"},
    {question: "Pinyin and translation of 明天見?", answer:"míng tiān jiàn (see you tomorrow)"}]);

    // //create list of card pairs
    // const originalCardPairs = [
    //     {question: "Pinyin and translation of 美國?", answer:"měi guó (America)"},
    //     {question: "Pinyin and translation of 中文?", answer:"zhōng wén (Chinese)"},
    //     {question: "Pinyin and translation of 大學生?", answer:"dà xué shēng (college student)"},
    //     {question: "Pinyin and translation of 朋友?", answer:"péng yǒu (friend)"},
    //     {question: "Pinyin and translation of 什麼?", answer:"shén me (what)"},
    //     {question: "Pinyin and translation of 家?", answer:"jiā (home; family)"},
    //     {question: "Pinyin and translation of 老師?", answer:"lǎo shī (teacher)"},
    //     {question: "Pinyin and translation of 電腦?", answer:"diàn nǎo (computer)"},
    //     {question: "Pinyin and translation of 練習?", answer:"liàn xí (to practice)"},
    //     {question: "Pinyin and translation of 明天見?", answer:"míng tiān jiàn (see you tomorrow)"}
    // ]

    //define setters
    const shuffleCards = () => {
        const shuffledCards = [...cardPairs].sort(() => Math.random() - 0.5);//Math.floor(Math.random() * cardPairs.length);
        setCurrIndex(0); // Reset index to the beginning
        setShowAnswer(false);
        setUserGuess('');
        setFeedback('');
        setInputClass('');
        setCardPairs(shuffledCards);
    };

    const handleNextClick = () => {
        const newIndex = currIndex + 1 < cardPairs.length ? currIndex + 1 : 0; //wrap to first card if currently at the end of list
        setShowAnswer(false); //so that the next card's answer is not revealed
        setCurrIndex(newIndex);
        setUserGuess('');
        setFeedback('');
        setInputClass('');
    };

    const handlePrevClick = () => {
        const newIndex = currIndex - 1 >= 0 ? currIndex - 1 : cardPairs.length - 1; //wrap to last card if currently at start of list
        setShowAnswer(false); // So that the previous card's answer is not revealed
        setCurrIndex(newIndex);
        setUserGuess('');
        setFeedback('');
        setInputClass('');
    };

    const handleInputChange = (e) => {
        setUserGuess(e.target.value);
    };

    const handleSubmit = () => {
        if (userGuess.trim().toLowerCase() === cardPairs[currIndex].answer.toLowerCase()) {
            setFeedback('Correct!');
            setInputClass('correct');

        } else {
            setFeedback('Incorrect. Try again.');
            setInputClass('incorrect');
        }
    };

    const flipCard = () => {
        if(showAnswer){
            setShowAnswer(false);
        }
        else{
            setShowAnswer(true);
        }
    };
    
    return (
        <>
        <h3>Number of cards: {cardPairs.length}</h3>
        <div className = "card-display" onClick={flipCard}>
            <p>{showAnswer ? cardPairs[currIndex].answer : cardPairs[currIndex].question}</p>
        </div>

        <input type="text" value={userGuess} onChange={handleInputChange} className={inputClass} placeholder="Enter pinyin (translation)" />
            <button className='submitbutton' onClick={handleSubmit}>Submit Guess</button>
        <p>{feedback}</p>

        <button className="prevbutton" onClick={handlePrevClick}>Previous Card←</button>
        <button className="nextbutton" onClick={handleNextClick}>Next Card→</button>
        <button className="shufflebutton" onClick={shuffleCards}>Shuffle Cards</button>
        </>
    )
}
export default FlashCard;