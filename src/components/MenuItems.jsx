import { Link } from 'react-router-dom';
import BtnMainMenu from './botones/BtnMainMenu';

const MenuItems = () => {
    return (
        <>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Menú principal</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">Inicio</li>
                                    <li className="breadcrumb-item active">Menú principal</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">

                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>Agregar producto</h3>
                                    <p>&nbsp;</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag"></i>
                                </div>
                                <Link to="/add" className="small-box-footer">Ir a agregar producto <i className="fas fa-arrow-circle-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>Productos registrados</h3>
                                    <p>&nbsp;</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag"></i>
                                </div>
                                <Link to="/list" className="small-box-footer">Ir a productos registrados <i className="fas fa-arrow-circle-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <BtnMainMenu 
                                icono='fas fa-couch'
                                leyenda='Ir a Categorías '
                                ruta='/mCategorias'
                                titulo='Categorías'
                            />
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <BtnMainMenu titulo='Usuarios' leyenda='Ir a Usurios ' icono='fas fa-users' />
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <BtnMainMenu titulo='Entradas & Salidas' leyenda='Ir a Entradas & Salidas ' icono='fas fa-boxes' />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default MenuItems;