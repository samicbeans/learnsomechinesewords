import { useState } from 'react';
const FlashCard = () => {
    //define state variables
    const [showAnswer, setShowAnswer] = useState(false); //Dont show answer by default
    const [currIndex, setCurrIndex] = useState(0);
    
    //create list of card pairs
    const cardPairs = [
        {question: "Pinyin and translation of 美國?", answer:"měi guó (America)"},
        {question: "Pinyin and translation of 中文?", answer:"zhōng wén (Chinese)"},
        {question: "Pinyin and translation of 大學生?", answer:"dà xué shēng (college student)"},
        {question: "Pinyin and translation of 朋友?", answer:"péng yǒu (friend)"},
        {question: "Pinyin and translation of 什麼?", answer:"shén me (what)"},
        {question: "Pinyin and translation of 家?", answer:"jiā (home; family)"},
        {question: "Pinyin and translation of 老師?", answer:"lǎo shī (teacher)"},
        {question: "Pinyin and translation of 電腦?", answer:"diàn nǎo (computer)"},
        {question: "Pinyin and translation of 練習?", answer:"liàn xí (to practice)"},
        {question: "Pinyin and translation of 明天見?", answer:"míng tiān jiàn (see you tomorrow)"}
    ]

    //define setters
    const handleNextClick = () => {
        const newIndex = Math.floor(Math.random() * cardPairs.length);
        setShowAnswer(false); //so that the next card's answer is not revealed
        setCurrIndex(newIndex);
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
        <button className = "nextbutton" onClick={handleNextClick}>Next Card→</button>
        </>
    )
}
export default FlashCard;