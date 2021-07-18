import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const FichaOrganizacion = () => {
  const { id } = useParams();

  const organizacion = {
    id,
    imgURL:
      "data:image/jpeg;base64,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",
    nombre: "Organizacion 4",
    proposito: "Proposito organizacion 4",
    fundacion: "Fundacion organizacion 4",
    pagWeb: "www.oganizacion4.com",
    direccion: "Calle 4 Ciudad 4 Pais 4",
    alcance: "Nacional",
    costoNacional: 25,
  };

  return (
    <main className="container d-flex flex-wrap">
      <div className="mx-4 mt-2">
        <h2>Ficha Organización</h2>
        <Card>
          <img className="img-fluid" src={organizacion.imgURL} alt="" />
        </Card>
      </div>

      <div className="col mx-4 mt-2">
        <h3>{organizacion.nombre}</h3>

        <Card>
          <div className="col-12">
            <p>
              <b>Proposito: </b> {organizacion.proposito}
            </p>
            <p>
              <b>Fundación: </b> {organizacion.fundacion}
            </p>
            <p>
              <b>Página web: </b> {organizacion.pagWeb}
            </p>
            <p>
              <b>Dirección: </b> {organizacion.direccion}
            </p>
            <p>
              <b>Alcance: </b> {organizacion.alcance}
            </p>
            <p>
              <b>Costo envío Nacional: </b> {organizacion.costoNacional}
            </p>
            {organizacion.costoInternacional ? (
              <p>
                <b>Costo envió Internacional: </b>{" "}
                {organizacion.costoInternacional}
              </p>
            ) : (
              ""
            )}
          </div>
        </Card>
      </div>
    </main>
  );
};

export default FichaOrganizacion;