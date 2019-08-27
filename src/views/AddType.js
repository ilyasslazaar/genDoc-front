import React, { Component } from "react";
import { Container, Row, Col, Card, ListGroup, ListGroupItem, FormInput, Form, Button } from "shards-react";
import CustomFileUpload from "../components/components-overview/CustomFileUpload";
import PageTitle from "../components/common/PageTitle";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

import axios from 'axios'
class AddType extends Component {

  state = {
    typeDTO: {
      "name": "",
      "template": ""
    },
    template: null,
  }
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(e) {

    this.setState({
      typeDTO: {
        "template": e.target.files[0].name
      },
    })
    this.setState({ file: e.target.files[0] })
  }
  handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: e.target.typeName.value,
      template: this.state.typeDTO.template
    }
    this.setState({ data: data },
      () => {
        const template = new FormData();
        template.append("template", this.state.file)
        axios.post("http://localhost:8080/services/gendoc/api/type/create", template, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          params: {
            data: data
          }
        })
          .then((response) => {
            if (response.status == 200) {
              this.setState({
                toggleDownloadBtn: true,
              });
            }
          });
      }
    )
  }
  render() {
    return (<Container fluid className="main-content-container px-4 pb-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
      </Row>

      <Row>
        {/* Editor */}
        <Col lg="12" md="12">
          <Card small className="mb-12">
            <ListGroup>
              <ListGroupItem>
                <h5 className="m-0">
                  Ajouter un nouveau type
              </h5>
              </ListGroupItem>
              <ListGroupItem>
                <Col md="12" className="form-group">
                  <Form onSubmit={this.handleSubmit}>
                    <fieldset className="contact-fieldset">

                      <Row form>
                        <Col md="6" className="form-group" >
                          <label >Type</label>
                          <FormInput name="typeName" type="text" />
                        </Col>

                        <Col md="6" className="form-group" >

                          <label >Template</label>
                          <div className="custom-file mb-3">
                            <input onChange={this.handleChange.bind(this)} type="file" className="custom-file-input" id="customFile2"
                              accept=".docx,.doc" name="template" />
                            <label className="custom-file-label" htmlFor="customFile2">Choisissez un fichier...</label>
                          </div>

                        </Col>
                      </Row>
                      <Button outline theme="primary" className="mb-2 mr-1" type="submit">Créer</Button>
                      <Button outline theme="secondary" className="mb-2 mr-1" type="reset">Vider</Button>

                    </fieldset>
                  </Form>
                </Col>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>

        {/* Sidebar Widgets */}
        <Col lg="3" md="12">

        </Col>
      </Row>
    </Container>);
  }
}

export default AddType;
