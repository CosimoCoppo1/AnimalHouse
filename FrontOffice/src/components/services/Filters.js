import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

const Filters = ({tofilter}) => {
	
    const [service, setService] = useState("Tutti");
	function Service() {
		return (  
			        
            <Form.Group controlId="formSelect">
                <Form.Label>Select Service</Form.Label>
                <Form.Control
                    as="select"
                    type="string"
                    value={service}
                    onChange={e => {
                        setService(e.target.value);
                    }}
                >
                <option value="Tutti">Tutti</option>
                <option value="Toilettatura">Toilettatura</option>
				<option value="Dog sitter">Dog sitter</option>
				<option value="Veterinario">Veterinario</option>
            </Form.Control>
        </Form.Group>
		);
	}

    const [location, setLocation] = useState("Tutti");
	function Location() {
		return (          
            <Form.Group controlId="formSelect">
                <Form.Label>Select Location</Form.Label>
                <Form.Control
                    as="select"
                    type="string"
                    value={location}
                    onChange={e => {
                        setLocation(e.target.value);
                    }}
                >
                <option value="Tutti">Tutti</option>
                <option value="Bologna">Bologna</option>
                <option value="Ancona">Ancona</option>
				<option value="Milano">Milano</option>
				<option value="Cagliari">Cagliari</option>
            </Form.Control>
        </Form.Group>
		);
	}

    const [selectDate, setSelectDate] = useState(undefined);

	function SelectDate() {
		return (  	
			<Form.Group controlId="formSelect">
				<Form.Label>Select Date</Form.Label>
				<Form.Control 
					type="date" 
					aria-label="selectDate"
					value={selectDate} 
					onChange={e => {
                       setSelectDate(e.target.value);
                    }} />
				</Form.Group>
		);
	}


	return (
		<Container>
			<Form>
				<Row>
					<Col bsPrefix="col">
						<Service />
					</Col>
				</Row>

                <Row>
					<Col bsPrefix="col">
						<Location />
					</Col>
				</Row>
				
				<Row>
					<Col bsPrefix="col">
						<SelectDate />
					</Col>
				</Row>
				<br/>
				<Row className="text-center" style={{ paddingBottom: "1rem" }}>
					<Col>
						<Button 
							onClick={(e) =>
								tofilter(
									e,
									service,
									location,
									selectDate,
									setSelectDate
								)} 
							className="w-100">
							Cerca
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
}

export default Filters
