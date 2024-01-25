import {useDispatch, useSelector} from "react-redux";
import {Container, Pagination, Row} from "react-bootstrap";
import Card_car_lesser_then_md from "../../HomePage/Body/Card_car_lesser_then_md";
import Card_car_bigger_then_md from "../../HomePage/Body/Card_car_bigger_then_md";
import {createRef, useEffect, useMemo, useRef, useState} from "react";
import {setLargerThenMd, setLesserThenMd} from "../../../Jwt/Reducers/Funcionality/Actions/Actions";
import axios from "axios";
import {useLoaderData} from "react-router-dom";


const url = `${process.env.REACT_APP_API_HOST}/cars`;

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
            if (index % 4 === 0 && index !== 0) {
                foo++;
                updatedArray[`${foo}`] = [];
            }
            updatedArray[`${foo}`].push(car);
        })
        setPagesOfCards(updatedArray);
    }, [])


    const CreatePages = ({active, setActive}) => {
        let length = Math.ceil(cars.length / 4);
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

    return <div className="bg-gray-900 py-3">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <ul
        role="list"
        className="mx-auto pl-0 mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
      >
                       {pagesOfCards['1'] !== undefined && pagesOfCards[`${active}`].map((car, index) => {

return                 <li key={car.name}>
<a href={`/reservation/${car.id}`} class="no-underline hover:underline">
    <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={car.imageUrl} alt="" />
    <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">{car.model.brand.name} {car.model.name} {car.year}</h3>
    <p className="text-base text-gray-300">Wynajem: {car.rentalPrice} zł / doba</p>
    <p className="text-sm text-gray-500">Depozyt: {car.deposit} zł</p>
</a>
</li>;

})}
      </ul>
      <CreatePages active={active} setActive={setActive}/>
    </div>
  </div>;

    return (<Container>
        <Row className={"mt-3 gap-3"} xs={1} md={1} lg={1} xl={1}>
            <Row className={"mt-3 gap-3"} xs={1} md={1} lg={1} xl={1}>
                {pagesOfCards['1'] !== undefined && pagesOfCards[`${active}`].map((car, index) => {

                    return                 <li key={car.name}>
                    <a href={`/reservation/${car.id}`} class="no-underline hover:underline">
                        <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={car.imageUrl} alt="" />
                        <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">{car.model.brand.name} {car.model.name} {car.year}</h3>
                        <p className="text-base text-gray-300">Wynajem: {car.rentalPrice} zł / doba</p>
                        <p className="text-sm text-gray-500">Depozyt: {car.deposit} zł</p>
                    </a>
                    </li>;

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