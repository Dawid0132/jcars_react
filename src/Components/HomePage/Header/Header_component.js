import Card_benefits from "./Card_benefits";

import Benefits from "../../../Data_jsons/HomePage/benefits.json";
import {Col, Container, Row} from "react-bootstrap";
import Carousel_header from "./Carousel_header";

const Header_component = () => {

    return (<Container>
            <Carousel_header/>
            <Container className={"mt-5"}>
                <Row>
                    <div className={"col-12 border-5 border-start border-warning text-white"}>
                        <h1 className={"ps-3"}>Wypożyczalnia samochodów klasy premium</h1></div>
                    <Container className={"mt-3"}>
                        <Row className={"row-gap-3"} lg={3} xl={3} md={2} sm={1} xs={1}>
                            {Benefits.benefits.map((item, i) => (<Card_benefits
                                    key={`benefit${i}`}
                                    title={item.title}
                                    description={item.description}
                                />))}
                        </Row>
                    </Container>
                </Row>
            </Container>
        </Container>)

}

export default Header_component;