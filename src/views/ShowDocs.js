import React from "react";
import { Container, Row } from "shards-react";

import PageTitle from "./../components/common/PageTitle";

import DocsTable from "../components/tables/DocsTable";

const ShowTypes = () => {
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle title="Afficher les documents" subtitle="show-Docs" className="text-sm-left mb-3" />
      </Row>
      <Row>
        <DocsTable />
      </Row>
      <br />
    </Container>
  );
};

export default ShowTypes;