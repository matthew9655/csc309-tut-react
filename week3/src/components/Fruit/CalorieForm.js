import React, { useState, useEffect, useCallback } from 'react'
import './CalorieForm.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function CalorieForm(props) {
    const [sex, setSex] = useState("Female");
    const [age, setAge] = useState(20);
    const [weight, setWeight] = useState(48);
    const [height, setHeight] = useState(165);
    const [scale, setScale] = useState(1);
    const [calories, setCalories] = useState(1);

    function BMR(sex, weight, height, age) {
        if (sex === 'female') {
          return 655.1 + (9.563 * weight) + (1.850 * height) - (4.676)
        } else {
          return 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age)
        }
    }

    const caloriesCounter = useCallback((scale, sex, weight, height, age) => {
        const multiplier = {1: 1.2, 2: 1.375, 3: 1.55, 4: 1.725, 5: 1.9};
        return Math.round(multiplier[scale] * BMR(sex, weight, height, age));
        }, []);

    useEffect(() => {
        setCalories(caloriesCounter(scale, sex, weight, height, age));
        props.calorieSetter(caloriesCounter(scale, sex, weight, height, age));
      }, [sex, age, height, weight, scale, caloriesCounter, props]);


    return (
        <div className='calorie-container'>
            <Form.Select className="mb-3" value={sex} 
                onChange={e => setSex(e.target.value)} aria-label="Default select example">
                <option value="sex">sex</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
            </Form.Select>
            <InputGroup className="mb-3">
                <Form.Control placeholder="age" value={age} 
                onChange={e => setAge(e.target.value)} aria-label="age" />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control placeholder="height" value={height} 
                onChange={e => setHeight(e.target.value)} aria-label="height" />
                <InputGroup.Text>cm</InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control placeholder="weight" value={weight} 
                onChange={e => setWeight(e.target.value)} aria-label="weight" />
                <InputGroup.Text>kg</InputGroup.Text>
            </InputGroup>
            <Form.Select className="mb-3" value={scale} 
                onChange={e => setScale(e.target.value)} 
                placeholder="on a scale of 1-5 how often do you exercise?" 
                aria-label="Default select example">
                <option value="on a scale of 1-5 how often do you exercise?">on a scale of 1-5 how often do you exercise?</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Select>
            <p>Estimated Calories: {calories}</p>
        </div>
      );

}
export default CalorieForm;