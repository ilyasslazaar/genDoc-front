import React from "react";
import {
  Container, Row, Col, FormSelect, Card, Form,
  ListGroupItem, ListGroup, FormTextarea
}
  from "shards-react";
import PageTitle from "../components/common/PageTitle";
import TypesList from "../data/types-list";
import Other from "../components/forms/Other";
import CV from "../components/forms/Cv";
import AttestationStage from "../components/forms/AttestationDeStage";
import AttestationTravail from "../components/forms/AttestationDeTravail";
import Facture from "../components/forms/Facture";


class GenerateDoc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      types: TypesList(),
      selectedType: null,
      selectedTypeName: null
    };
    this.handleChangedSelection = this.handleChangedSelection.bind(this);
  }

  handleChangedSelection(event) {
    this.setState({ selectedType: event.target.value });
  }

  static renderSwitch(_selectedType) {
    switch (_selectedType) {

      case 'CV':
        return <CV type="CV" />;
      case 'Attestation de stage':
        return <AttestationStage type="ATTESTATION_DE_STAGE" />;
      case 'Attestation de travail':
        return <AttestationTravail type="ATTESTATION_DE_TRAVAIL" />;
      case 'Facture':
        return <Facture type="FACTURE" />;
      //case 'Other':
      //return <Other />;
      default:
        return <Other type={_selectedType} />;
    }
  }

  render() {
    const _types = this.state.types;
    const _selected = this.state.selectedType;
    let card = ""

    if (_selected !== null) {
      card =
        <Card small className="mb-12">
          <ListGroup>
            <ListGroupItem>
              <h5 className="m-0">
                {_selected}
              </h5>
            </ListGroupItem>
            <ListGroupItem>
              <Col md="12" className="form-group">
                {GenerateDoc.renderSwitch(_selected)}
              </Col>
            </ListGroupItem>
          </ListGroup>
        </Card>

    }
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Générer un document" subtitle="generate-doc"
            className="text-sm-left" />
        </Row>
        <Card small className="mb-4">
          <ListGroup>
            <ListGroupItem>
              <h5 className="m-0">
                Choisissez le type du document:
              </h5>
            </ListGroupItem>
            <ListGroupItem>
              <Col md="5" className="form-group">
                <FormSelect id="selected-types"
                  onChange={this.handleChangedSelection}>
                  <option disabled selected value>
                    -
                  </option>
                  {_types.map(e => {
                    return <option>{e}</option>;
                  })}
                </FormSelect>
              </Col>
            </ListGroupItem>
          </ListGroup>
        </Card>
        {card}
        <br />
      </Container>
    );
  }
}

export default GenerateDoc;
