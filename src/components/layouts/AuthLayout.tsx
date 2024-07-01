import { Outlet } from 'react-router-dom';

const AuthLayout = () =>  {
    return (
      <div className='wrapper'>
        <main className="main main_auth">
          <div className="main__container container">
            <Outlet />
          </div>
        </main>
      </div>
    );
}

export { AuthLayout };