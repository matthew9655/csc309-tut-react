import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './FruitBar.css';

function FruitBar(props) {
    const [newFruit, setNewFruit] = useState("");
    const submit = event => {
        event.preventDefault();
        props.fruitSetter(newFruit);
        setTimeout(function () {
            setNewFruit("");
        }, 1000);
      };
    return (
        <div className='bar-container'>
            <Form className='search-bar' onSubmit={e => submit(e)} >
                <Form.Group className="mb-3" controlId="fruitSearch">
                    <Form.Control value={newFruit} 
                onChange={e => setNewFruit(e.target.value)} type="text" placeholder="Search for a fruit" />
                </Form.Group>
                <Button type="submit" className="submit-button btn btn-primary">Submit</Button>
            </Form>
            
        </div>
        
    );
}

export default FruitBar;