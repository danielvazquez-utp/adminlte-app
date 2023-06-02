import TopNavigation from './components/TopNavigation';
import LoginBox from './components/LoginBox';
import { useState } from 'react';
import AddForm from './components/AddForm';
import ListForm from './components/ListForm';

const App = () => {

  const [location, setLocation] = useState('listform');

  const getLocation = () => {
    if (location == 'login' ) {
      return (
        <LoginBox />
      )
    }
    if (location == 'topnav') {
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
  }

  return (
    <>
      { getLocation() }
    </>
  )
}

export default App;