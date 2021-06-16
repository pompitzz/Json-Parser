import InboxIcon from '@material-ui/icons/MoveToInbox';
import Temp2 from '../pages/Temp2';
import React from 'react';
import { Create } from '@material-ui/icons';
import JsonParserPage from '../pages/JsonParserPage';

export type RouteContext = {
  text: string;
  path: string;
  iconComponent: JSX.Element;
  pageComponent: JSX.Element;
}

const routes: RouteContext[] = [
  {
    text: 'Json Parser',
    path: '/json-parser',
    iconComponent: <Create />,
    pageComponent: <JsonParserPage />
  },
  {
    text: 'Temp2',
    path: '/temp2',
    iconComponent: <InboxIcon />,
    pageComponent: <Temp2 />
  }
];

export default routes;
