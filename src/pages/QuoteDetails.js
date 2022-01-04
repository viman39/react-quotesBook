import { Route, Link, useParams, useRouteMatch } from 'react-router-dom'
import { Fragment, useEffect } from 'react';
import Comments from '../components/comments/Comments'
import HighlitedQuote from '../components/quotes/HighlightedQuote'
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetails = () => {
    const match = useRouteMatch()
    const params = useParams()
    const { quoteId } = params;

    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

    useEffect(() => {
      sendRequest(quoteId)
    }, [sendRequest, quoteId])

    if ( status === 'pending' ){
      return <div className='centered'>
        <LoadingSpinner />
      </div>
    }

    if ( error ){
      return <p className="centered">{error}</p>
    }

    if ( !loadedQuote.text ){
      return <p>
        No quote Found
      </p>
    }

    return (
      <Fragment>
        <HighlitedQuote
          text={loadedQuote.text}
          author={loadedQuote.author}
        ></HighlitedQuote>
        <Route path={`${match.path}`} exact>
          <div className="centered">
            <Link className="btn--flat" to={`${match.url}/comments`}>
              Load Comments
            </Link>
          </div>
        </Route>
        <Route path={`${match.path}/comments`}>
          <Comments />
        </Route>
      </Fragment>
    );
};

export default QuoteDetails;
 