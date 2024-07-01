import { Outlet } from 'react-router-dom';
import React from 'react';

class AuthLayout extends React.Component {
  render(): React.ReactNode {
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
}

export { AuthLayout };