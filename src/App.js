import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import Header from "./components/Header";
import Row from "./components/Row";
import Container from "./components/Container";
import Col from "./components/Col";
import CharacterCard from "./components/CharacterCard";


import characters from "./characters.json";




// const App  = () => 

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Wrong!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(characters);
    this.setState({ characters: shuffledFriends });
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          title="Riverdale Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        {/* <Header>
          Click on a Character, but only once!
        </Header> */}

        <Container>
          <Row>
            {this.state.characters.map(character => (
              <Col size="md-3 sm-6">
                <CharacterCard
                  key={character.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={character.id}
                  image={character.image}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;

//   // eslint-disable-next-line no-unused-expressions
//   <Router>
//     <div>
//       <Navbar />
//       <Wrapper>
//           {/* <Route exact path='/' component={About} />
//           <Route exact path='/about' component={About} />
//           <Route exact path='/discover' component={Discover} />
//           <Route exact path='/search' component={Search} /> */}
//       </Wrapper>
//       <Footer />
//     </div>
//   </Router> 


// export default App;
