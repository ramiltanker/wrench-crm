import { FC, Suspense } from 'react';
import classNames from 'classnames';
import { Header } from 'widgets/Header/ui/Header';
import { SideBar } from 'widgets/SideBar';
import { AppRouter } from './providers/router';

const App = () => {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="loading">
        <Header />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
