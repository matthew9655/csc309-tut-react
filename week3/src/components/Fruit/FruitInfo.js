import ListGroup from 'react-bootstrap/ListGroup';
import './FruitInfo.css';

function FruitInfo(props) {
    const {name, family, genus, nutritions} = props.fruitData;
    const {calories, carbohydrates, fat, protein, sugar} = nutritions;
    const data = {'name': name, 'family': family, 'genus': genus, 'calories': calories, 'carbohydrates': carbohydrates,
    'fat': fat, 'protein': protein, 'sugar': sugar};
    return (
        <div className='fruit-info-container'>
        {['name', 'family', 'genus', 'calories', 'carbohydrates', 'fat', 'protein', 'sugar'].map((info) => (
            <ListGroup key={info} horizontal={info} className="my-2">
            <ListGroup.Item>{info}</ListGroup.Item>
            <ListGroup.Item>{data[info]}</ListGroup.Item>
            </ListGroup>
        ))}
        </div>
  );
}

export default FruitInfo;