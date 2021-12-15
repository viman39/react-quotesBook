import { Route, useParams } from 'react-router-dom'
import { Fragment } from 'react';
import Comments from '../components/comments/Comments'
import HighlitedQuote from '../components/quotes/HighlightedQuote'

const QuoteDetails = () => {
    const params = useParams()
    const paramsId = params.quoteId;

    return (
      <Fragment>
        <HighlitedQuote text={`some quote ${paramsId}`} author="Meeee"></HighlitedQuote>
        <Route path={`/quote/${paramsId}/comments`}>
          <Comments />
        </Route>
      </Fragment>
    );
};

export default QuoteDetails;
