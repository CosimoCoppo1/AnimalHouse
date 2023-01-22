import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Row, Col } from "react-bootstrap";
import apiUrl from '../../config'

const Leaderboard = () => {

    const [leaderboard, setLeaderboard] = useState([])

    const getLeaderboard = async () => {
            try {
                const { data } = await axios.get(`http://${apiUrl}/scores/game/quiz`)
                setLeaderboard(data)  
            } catch (error) {
                console.log(error);
            }

    };

 
    useEffect(() => {
        getLeaderboard()  
    }, []);

    return (
        <div className='board'>  
            {[...leaderboard].map((score, pos) => {
                return (
                    <>
                        <Row>
                            <Col xs={2} md={2} lg={2}>
                                <p className="text-end fs-5">{pos + 1}</p>
                            </Col>
                            <Col xs={6} md={6} lg={6}>
                                <p className="text-cen fs-5">{score.user.username}</p>
                            </Col>
                            <Col xs={4} md={4} lg={4}>
                                <p className="text-center fs-5 fw-bold">
                                    {score.bestScore}
                                </p>
                            </Col>
                        </Row>
                    </>
                );
            })}                                        
        </div>
    )
}

export default Leaderboard