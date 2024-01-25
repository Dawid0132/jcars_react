import {Col, Container,Row} from "react-bootstrap";
import Promotions from "../../../Data_jsons/HomePage/promotions.json"
import {useSelector} from "react-redux";

export const Promotions_component = () => {

    const {sizeChanged} = useSelector((state) => state.size);

    return (<Container className={"mt-5 text-white"}>
            <Row>
                <div className={"col-12 border-warning border-5 border-start"}><h1
                    className={"text-white ps-3"}>Promocje</h1></div>
            </Row>
            <Row className={"gap-3 mt-3"}>
                {Promotions.promotions.map((item, index) => {
                    if (index < 2) {
                        return (<Col className={"p-4"} style={{
                                backgroundColor: '#3E3E3E'
                            }} xl={4} lg={4} md={4} sm={12} xs={12}>
                                <h1>{item.title}</h1>
                                <div className={"border-warning border-5 border-bottom w-25"}></div>
                                <div className={"mt-2"}>{item.description}</div>
                            </Col>)
                    } else if (index > 1 && index < 3) {
                        return (<Col className={"p-4"} style={{
                            backgroundColor: '#3E3E3E'
                        }} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h1>{item.title}</h1>
                            <div className={"border-warning border-5 border-bottom w-25"}></div>
                            <div className={"mt-2"}>{item.description}</div>
                        </Col>)
                    }
                })}
            </Row>
        </Container>)
}

export default Promotions_component;