import { useRef, useState } from "react";
import { Form, InputGroup, Button, Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filters = ({tofilter}) => {
	
    const [service, setService] = useState("All");
	function Service() {
		return (          
            <Form.Group controlId="formSelect">
                <Form.Label>Select Service</Form.Label>
                <Form.Control
                    as="select"
                    type="string"
                    value={service}
                    onChange={e => {
                        console.log("e.target.value", e.target.value);
                        setService(e.target.value);
                    }}
                >
                <option value="All">All</option>
                <option value="Toilettatura">Toilettatura</option>
            </Form.Control>
        </Form.Group>
		);
	}

    const [location, setLocation] = useState("All");
	function Location() {
		return (          
            <Form.Group controlId="formSelect">
                <Form.Label>Select Location</Form.Label>
                <Form.Control
                    as="select"
                    type="string"
                    value={location}
                    onChange={e => {
                        console.log("e.target.value", e.target.value);
                        setLocation(e.target.value);
                    }}
                >
                <option value="All">All</option>
                <option value="Bologna">Bologna</option>
                <option value="Firenze">Firenze</option>
            </Form.Control>
        </Form.Group>
		);
	}


    const [selectDate, setSelectDate] = useState(new Date());
	function SelectDate() {
		return (
            <Form.Group controlId="formSelect">
                <Form.Label>Select Date</Form.Label>
                    <DatePicker selected={selectDate} onChange={(e) => setSelectDate(e)} />	
            </Form.Group>
		);
	}


	return (
		<Container>
			<Form
				onSubmit={(e) =>
					tofilter(
						e,
						service,
                        location,
						selectDate
					)
				}
			>
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
				
				<Row className="text-center" style={{ paddingBottom: "1rem" }}>
					<Col>
						<Button type="submit" className="w-100">
							Cerca
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
}

export default Filters
