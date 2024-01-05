import {useDispatch, useSelector} from "react-redux";
import {Container, Pagination, Row} from "react-bootstrap";
import Card_car_lesser_then_md from "../../HomePage/Body/Card_car_lesser_then_md";
import Card_car_bigger_then_md from "../../HomePage/Body/Card_car_bigger_then_md";
import {createRef, useEffect, useMemo, useRef, useState} from "react";
import {setLargerThenMd, setLesserThenMd} from "../../../Jwt/Reducers/Funcionality/Actions/Actions";
import axios from "axios";
import {useLoaderData} from "react-router-dom";


const url = "http://localhost:8080/api/jcars/cars";

const All = () => {

    const cars = useLoaderData().res;

    const {sizeChanged} = useSelector((state) => state.size);
    const [isBigger, setIsBigger] = useState(false);
    const dispatch = useDispatch();
    const [active, setActive] = useState(0);
    const [pagesOfCards, setPagesOfCards] = useState({})

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

    return (<Container>
        <Row className={"mt-3 gap-3"} xs={1} md={1} lg={1} xl={1}>
            <Row className={"mt-3 gap-3"} xs={1} md={1} lg={1} xl={1}>
                {pagesOfCards['1'] !== undefined && pagesOfCards[`${active}`].map((car, index) => {
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
    </Container>)
}

export const loader = async () => {
    const res = await axios.get(url)
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

export default All;