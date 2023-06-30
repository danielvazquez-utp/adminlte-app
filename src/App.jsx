import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TopNavigation from './components/TopNavigation';
import LoginBox from './components/LoginBox';
import { useState } from 'react';
import BlankPage from './components/BlankPage';
import AddProduct from './components/AddProduct';
import ListProducts from './components/ListProducts';
import Menu from './components/Menu';
import MenuCategoria from './components/categorias/MenuCategoria';
import AddCategoria from './components/categorias/AddCategoria';

const App = () => {

  const [location, setLocation] = useState('blank');

  const getLocation = () => {
    if (location == 'login' ) {
      return (
        <LoginBox />
      )
    }
    if (location == 'topnav') {
      document.body.classList.add('layout-top-nav');
      document.body.classList.remove('sidebar-mini');
      return (
        <TopNavigation />
      )
    }
    if (location == 'addform') {
      return (
        <AddForm />
      )
    }
    if (location == 'listform') {
      return (
        <ListForm />
      )
    }
    if (location == 'blank') {
      document.body.classList.add('sidebar-mini');
      document.body.classList.remove('layout-top-nav');
      return (
        <BlankPage />
      )
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <LoginBox /> } />
        <Route path="/menu" element={ <Menu /> } />
        <Route path="/top" element={ <TopNavigation /> } />
        <Route path="/add" element={ <AddProduct /> } />
        <Route path="/list" element={ <ListProducts /> } />
        <Route path="/blank" element={ <BlankPage /> } />
        
        {/* Categorias */}
        <Route path="/mCategorias" element={ <MenuCategoria /> } />
        <Route path="/addCategoria" element={ <AddCategoria /> } />

      </Routes>
    </BrowserRouter>
  )
}

export default App;