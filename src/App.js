import { Route, Switch, Redirect } from 'react-router-dom'

import Quotes from './pages/Quotes'
import QuoteDetails from './pages/QuoteDetails'
import NewQuote from './pages/NewQuote'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
