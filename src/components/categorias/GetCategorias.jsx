import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Aside from "../Aside";
import Footer from "../Footer";
import Navbar from "../Navbar";

const GetCategorias = () => {
    
    const getCategorias = async() => {
        
          
          fetch("http://localhost/codeigniter3-api-rest/index.php/Api/Categorias")
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
      getCategorias();
    }, [])
    
  return (
    <>
        <Navbar />
        <Aside />
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Categorías registradas </h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link to="/menu" className="small-box-footer">Inicio</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    <Link to="/mCategorias" className="small-box-footer">Categorías</Link>
                                </li>
                                <li className="breadcrumb-item active">Registradas</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
            </section>
        </div>
    </>
  )
}

export default GetCategorias;