import { Link } from 'react-router-dom';

const BtnMainMenu = ({ titulo="Titulo", ruta="/", leyenda="Ir a ...", icono="ion ion-bag" }) => {
  return (
    <>
        <div className="small-box bg-info">
            <div className="inner">
                <h3>{ titulo }</h3>
                <p>&nbsp;</p>
            </div>
            <div className="icon">
                <i className={ icono }></i>
            </div>
            <Link to={ ruta } className="small-box-footer">{ leyenda }<i className="fas fa-arrow-circle-right"></i></Link>
        </div>
    </>
  )
}

export default BtnMainMenu;