import React, { Component } from "react";
import { Container, Row, Col, Card, ListGroup, ListGroupItem, FormInput, Form, Button } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTypeURL } from '../constants/defaultValues'
import axios from 'axios'
class AddType extends Component {

  state = {
    typeDTO: {
      "typeName": "",
      "template": "Choisissez un fichier..."
    },
    template: null,
  }
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    if (e.target.files.length > 0) {
      this.setState({
        typeDTO: {
          "template": e.target.files[0].name
        },
        labelName: e.target.files[0].name
      })
      this.setState({ file: e.target.files[0] })
    }
    else {
      this.setState({
        typeDTO: {
          "typeName": "",
          "template": "Choisissez un fichier..."
        }
      })
    }
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
        axios.post(createTypeURL, template, {
          headers: {
            Authorization: localStorage.getItem("token"),
            'Content-Type': 'multipart/form-data'
          },
          params: {
            data: data
          }
        })
          .then((response) => {
            if (response.status == 200) {
              if (response.data) {
                toast.success("Un nouveau type de document a été crée avec le nom " + data.name, {
                  position: toast.POSITION.TOP_RIGHT,
                });
              }
              else toast.error("Un type avec le nom " + data.name + " existe deja", {
                position: toast.POSITION.TOP_RIGHT,
              });
            }
            else {
              toast.error("Erreur lors de la création du type.")
            }
          }).catch(function (error) {
            toast.error(error.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          });

      }
    )
  }
  render() {
    return (<Container fluid className="main-content-container px-4 pb-4">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Créer un type" subtitle="Add-type" className="text-sm-left" />
      </Row>

      <Row>
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
                          <FormInput name="typeName" type="text" required />
                        </Col>

                        <Col md="6" className="form-group" >

                          <label >Template</label>
                          <div className="custom-file mb-3">
                            <input onChange={this.handleChange.bind(this)} type="file" className="custom-file-input" id="customFile2"
                              accept=".docx,.doc" name="template" required />
                            <label className="custom-file-label" htmlFor="customFile2">{this.state.typeDTO.template}</label>
                          </div>
                        </Col>
                      </Row>
                      <Button outline theme="primary" className="mb-2 mr-1" type="submit">Créer</Button>
                      <Button outline theme="secondary" className="mb-2 mr-1" type="reset">Vider</Button>
                      <ToastContainer />

                    </fieldset>
                  </Form>
                </Col>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col lg="3" md="12">
        </Col>
      </Row>
    </Container>);
  }
}

export default AddType;
