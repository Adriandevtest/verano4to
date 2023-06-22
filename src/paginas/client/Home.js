import React from "react";
import { refrescos } from "../../bd/datos";

function Home() {
  return (
    <div className="p-3">
      <div class="row row-cols-1 row-cols-md-4 g-3">
        {refrescos.map((refresco) => {
          return (
            <div class="col">
              <div class="card">
                <img src={refresco.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{refresco.nombre}</h5>
                  <p class="card-text">
                   {refresco.descripción}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
