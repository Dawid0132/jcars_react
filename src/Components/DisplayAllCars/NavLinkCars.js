import {Dropdown, Nav, NavItem, NavLink} from "react-bootstrap";
import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const url = "http://localhost:8080/api/jcars/car-brands";

const url1 = "http://localhost:8080/api/jcars/car-models/brand/";

const NavLinkCars = () => {

    const [selectedBrand, setSelectedBrand] = useState(1);

    const [brands, setBrands] = useState([]);
    const [loadingBrands, setLoadingBrands] = useState(true);

    const [models, setModels] = useState([]);
    const [loadingModels, setLoadingModels] = useState(true);

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

    useEffect(() => {
        const fetchModels = async () => {
            setLoadingModels(true);
            try {
                const {data: response} = await axios.get(url1 + selectedBrand);
                setModels(response)
            } catch (e) {
                console.error(e.message);
            }
            setLoadingModels(false);
        }

        fetchModels();

    }, [selectedBrand])


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
                    return (
                        <Dropdown.Item href={`/cars/brands/${brand.id}`} id={`${brand.id}`} onClick={(e) => {
                            setSelectedBrand(e.currentTarget.id);
                        }}>
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
                {!loadingModels && models.map((model) => {
                    return (
                        <Dropdown.Item href={`/cars/models/${model.id}`} id={`${model.id}`} onClick={(e) => {

                        }}>
                            {model.name}
                        </Dropdown.Item>)
                })}
            </Dropdown.Menu>
        </Dropdown>
    </Nav>)
}

export default NavLinkCars;