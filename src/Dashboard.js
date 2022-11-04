import React, {useEffect} from 'react';
import Button from './components/Button';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';

function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem('Email');
    window.location.replace("/login");
  }
  useEffect(() => {
    if(localStorage.getItem('Email') == null) {
      window.location.replace("/login");
    }
  },[])
    return (
        <>
          <div className="container">
            <div className='row'>
              <div className='col-sm-10'>
                <PageTitle>TODO List</PageTitle>
              </div>
              <div className='col-sm-2' style={{marginTop: "25px"}}>
                <Button onClick={handleLogout}>Logout</Button>
              </div>
            </div>
            <div className={styles.app__wrapper}>
              <AppHeader />
              <AppContent />
            </div>
          </div>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                fontSize: '1.4rem',
              },
            }}
          />
        </>
      );
}

export default Dashboard;