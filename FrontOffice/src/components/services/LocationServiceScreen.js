import axios from "axios";
import BookService from './BookService'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import apiUrl from '../../config'

const LocationServiceScreen = () => {

    const { id } = useParams();

    const [services, setServices] = useState([])

    const getServicesByLocation = async (id) => {
        try {
            const { data } = await axios.get(`http://${apiUrl}/bookable_services/to-book/${id}`);
            setServices(data.filter(s => s.reservation_left > 0)) 
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { 
        getServicesByLocation(id)
    }, [id])

    return (
        <div className='homescreen'>
        
            <h2 className="text-center">Servizi disponibili nella sede selezionata</h2>

            <div className="mx-auto" style={{width: '50vw', height: '60vh' }}>  
                { services.length === 0 ? (
                    <h5>Siamo spiacenti ma non sono al momento disponibili servizi prenotabili in questa sede</h5>
                  ) :(
                    services.map((s) => {
                        
                    let time = s.day;
                    time = time.split("T");
                    let date = time[0];
                    let orario = time[1].split(".")[0];
    
                    return <BookService servizio={s} date={date} orario={orario}/>                    
                    })
                    )
                }                                        
            </div>
        </div>
    )
}

export default LocationServiceScreen