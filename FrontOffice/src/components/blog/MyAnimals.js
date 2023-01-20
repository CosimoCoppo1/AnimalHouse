import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import apiUrl from '../../config'

const MyAnimals = () => {

    const [animals, setAnimals] = useState([])

    const getAnimals = async () => {
        if(localStorage.userId){
            try {
                const { data } = await axios.get(`http://${apiUrl}/userPet/user/${localStorage.userId}`)
                setAnimals(data) 
            } catch (error) {
                console.log(error);
            }

        }
    };

    function animalVariant(animal){
        switch(animal) {
            case 'Cani':
                return 'Primary'
            case 'Gatti':
                return 'Dark'
            case 'Volatili':
                return 'Info'
            case 'Pesci':
                return 'Danger'
            case 'Tartarughe':
                return 'Success';
            case 'Roditori':
                return 'Secondary'
            default:
                return 'Info'
          }
    }

    useEffect(() => {
        getAnimals()  
    }, []);

    return (
        <div className='MyAnimals'>  
            {
                animals.map((animal, id) => {
                    return (
                        <Card
                            bg={animalVariant(animal.pet.name).toLowerCase()}
                            key={id}
                            text={ 'light'}
                            style={{ width: '18rem'}}
                            className="text-center mx-auto"
                        >
                            <Card.Header>Categoria: {animal.pet.name}</Card.Header>
                            <Card.Body>
                                <Card.Title>{animal.petName}</Card.Title>
                                <Card.Text>
                                    {animal.desc}
                                </Card.Text>
                            </Card.Body>
                        </Card>                        
                      );
                })
            }
                                      
        </div>
    )
}

export default MyAnimals