import React, { Component } from "react";
import QuoteMachine from "./components/QuoteMachine";
import { random } from "lodash";
import "typeface-roboto";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import Footer from "./components/Footer";
class App extends Component {
  //initialize state in the class constructor
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuote: null
    };
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.newQuoteIndex = this.newQuoteIndex.bind(this);
  }
  // this is the most appropriate lifecycle method for fetching external data
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then(data => data.json())
      .then(data => this.setState({ quotes: data }, this.newQuoteIndex));
  }

  get selectedQuote() {
    if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.selectedQuote)
    ) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuote];
  }

  generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return random(0, this.state.quotes.length - 1);
  }

  newQuoteIndex() {
    this.setState({ selectedQuote: this.generateNewQuoteIndex() });
  }

  nxtQuoteClickHandler() {
    console.log("clicked");
  }

  render() {
    console.log(this.state.selectedQuote);
    return (
      <Grid
        className={this.props.classes.container}
        id="quote-box"
        justify="center"
        container
      >
        <Grid xs={11} lg={8} item>
          {this.selectedQuote ? (
            <QuoteMachine
              selectedQuote={this.selectedQuote}
              newQuoteIndex={this.newQuoteIndex}
            />
          ) : null}
          <Footer />
        </Grid>
      </Grid>
    );
  }
}
//
const styles = {
  container: {
    alignItems: "center",
    display: "flex",
    height: "100vh"
  },
  footer: {
    alignItems: "center",
    display: "flex",
    height: "10vh"
  }
};

export default withStyles(styles)(App);
