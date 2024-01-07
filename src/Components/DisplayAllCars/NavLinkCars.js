import {Dropdown, Nav, NavItem, NavLink} from "react-bootstrap";
import axios from "axios";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {Navigate} from "react-router";
import {useSelector} from "react-redux";

const url = "http://localhost:8080/api/jcars/car-brands";

const NavLinkCars = () => {

    const {models: brandModels} = useSelector((state) => state.models);

    const [brands, setBrands] = useState([]);
    const [loadingBrands, setLoadingBrands] = useState(true);

    useEffect(() => {
        const fetchBrands = async () => {
            setLoadingBrands(true);
            try {
                const {data: response} = await axios.get(url);
                setBrands(response)
            } catch (e) {
                console.error(e.message);
            }
            setLoadingBrands(false);
        }
        fetchBrands();
    }, [])


    return (<Nav fill={true} variant={"tabs"}>
        <Nav.Item>
            <Nav.Link href={"/cars"} className={"text-white"}>All</Nav.Link>
        </Nav.Item>
        <Dropdown as={NavItem}>
            <Dropdown.Toggle className={"text-white"} as={NavLink}>
                Brands
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {!loadingBrands && brands.map((brand) => {
                    return (<Dropdown.Item href={`/cars/brands/${brand.id}`} id={`${brand.id}`}>
                        {brand.name}
                    </Dropdown.Item>)
                })}
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={NavItem}>
            <Dropdown.Toggle className={"text-white"} as={NavLink}>
                Models
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {brandModels && brandModels.map((model) => {
                    return (<Dropdown.Item href={`/cars/models/${model.id}`} id={`${model.id}`}>
                        {model.name}
                    </Dropdown.Item>)
                })}
            </Dropdown.Menu>
        </Dropdown>
    </Nav>)
}

export default NavLinkCars;