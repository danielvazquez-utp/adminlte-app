import React from 'react'
import BtnMainMenu from '../botones/BtnMainMenu';
import { Link } from 'react-router-dom';

const MenuCategoriaItems = () => {
    return (
        <>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Menú principal Categorías </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <Link to="/menu" className="small-box-footer">Inicio</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Categorías</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <BtnMainMenu titulo='Agregar Categoría' ruta='/addCategoria' />
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <BtnMainMenu />
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <BtnMainMenu />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default MenuCategoriaItems;