  import {useEffect, useState} from "react";
  
  export default function CarList() {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_HOST}/cars`)
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setCars(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);

    return (
      <div className="bg-gray-900 py-3 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Nasz flota</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Nasza flota to starannie wyselekcjonowany zbiór najbardziej prestiżowych marek i modeli, które są synonimem elegancji, wydajności i nowoczesnej technologii.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto pl-0 mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {cars.map((car) => (
              <li key={car.name}>
                <a href={`/reservation/${car.id}`} class="no-underline hover:underline">
                    <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={car.imageUrl} alt="" />
                    <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">{car.model.brand.name} {car.model.name} {car.year}</h3>
                    <p className="text-base text-gray-300">Wynajem: {car.rentalPrice} zł / doba</p>
                    <p className="text-sm text-gray-500">Depozyt: {car.deposit} zł</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }