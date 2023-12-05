import {Col, Container, Nav, Row} from "react-bootstrap";

const Footer_component = () => {
    return (<Container>
        <Row className={"text-white row-gap-3"}>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className={"border-5 border-start border-warning h2"}><span className={"ps-2"}>O nas</span>
                </div>
                <div className={"mt-3"}>
                    Zapewniamy dostęp do bogatej floty różnorodnych samochodów klasy premium. Oferujemy również
                    wiele usług związanych z przewozami autami osobowymi lub busami.
                    Nie ograniczamy się do stałej floty pojazdów i gamy usług – nieustannie się rozwijamy, aby
                    Klient mógł czuć się w pełni usatysfakcjonowany współpracą z naszą wypożyczalnią.
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={2} xl={2}>
                <div className={"border-5 border-start border-warning h2"}><span className={"ps-2"}>Menu</span>
                </div>
                <Nav defaultActiveKey="/home" className="flex-column align-items-start">
                    <Nav.Link style={{
                        padding: "0", marginTop: "5px"
                    }} href="/home" className={"text-white fw-bold"}>Nasza flota</Nav.Link>
                    <Nav.Link style={{
                        padding: "0", marginTop: "5px"
                    }} href="/home" className={"text-white fw-bold"}>Blog</Nav.Link>
                </Nav>
            </Col>
            <Col xs={12} sm={12} md={12} lg={2} xl={2}>
                <div className={"border-5 border-start border-warning h2"}><span
                    className={"ps-2"}>Informacje</span></div>
                <Nav defaultActiveKey="/home" className="flex-column align-items-start">
                    <Container>
                        <Row xs={2} sm={2} md={3} lg={1} xl={1}>
                            <Nav.Link style={{
                                padding: "0", marginTop: "5px"
                            }} href="/home" className={"text-white fw-bold"}>Kontakt</Nav.Link>
                            <Nav.Link style={{
                                padding: "0", marginTop: "5px"
                            }} href="/home" className={"text-white fw-bold"}>Regulamin serwisu</Nav.Link><Nav.Link
                            style={{
                                padding: "0", marginTop: "5px"
                            }} href="/home" className={"text-white fw-bold"}>Polityka prywatności</Nav.Link><Nav.Link
                            style={{
                                padding: "0", marginTop: "5px"
                            }} href="/home" className={"text-white fw-bold"}>Umowa najmu</Nav.Link><Nav.Link style={{
                            padding: "0", marginTop: "5px"
                        }} href="/home" className={"text-white fw-bold"}>Regulamin wynajmu</Nav.Link>
                        </Row>
                    </Container>
                </Nav>
            </Col>
            <Col xs={12} sm={12} md={12} lg={2} xl={2}>
                <div className={"border-5 border-start border-warning h2"}><span className={"ps-2"}>Kontakt</span>
                </div>
                <Nav defaultActiveKey="/home" className="flex-column align-items-start">
                    <Nav.Link style={{
                        padding: "0", marginTop: "5px"
                    }} href="/home" className={"text-white fw-bold"}>+48 777 777 777</Nav.Link>
                    <Nav.Link style={{
                        padding: "0", marginTop: "5px"
                    }} href="/home" className={"text-white fw-bold"}>example@gmail.com</Nav.Link>
                </Nav>
            </Col>
        </Row>
    </Container>)
}

export default Footer_component;