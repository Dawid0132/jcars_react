import {Col, Image} from "react-bootstrap";

const Card_benefits = (props) => {

    return (
        <Col style={{
            backgroundColor: '#3E3E3E'
        }}
             className={"text-white gap-3"} lg={4} xl={4} md={6} sm={12} xs={12}>
            <div className={"d-flex flex-row"}>
                <Image src={"/check-circle-fill.svg"}/>
                <div className={"fw-bold text-center h4 ms-2"}>{props.title}</div>
            </div>
            <p>{props.description}</p>
        </Col>
    )
}


export default Card_benefits;