import axios from "axios";
import {useLoaderData, useParams} from "react-router-dom";
import {useEffect} from "react";
import {Container, Pagination, Row} from "react-bootstrap";
import Card_car_lesser_then_md from "../../HomePage/Body/Card_car_lesser_then_md";
import Card_car_bigger_then_md from "../../HomePage/Body/Card_car_bigger_then_md";
import {useDispatch, useSelector} from "react-redux";
import {createRef, useRef, useState} from "react";
import {addModels, setLargerThenMd, setLesserThenMd} from "../../../Jwt/Reducers/Funcionality/Actions/Actions";

const url = "http://localhost:8080/api/jcars/cars/brand/";

const url1 = "http://localhost:8080/api/jcars/car-models/brand/";

const Brands = () => {

    let {id} = useParams();

    const cars = useLoaderData().res;
    const {sizeChanged} = useSelector((state) => state.size);
    const [isBigger, setIsBigger] = useState(false);
    const dispatch = useDispatch();
    const [active, setActive] = useState(0);
    const [pagesOfCards, setPagesOfCards] = useState({})


    useEffect(() => {
        const fetchModels = async () => {
            try {
                const {data: response} = await axios.get(url1 + id);
                dispatch(addModels(response));
            } catch (e) {
                console.error(e.message);
            }
        }
        fetchModels();
    }, [id])

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 992) {
                setIsBigger(false);
            } else {
                setIsBigger(true);
            }
        }

        window.addEventListener('resize', handleResize);
    })

    useEffect(() => {
        if (isBigger) {
            dispatch(setLargerThenMd())
        } else {
            dispatch(setLesserThenMd())
        }
    }, [isBigger, dispatch])


    useEffect(() => {
        const updatedArray = {...pagesOfCards};
        let foo = 0;
        updatedArray[`${foo}`] = [];
        cars.map((car, index) => {
            if (index % 5 === 0 && index !== 0) {
                foo++;
                updatedArray[`${foo}`] = [];
            }
            updatedArray[`${foo}`].push(car);
        })
        setPagesOfCards(updatedArray);
    }, [])


    const CreatePages = ({active, setActive}) => {
        let length = Math.ceil(cars.length / 5);
        const refs = useRef(Array.from({length: length}).map(() => createRef()))
        let items = [];

        useEffect(() => {
            refs.current[active].current.classList.add("active");
        }, [active])

        for (let i = 0; i < length; i++) {
            items.push(<Pagination.Item ref={refs.current[i]} id={i} onClick={(e) => {
                setActive(e.currentTarget.id)
            }} key={i}>
                {i + 1}
            </Pagination.Item>)
        }

        return (<>
            <Pagination>{items.map((item) => (<div>
                {item}
            </div>))}</Pagination>
        </>)
    }

    return (
        <Container>
            <Row className={"mt-3 gap-3"} xs={1} md={1} lg={1} xl={1}>
                <Row className={"mt-3 gap-3"} xs={1} md={1} lg={1} xl={1}>
                    {pagesOfCards['0'] !== undefined && pagesOfCards[`${active}`].map((car, index) => {
                        if (!sizeChanged) {
                            return (<Card_car_lesser_then_md
                                key={car.id}
                                car={car}
                            />)
                        } else {
                            return (<Card_car_bigger_then_md
                                key={car.id}
                                car={car}
                            />)
                        }
                    })}
                </Row>
            </Row>
            <CreatePages active={active} setActive={setActive}/>
        </Container>
    )
}

export const loader = async ({params}) => {
    const res = await axios.get(url + params.id)
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

export default Brands;