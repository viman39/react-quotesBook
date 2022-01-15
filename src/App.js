import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Quotes from './pages/Quotes'
import Layout from './components/layout/Layout'
import LoadingSpinner from './components/UI/LoadingSpinner'

const NewQuote = React.lazy(() => import('./pages/NewQuote')) 
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails")); 

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
        <Switch>
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/quote/:quoteId">
            <QuoteDetails />
          </Route>
          <Route path="/new-quote" exact>
            <NewQuote />
          </Route>
          <Route path="/">
            <Redirect to="/quotes"></Redirect>
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
