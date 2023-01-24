import React, { useEffect, useState } from "react";
import axios from 'axios'
import Reservation from "./Reservation";
import apiUrl from '../../config'

const MyReservations = () => {

    const [reservs, setReservs] = useState([])

    const getReservations = async () => {
        if(localStorage.userId){
            try {
                const { data } = await axios.get(`http://${apiUrl}/bookable_services/reservation`)
                let today = new Date().toJSON()
                console.log(data)
                setReservs(data.filter(r => localStorage.userId === r.user._id && r.bookable_service.day.split("T")[0] >= today.split("T")[0] )) 
            } catch (error) {
                console.log(error);
            }

        }
    };

    useEffect(() => {
        getReservations()  
      }, []);

    return (
        <div className='Posts'>  
            {
                reservs.map((reserv, id) => {

                    let time = reserv.bookable_service.day;
                    time = time.split("T");
                    let date = time[0];
                    let orario = time[1].split(".")[0];

                    return <Reservation data={reserv} date={date} orario={orario} key={id} />;
                })
            }
                                      
        </div>
    )
}

export default MyReservations