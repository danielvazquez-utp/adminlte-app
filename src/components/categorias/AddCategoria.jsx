import { Link } from 'react-router-dom';

import Aside from "../Aside";
import Footer from "../Footer";
import Navbar from "../Navbar";

const AddCategoria = () => {
  return (
    <>
        <Navbar />
        <Aside />
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Agregar Categoría </h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link to="/menu" className="small-box-footer">Inicio</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    <Link to="/mCategorias" className="small-box-footer">Categorías</Link>
                                </li>
                                <li className="breadcrumb-item active">Agregar</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className='row'>
                    <div className='col-xs-12 col-md-6'>
                        <div className="card card-info">
                            <div className="card-header">
                                <h4 className="card-title">
                                    Agregar nueva categoría
                                </h4>
                            </div>
                            <div className="card-body">
                                        <div className='form-group'>
                                            <label>Nombre de la categoría</label>
                                            <input type='text' placeholder='Escribir aquí' name='nombre' id='nombre' className='form-control' />
                                        </div>
                                        <div className='form-group'>
                                            <label>Activo</label>
                                            <select className='form-control' name='activo' id='activo'>
                                                <option>-Seleccionar-</option>
                                                <option value={1}>Si</option>
                                                <option value={2}>No</option>
                                            </select>
                                        </div>
                            </div>
                            <div className="card-footer">
                                <button className='btn btn-secondary'>Cancelar</button>
                                <button className='btn btn-info btn-lg float-right'>Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </>
  )
}

export default AddCategoria;