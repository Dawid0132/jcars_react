import {Button, Col, Container, FloatingLabel, Form, Image, Row} from "react-bootstrap";
import Add from "./Adds";
import Reservation_Card from "./Reservation_Card";
import {useLoaderData} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import PaymentMethod from "./PaymentMethod";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_LIST_ADD} from "../../Jwt/Actions/Type";

const url = "http://localhost:8080/api/jcars";

function yearsExpiration() {
    const years = [];
    let currentYear = new Date().getFullYear();
    for (let i = 0; i < 10; i++) {
        years.push(currentYear);
        currentYear = currentYear + 1;
    }
    return years;
}


const Reservation = () => {

    const car = useLoaderData().res;

    const reservation = useSelector((state) => state.reservation);

    const dispatch = useDispatch();

    const [limits, setLimits] = useState([])

    const [adds, setAdds] = useState([]);

    const [paymentMethods, setPaymentMethods] = useState([{
        id: 1, name: "Płacę kartą - Niska kaucja", src: "/check-circle-fill.svg"
    }, {
        id: 2, name: "Płacę przy odbiorze", src: "/check-circle-fill.svg"
    }])

    const [paymentMethod, setPaymentMethod] = useState(0);

    const [months, setMonths] = useState(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]);

    const [years, setYears] = useState(yearsExpiration);


    async function fetchLimits() {
        await axios.get(`${url}/getlimits`).then((resp) => {
            setLimits(resp.data);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    }

    async function fetchAdds() {
        await axios.get(`${url}/getAllAdds`).then((resp) => {
            setAdds(resp.data);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    }

    useEffect(() => {
        fetchLimits();
        fetchAdds();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (<Container className={"text-white d-flex flex-column mt-5"}>
        <Form onSubmit={handleSubmit}>
            <div>
                <h1 className={"fw-bold"}>Rezerwacja</h1>
                <div className={"border-5 border-warning border-bottom w-25"}></div>
            </div>
            <div className={"d-flex flex-row gap-5 mt-5"}>
                <div className={"d-flex flex-column gap-5"}>
                    <h3 className={"border-5 border-warning border-start"}><span
                        className={"ps-2 fw-bold"}>Dane najemcy</span>
                    </h3>
                    <Row className={"gap-2"}>
                        <Col md>
                            <FloatingLabel label={"Imię i nazwisko"}
                                           controlId="floatingTextarea">
                                <Form.Control className={"bg-dark text-white"}
                                              value={reservation.firstname}
                                              placeholder="Imię i nazwisko"
                                              onChange={(e) => {
                                                  /*dispatch(fullname(e.currentTarget.value));*/
                                                  dispatch({
                                                      type: ADD_TO_LIST_ADD,
                                                      payload: {firstname: e.currentTarget.value}
                                                  })
                                              }}
                                />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel label={"NIP(opcjonalnie)"}
                                           controlId="floatingTextarea1">
                                <Form.Control value={reservation.nip} onChange={(e) => {
                                    /*dispatch(nip(e.currentTarget.value))*/
                                    dispatch({
                                        type: ADD_TO_LIST_ADD,
                                        payload: {nip: e.currentTarget.value}
                                    })
                                }} className={"bg-dark text-white"} placeholder="NIP(opcjonalnie)"/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className={"gap-2"}>
                        <Col md>
                            <FloatingLabel label={"Adres zameldowania"}
                                           controlId="floatingTextarea2">
                                <Form.Control value={reservation.address} onChange={(e) => {
                                    /*dispatch(address(e.currentTarget.value))*/
                                    dispatch({
                                        type: ADD_TO_LIST_ADD,
                                        payload: {address: e.currentTarget.value}
                                    })
                                }} className={"bg-dark text-white"} placeholder="Adres zameldowania"/>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel label={"Kod pocztowy"}
                                           controlId="floatingTextarea3">
                                <Form.Control value={reservation.zipcode} onChange={(e) => {
                                    /*dispatch(zipcode(e.currentTarget.value))*/
                                    dispatch({
                                        type: ADD_TO_LIST_ADD,
                                        payload: {zipcode: e.currentTarget.value}
                                    })
                                }} className={"bg-dark text-white"} placeholder="Kod pocztowy"/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className={"gap-2"}>
                        <Col md>
                            <FloatingLabel label={"Miejsowość"}
                                           controlId="floatingTextarea4">
                                <Form.Control value={reservation.city} onChange={(e) => {
                                    /*dispatch(city(e.currentTarget.value))*/
                                    dispatch({
                                        type: ADD_TO_LIST_ADD,
                                        payload: {city: e.currentTarget.value}
                                    })
                                }} className={"bg-dark text-white"} placeholder="Miejsowość"/>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel label={"Kod Stałego Klienta"}
                                           controlId="floatingTextarea5">
                                <Form.Control value={reservation.promotioncode} onChange={(e) => {
                                    /*dispatch(promotioncode(e.currentTarget.value))*/
                                    dispatch({
                                        type: ADD_TO_LIST_ADD,
                                        payload: {promotioncode: e.currentTarget.value}
                                    })
                                }} className={"bg-dark text-white"} placeholder="Kod Stałego Klienta"/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className={"gap-2"}>
                        <Col md>
                            <FloatingLabel label={"telefon"}
                                           controlId="floatingTextarea6">
                                <Form.Control value={reservation.phone} onChange={(e) => {
                                    /*dispatch(phone(e.currentTarget.value))*/
                                    dispatch({
                                        type: ADD_TO_LIST_ADD,
                                        payload: {phone: e.currentTarget.value}
                                    })
                                }} className={"bg-dark text-white"} placeholder="telefon"/>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel label={"E-mail"}
                                           controlId="floatingTextarea7">
                                <Form.Control value={reservation.email} onChange={(e) => {
                                    /*dispatch(email(e.currentTarget.value))*/
                                    dispatch({
                                        type: ADD_TO_LIST_ADD,
                                        payload: {email: e.currentTarget.value}
                                    })
                                }} className={"bg-dark text-white"} placeholder="E-mail"/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className={"gap-2"}>
                        <Col md>
                            <FloatingLabel label={"Numer prawa jazdy"}
                                           controlId="floatingTextarea8">
                                <Form.Control value={reservation.carlicense} onChange={(e) => {
                                    /*dispatch(carlicense(e.currentTarget.value))*/
                                    dispatch({
                                        type: ADD_TO_LIST_ADD,
                                        payload: {carlicense: e.currentTarget.value}
                                    })
                                }} className={"bg-dark text-white"} placeholder="Numer prawa jazdy"/>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel label={"Numer dokumentu tożsamości"}
                                           controlId="floatingTextarea9">
                                <Form.Control className={"bg-dark text-white"}
                                              value={reservation.documentid}
                                              onChange={(e) => {
                                                  /*dispatch(documentid(e.currentTarget.value))*/
                                                  dispatch({
                                                      type: ADD_TO_LIST_ADD,
                                                      payload: {documentid: e.currentTarget.value}
                                                  })
                                              }}
                                              placeholder="Numer dokumentu tożsamości"/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6} lg={6} md={6}>
                            <FloatingLabel label={"Pesel"}
                                           controlId="floatingTextarea10">
                                <Form.Control value={reservation.personid} onChange={(e) => {
                                    /*dispatch(personid(e.currentTarget.value))*/
                                    dispatch({
                                        type: ADD_TO_LIST_ADD,
                                        payload: {personid: e.currentTarget.value}
                                    })
                                }} className={"bg-dark text-white"} placeholder="Pesel"/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                </div>
                <div className={"d-flex flex-row justify-content-end w-50"}>
                    <Reservation_Card
                        car={car}
                        limit={limits}
                    />
                </div>
            </div>
            <h3 className={"border-5 border-warning border-start mt-5"}><span
                className={"ps-2 fw-bold"}>Dodatkowo</span>
            </h3>
            <Row className={"row-gap-3 mt-3"}>
                {adds.map((add) => {
                    return (<Add
                        key={add.id}
                        add={add}
                    />)
                })}
            </Row>
            <h3 className={"border-5 border-warning border-start mt-5"}><span className={"ps-2 fw-bold"}>Płatność</span>
            </h3>
            <Row className={"row-gap-3 mt-3"}>
                {paymentMethods.map((method, index) => {
                    return (<PaymentMethod
                        key={index}
                        method={method}
                        isActive={paymentMethod === index}
                        setpayment={() => setPaymentMethod(index)}
                    />)
                })}
                {paymentMethod === 0 && (<Row>
                    <Col xl={4} lg={4} md={4}>
                        <Form.Label htmlFor="card_number">Numer karty płatniczej</Form.Label>
                        <Form.Control className={"p-2"}
                                      type="text"
                                      id="card_number"
                        />
                    </Col>
                    <Form.Group xl={1} lg={1} md={1} as={Col} controlId="card_expiration">
                        <Form.Label>Ważność</Form.Label>
                        <Form.Select defaultValue="" className={"p-2"}>
                            {months.map((month) => (<option key={month}>{month}</option>))}
                        </Form.Select>
                    </Form.Group>
                    <Col xl={1} lg={1} md={1} className={"d-flex flex-column align-items-center justify-content-end"}>
                        <div className={"h1"}>/</div>
                    </Col>
                    <Form.Group xl={2} lg={2} md={2} as={Col} controlId="card_expiration1"
                                className={"d-flex flex-column align-items-end justify-content-end"}>
                        <Form.Select className={"p-2"}>
                            {years.map((year) => (<option key={year}>{year}</option>))}
                        </Form.Select>
                    </Form.Group>
                    <Col xl={1} lg={1} md={1}>
                        <Form.Label htmlFor="cvv">Kod CVV</Form.Label>
                        <Form.Control
                            type="text"
                            id="cvv"
                            className={"p-2"}
                        />
                    </Col>
                </Row>)}
                {paymentMethod === 1 && (<Col>
                    <h5>Płace przy odbiorze - Akceptujemy płatności kartą, gotówką i przelewem.</h5>
                </Col>)}
            </Row>
            <h3 className={"border-5 border-warning border-start mt-5"}><span
                className={"ps-2 fw-bold"}>Zostaw wiadomość</span>
            </h3>
            <Col xl={6} lg={6} md={6} xs={12} sm={12} className={"mt-3"}>
                <FloatingLabel label={"Zostaw wiadomość"}
                               controlId="floatingTextarea7">
                    <Form.Control style={{
                        height: "200px"
                    }} className={"bg-dark text-white"} placeholder="Zostaw wiadomość"/>
                </FloatingLabel>
            </Col>
            <div className={"d-flex flex-column gap-3 mt-3 mb-3"}>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Znam i akceptuję regulamin oraz politykę prywatności JCars"
                />
                <Form.Check
                    disabled={paymentMethod === 1}
                    type="switch"
                    label="Wyrażam zgodę na obciążenie mojej karty płatniczej kosztem najmu oraz kosztem przyszłych transakcji."
                    id="disabled-custom-switch"
                />
            </div>
            <div className={"d-flex flex-row justify-content-start"}>
                <Button type={"submit"} onClick={handleSubmit} variant={"outline-warning"}>
                    Rezerwacja
                </Button>
            </div>
        </Form>
    </Container>)
}


export const loader = async ({params}) => {
    const res = await axios.get(`${url}/cars/${params.id}`)
        .then((resp) => {
            return resp.data;
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    return {res}
}

export default Reservation;