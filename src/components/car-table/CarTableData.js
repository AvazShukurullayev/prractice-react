import React, {useEffect} from 'react';

const CarTableData = () => {
    const carData = () => {
        const carArray = [
            {
                carName: "Malibu",
                carPrice: 28000
            },
            {
                carName: "Captive",
                carPrice: 27000
            },
            {
                carName: "Spark",
                carPrice: 7000
            },
            {
                carName: "Damas",
                carPrice: 10000
            }
        ]
        return carArray
    }
    useEffect(() => {
        carData()
    }, []);
    return (
        <div className="container">
            <table className="table table-responsive table-hover table-striped table-light">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Car name</th>
                    <th>Car Price</th>
                </tr>
                </thead>

                <tbody>
                {carData().map((item, index) => {
                    return <tr key={item.carName}>
                        <td>{index + 1}</td>
                        <td>{item.carName}</td>
                        <td>{item.carPrice}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
};

export default CarTableData;