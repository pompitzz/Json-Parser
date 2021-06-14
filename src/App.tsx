import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Temp from './pages/Temp';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Temp2 from './pages/Temp2';
import MainTemplate from './components/MainTemplate';

export type RouteContext = {
  text: string;
  path: string;
  icon: JSX.Element;
  component: JSX.Element;
}
const routeContexts: RouteContext[] = [
  {
    text: 'Temp',
    path: '/temp',
    icon: <InboxIcon />,
    component: <Temp />
  },
  {
    text: 'Temp2',
    path: '/temp2',
    icon: <InboxIcon />,
    component: <Temp2 />
  }
];

function App() {
  return (
    <div>
      <CssBaseline />
      <MainTemplate routeContexts={routeContexts} />
    </div>
  );
}

export default App;
