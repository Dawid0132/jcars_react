import {Button, Col, Container, FloatingLabel, Form, Image, Row} from "react-bootstrap";
import Add from "./Adds";
import Adds from "../../Data_jsons/Reservation/adds.json";


const Reservation = () => {
    return (<Container className={"text-white d-flex flex-column mt-5"}>
        <div className={"d-flex flex-row gap-5"}>
            <div className={"d-flex flex-column gap-5"}>
                <div>
                    <h1 className={"fw-bold"}>Rezerwacja</h1>
                    <div className={"border-5 border-warning border-bottom w-25"}></div>
                </div>
                <h3 className={"border-5 border-warning border-start"}><span
                    className={"ps-2 fw-bold"}>Dane najemcy</span>
                </h3>
                <Row className={"gap-2"}>
                    <Col md>
                        <FloatingLabel label={"Imię i nazwisko"}
                                       controlId="floatingTextarea">
                            <Form.Control className={"bg-dark text-white"} placeholder="Imię i nazwisko"/>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel label={"NIP(opcjonalnie)"}
                                       controlId="floatingTextarea1">
                            <Form.Control className={"bg-dark text-white"} placeholder="NIP(opcjonalnie)"/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className={"gap-2"}>
                    <Col md>
                        <FloatingLabel label={"Adres zameldowania"}
                                       controlId="floatingTextarea2">
                            <Form.Control className={"bg-dark text-white"} placeholder="Adres zameldowania"/>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel label={"Kod pocztowy"}
                                       controlId="floatingTextarea3">
                            <Form.Control className={"bg-dark text-white"} placeholder="Kod pocztowy"/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className={"gap-2"}>
                    <Col md>
                        <FloatingLabel label={"Miejsowość"}
                                       controlId="floatingTextarea4">
                            <Form.Control className={"bg-dark text-white"} placeholder="Miejsowość"/>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel label={"Kod Stałego Klienta"}
                                       controlId="floatingTextarea5">
                            <Form.Control className={"bg-dark text-white"} placeholder="Kod Stałego Klienta"/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className={"gap-2"}>
                    <Col md>
                        <FloatingLabel label={"telefon"}
                                       controlId="floatingTextarea6">
                            <Form.Control className={"bg-dark text-white"} placeholder="telefon"/>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel label={"E-mail"}
                                       controlId="floatingTextarea7">
                            <Form.Control className={"bg-dark text-white"} placeholder="E-mail"/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className={"gap-2"}>
                    <Col md>
                        <FloatingLabel label={"Numer prawa jazdy"}
                                       controlId="floatingTextarea8">
                            <Form.Control className={"bg-dark text-white"} placeholder="Numer prawa jazdy"/>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel label={"Numer dokumentu tożsamości"}
                                       controlId="floatingTextarea9">
                            <Form.Control className={"bg-dark text-white"} placeholder="Numer dokumentu tożsamości"/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6} lg={6} md={6}>
                        <FloatingLabel label={"Pesel"}
                                       controlId="floatingTextarea10">
                            <Form.Control className={"bg-dark text-white"} placeholder="Pesel"/>
                        </FloatingLabel>
                    </Col>
                </Row>
            </div>
            <div>

            </div>
        </div>
        <h3 className={"border-5 border-warning border-start mt-5"}><span className={"ps-2 fw-bold"}>Dodatkowo</span>
        </h3>
        <Row className={"row-gap-3 mt-3"}>
            {Adds.adds.map((add, i) => {
                return (<Add
                    key={`add${i}`}
                    add={add}
                />)
            })}
        </Row>
        <h3 className={"border-5 border-warning border-start mt-5"}><span className={"ps-2 fw-bold"}>Płatność</span>
        </h3>
        <Row className={"row-gap-3 mt-3"}>
            <Col lg={6} xl={6} md={6} xs={12} sm={12}>
                <div style={{
                    backgroundColor: "#3E3E3E"
                }} className={"fw-bold p-3 h-100"}>
                    Płacę kartą - Niska kaucja<Image
                    src={"/check-circle-fill.svg"}
                    className={"ms-3"}
                />
                </div>
            </Col>
            <Col lg={6} xl={6} md={6} xs={12} sm={12}>
                <div style={{
                    backgroundColor: "#3E3E3E",
                }} className={"fw-bold p-3 h-100"}>
                    Płacę przy odbiorze<Image
                    src={"/check-circle-fill.svg"}
                    className={"ms-3"}
                />
                </div>
            </Col>
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
                disabled
                type="switch"
                label="Wyrażam zgodę na obciążenie mojej karty płatniczej kosztem najmu oraz kosztem przyszłych transakcji.
"
                id="disabled-custom-switch"
            />
        </div>
        <div className={"d-flex flex-row justify-content-start"}>
            <Button variant={"outline-warning"}>
                Rezerwacja
            </Button>
        </div>
    </Container>)
}

export default Reservation;