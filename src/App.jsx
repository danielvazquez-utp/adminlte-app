import TopNavigation from './components/TopNavigation';
import LoginBox from './components/LoginBox';
import { useState } from 'react';
import AddForm from './components/AddForm';
import ListForm from './components/ListForm';
import BlankPage from './components/BlankPage';

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
    <>
      { getLocation() }
    </>
  )
}

export default App;