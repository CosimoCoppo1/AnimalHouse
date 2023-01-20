import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import apiUrl from '../../config'

const Leaderboard = () => {

    const [leaderboard, setLeaderboard] = useState([])

    const getLeaderboard = async () => {
        if(localStorage.userId){
            try {
                const { data } = await axios.get(`http://${apiUrl}/scores/game/quiz`)
                setLeaderboard(data)  
                console.log(data)
            } catch (error) {
                console.log(error);
            }

        }
    };

 
    useEffect(() => {
        getLeaderboard()  
    }, []);

    return (
        <div className='Leaderboard'>  
            {
                leaderboard.map((score, id) => {
                    return (
                        <Card
                            style={{ height: '3rem'}}
                            className="text-center mx-auto"
                        >
                            <Card.Body>
                                <Card.Title>{score.user.username}{"           "}{score.bestScore}</Card.Title>                                
                            </Card.Body>
                        </Card>                        
                      );
                })
            }
                                      
        </div>
    )
}

export default Leaderboard