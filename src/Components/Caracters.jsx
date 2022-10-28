import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Caracters = () => {
  const [caracters, setCaracters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCaracters(data.results));
  }, []);

  return (
    <div className="container">
      <div className="row gap-2 flex-wrap justify-content-center">
        {caracters.map((caracter) => (
          <div className="col-auto col-md-5 col-lg-auto mb-3 mb-md-0">
            <div className="card bg-transparent" style={{ width: "18rem" }}>
              <img src={caracter.image} alt={caracter.name} />
              <div className="card-body">
                <h2 className="name fs-5">{caracter.name}</h2>
                <p className="status">Status: {caracter.status}</p>
                <p className="species">Species: {caracter.species}</p>
                <p className="origin">Origin: {caracter.origin.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caracters;
