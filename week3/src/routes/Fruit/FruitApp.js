import React, { useState, useEffect } from 'react'
import CalorieForm from '../../components/Fruit/CalorieForm';
import FruitInfo from '../../components/Fruit/FruitInfo';
import FruitBar from '../../components/Fruit/FruitBar';
import FruitHeader from '../../components/Fruit/FruitHeader';
import FruitModal from '../../components/Fruit/FruitModal';
import axios from 'axios';
import './FruitApp.css';
var key = 'c77fc2e552658ed04486628ae7e2613edf8c61d5';


function FruitApp() {
    const bananaInfo = {family: "Musaceae", genus: "Musa", nutritions : {
        "calories": 96, "carbohydrates": 22, "fat": 0.2, "protein": 1, "sugar": 17.2
    }} ;
    const bananaEmoji = {"slug": "banana", "character": "🍌",}

    const [fruit, setFruit] = useState("banana");
    const [fruitInfo, setFruitInfo] = useState(bananaInfo);
    const [calories, SetCalories] = useState(1700);
    const [fruitEmoji, setFruitEmoji] = useState(bananaEmoji);
    const [showModal, setModal] = useState(false);


    useEffect(() => {
    const apiUrl1 = `http://localhost:8080/fruityvice.com/api/fruit/${fruit}`;
    axios.get(apiUrl1).then((res) => {
        const {data} = res;
        setFruitInfo(data);
    }).catch((error) => {
        // TODO: we only manage the response here, handle the error as well.
        // Specifically, show the modal when the error response is 404. 
        // 404 here means that the fruitInfo does not exist.

    });
    const defaultEmoji = {"slug": 'green-salad', character: '🥗'};
    const apiUrl2 = `http://localhost:8080/emoji-api.com/emojis?search=${fruit}&access_key=${key}`;
    axios.get(apiUrl2).then((res) => {
        const {data} = res;
        setFruitEmoji(data[0]);
    }).catch((error) => {
        // TODO: we only manage the response here, handle the error as well.
        // Specifically, set the fruit emoji to the default fruit emoji.
        // console log that the emoji does not exist
        
    });
    }, [fruit]);

    return (
    <div className='main-container'>
        <FruitModal showModal={showModal} onHide={() => setModal(false)}/>
        <CalorieForm calorieSetter={cals => SetCalories(cals)}/>
        <div className='fruit-container'>
            <FruitBar fruitSetter={fruit => setFruit(fruit)}/>
            <FruitHeader label={fruitEmoji.slug} symbol={fruitEmoji.character} fruitCals={fruitInfo.nutritions.calories} cals={calories}/>
            <FruitInfo fruitData={fruitInfo}/>
        </div>
    </div>
    );
}
export default FruitApp;