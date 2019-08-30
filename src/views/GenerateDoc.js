import React from "react";
import {
  Container, Row, Col, FormSelect, Card,
  ListGroupItem, ListGroup
}
  from "shards-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "../components/common/PageTitle";
import { getTypesList } from "../commun/DataLists";
import Other from "../components/forms/Other";
import CV from "../components/forms/Cv";
import AttestationStage from "../components/forms/AttestationDeStage";
import AttestationTravail from "../components/forms/AttestationDeTravail";
import Facture from "../components/forms/Facture";
const style = { 'font-weight': '500' }

class GenerateDoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typesList: [],
      selectedType: null,
      selectedTypeName: null,
    };
    this.handleChangedSelection = this.handleChangedSelection.bind(this);

  }
  componentDidMount() {
    let typesNameList = []
    getTypesList().then(typesList => {
      typesList.map(typeName => { typesNameList.push(typeName.name) })
      this.setState({ typesList: typesNameList })
    }).catch(function (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    })
  }
  handleChangedSelection(event) {
    this.setState({ selectedType: event.target.value });
  }

  renderSwitch(selectedType) {
    switch (selectedType) {

      case 'CV':
        return <CV type={selectedType} />;
      case 'Attestation de stage':
        return <AttestationStage type={selectedType} />;
      case 'Attestation de travail':
        return <AttestationTravail type={selectedType} />;
      case 'Facture':
        return <Facture type={selectedType} />;
      default:
        return <Other type={selectedType} />;
    }
  }

  render() {
    const _selected = this.state.selectedType;
    let card = ""

    if (_selected !== null) {
      card =
        <Card small className="mb-12">
          <ListGroup>
            <ListGroupItem>
              <h5 style={style} className="m-0">
                {_selected}
              </h5>
            </ListGroupItem>
            <ListGroupItem>
              <Col md="12" className="form-group">
                {this.renderSwitch(this.state.selectedType)}
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
                  {
                    this.state.typesList.map(typeName =>
                      <option>{typeName}</option>)
                  }

                </FormSelect>
              </Col>
            </ListGroupItem>
          </ListGroup>
        </Card>
        {card}
        <br />
        <ToastContainer />

      </Container>
    );
  }
}


export default GenerateDoc;
