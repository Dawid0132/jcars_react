import Card_benefits from "./Card_benefits";

import Benefits from "../../../Data_jsons/benefits.json";
import {Col, Container, Row} from "react-bootstrap";

const Header_component = () => {

    return (
        <Container>
            <Container className={"mt-5"}>
                <Row>
                    <div className={"col-12 border-5 border-start border-warning text-white"}>
                        <h1 className={"ps-3"}>Wypożyczalnia samochodów klasy premium</h1></div>
                    <Col className={"mt-3"} lg={12} xl={12} md={12} sm={12} xs={12}>
                        <Row>
                            {Benefits.benefits.map((item, i) => (
                                <Card_benefits
                                    key={`benefit${i}`}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )

}

export default Header_component;