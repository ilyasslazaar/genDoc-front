import React from "react";
import { Container, Row } from "shards-react";

import PageTitle from "./../components/common/PageTitle";

import TypesTable from "../components/tables/TypesTable";

const ShowTypes = () => {
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle title="Afficher les types" subtitle="show-types" className="text-sm-left mb-3" />
      </Row>
      <Row>
        <TypesTable />
      </Row>
      <br />
    </Container>
  );
};

export default ShowTypes;