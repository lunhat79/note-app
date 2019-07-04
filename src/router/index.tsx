import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AsyncListPage = React.lazy(() => import('../pages/NoteListPage'));

const AsyncDetailDetail = React.lazy(() => import('../pages/NoteDetailPage'));

const RootRouter = (props:any) => {
  return (
    <React.Suspense fallback={<div />}>
      <Router basename={process.env.REACT_APP_BASENAME}>
        <Switch>
          <Route
            path="/"
            exact
            component={ (props: any) => <AsyncListPage {...props} />}
          />
           <Route
            path="/detail"
            exact
            component={ (props: any) => <AsyncDetailDetail {...props} />}
          />
          <Route
            path="/detail/:noteId"
            component={ (props: any) => <AsyncDetailDetail {...props} />}
          />
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default RootRouter;
