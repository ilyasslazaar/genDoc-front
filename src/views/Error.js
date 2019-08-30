import React, {Component} from 'react';
import {Alert, Button, Container} from "shards-react";

class Error extends Component {
  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        <br/><br/><br/><br/>
        <div className="error__content">
          <h2>404</h2>
          <h3>Page non trouvé!</h3>
          <p>Cliquez "Retour" pour retourner à la page d'acceuil.</p>
          <Button pill>&larr; Retour</Button>
        </div>
      </Container>
    );
  }
}

export default Error;
