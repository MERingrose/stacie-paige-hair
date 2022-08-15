import React from 'react';
import Card from '../components/Card';

export default function Gallery(){
    return <div>
                <h1>THIS IS THE GALLERY!</h1>
        <Card src="./images/Brunette.jpg" alt="A brunette smiling" />
        <Card src="./images/Blonde.jpg" alt="A blonde smiling" />
        <Card src="./images/Balayage.jpg" alt="An example of balayage" />
    </div>
}
