import React, { Suspense } from "react";
import Header from "../componentes/Header/Header";
import GetProductos from "../componentes/productos/GetProductos";

function Productos() {
    return (
        <>
            <div>
                <Header />
                <Suspense fallback={<h2>Cargando...</h2>}>
                    {<GetProductos />}
                </Suspense>
            </div>
        </>
    );
}

export default Productos;