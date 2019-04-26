import React from "react";
//import Button from "./Button";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteMachine = ({ newQuoteIndex, selectedQuote }) => (
  <Card>
    <CardContent>
      <Typography id="text" variant="h5" gutterBottom>
        <i class="fa fa-quote-left">{`"${selectedQuote.quote}"`}</i>
        <br />
        <br /> - <span id="author">{selectedQuote.author}</span>
      </Typography>
      <CardActions>
        <Button
          id="new-quote"
          color="secondary"
          variant="contained"
          size="small"
          onClick={newQuoteIndex}
        >
          Next Quote
        </Button>

        <IconButton
          id="tweet-quote"
          target="_blank"
          href={encodeURI(
            `https://twitter.com/intent/tweet?text=${
              selectedQuote.quote
            }&hashtags=thewebdevcoach`
          )}
        >
          <FontAwesomeIcon icon={faTwitter} size="md" />
        </IconButton>
      </CardActions>
    </CardContent>
  </Card>
);
export default QuoteMachine;
