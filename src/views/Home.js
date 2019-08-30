import React from 'react';
import {Alert, Card, Container, Row} from "shards-react";
import PageTitle from "../components/common/PageTitle";

const Home = (props) => {
  return (
    <Container>
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Bienvenue au service GenDoc"
                   subtitle="gendoc"
                   className="text-sm-left"/>
      </Row>
        <Alert className="alert-warning">
          Connecter vous!
        </Alert>
    </Container>
  );
};

export default Home;
