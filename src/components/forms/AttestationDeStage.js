import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Responsable from './responsable/Responsable'
import { downloadPDFURL as downloadURL, gendocServiceURL as apiURL, styles } from '../../constants/defaultValues'

import {
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  Button
} from "shards-react";

class AttestationDeStage extends Component {
  state = { formData: {}, data: {}, toggleDownloadBtn: false, generatedFileName: "" }
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      formData: {
        "signed": event.target.signature.value,
        "typeName": this.props.type,
        "data": {
          "lieuLivraison": event.target.lieuLivraison.value,
          "dateLivraison": event.target.dateLivraison.value,
          "responsable": {
            "civilite": event.target.civiliteResponsable.value,
            "nom": event.target.nomResponsable.value,
            "prenom": event.target.prenomResponsable.value,
            "fonction": event.target.fonction.value,
            "societe": "Novelis"
          },
          "stagiaire": {
            "civilite": event.target.civiliteStagiaire.value,
            "nom": event.target.nomStagiaire.value,
            "prenom": event.target.prenomStagiaire.value,
            "cin": event.target.cinStagiaire.value,
            "dateDebut": event.target.dateDebutStage.value,
            "dateFin": event.target.dateFinStage.value
          }
        },
      }
    }, () => {
      axios.post(apiURL, null, {
        headers: {
          "Authorization": localStorage.getItem("token"),
          'Accept': 'application/pdf'
        },
        params: {
          data: this.state.formData
        }
      }).then((response) => {
        if (response.status == 200) {
          toast.success("Une nouvelle attestation de stage a été crée !", {
            position: toast.POSITION.TOP_RIGHT,
          });

          this.setState({
            toggleDownloadBtn: true,
            generatedFileName: response.data
          });
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
    return (
      <div>
        <Row style={styles} >
          <Col md="6">
            <h5>Responsable</h5>
          </Col>
        </Row>
        <Form onSubmit={this.handleSubmit} >
          <Responsable />

          <Row style={styles} >
            <Col md="6">
              <h5>Stagiaire</h5>
            </Col>
          </Row>

          <fieldset className="my-fieldset">

            <Row form>
              <Col className="form-group" >

                <label htmlFor="fePrenomStagiaire">Civilité</label>

                <FormSelect onChange={this.handleChange} name="civiliteStagiaire" required>
                  <option value="Mr">Mr</option>
                  <option value="Mme">Mme</option>
                  <option value="Mlle">Mlle</option>
                </FormSelect>
              </Col>
              <Col className="form-group" >
                <label htmlFor="fePrenomStagiaire">Nom</label>

                <FormInput
                  type="text"
                  placeholder="Nom"
                  name="nomStagiaire"
                  required
                />
              </Col>
            </Row>
            <Row form>

              <Col md="6" className="form-group">
                <label htmlFor="fePrenomStagiaire">Prénom</label>
                <FormInput
                  name="prenomStagiaire"
                  type="text"
                  placeholder="Prénom"
                  required
                />
              </Col>
              <Col md="6" className="form-group">
                <label htmlFor="feFonctionStagiaire">CIN</label>
                <FormInput
                  name="cinStagiaire"
                  type="text"
                  placeholder="N° CIN"
                  required
                />
              </Col>
            </Row>
            <Row form>

              <Col md="6" className="form-group">
                <label htmlFor="fePrenomStagiaire">Date de début du stage</label>
                <FormInput
                  name="dateDebutStage"
                  type="date"
                  required
                />
              </Col>
              <Col md="6" className="form-group">

                <label htmlFor="feFonctionStagiaire">Date de fin de stage</label>
                <FormInput
                  name="dateFinStage"
                  type="date"
                  required
                />
              </Col>
            </Row>
            <hr />
            <Row className="other-doc-info" form>
              <Col md="4" className="form-group">

                <label htmlFor="feSignature">Signature</label>
                <FormSelect name="signature" required>
                  <option value="true">Oui</option>
                  <option value="false">Non</option>
                </FormSelect>
              </Col>
              <Col md="4" className="form-group">

                <label htmlFor="feSignature">Date de livraison</label>
                <FormInput
                  name="dateLivraison"
                  type="date"
                  placeholder="Lieu"
                  required
                />
              </Col>
              <Col md="4" className="form-group">
                <label htmlFor="feFonctionResponsable">Lieu de livraison</label>
                <FormInput
                  name="lieuLivraison"
                  type="text"
                  placeholder="Lieu"
                  required
                />
              </Col>
            </Row>
            <br />
            <Button outline theme="primary" className="mb-2 mr-1" type="submit">Générer le document</Button>
            <Button outline theme="secondary" className="mb-2 mr-1" type="reset">Vider les champs</Button>

            {this.state.toggleDownloadBtn ? <a href={downloadURL + this.state.generatedFileName} > <button title="Télécharger le fichier PDF généré" type="button" className="mb-2 mr-1 btn btn-outline-success"><i className="fa fa-download" aria-hidden="true"></i></button></a> : ""}

          </fieldset>
          <ToastContainer />

        </Form>

      </div>);
  }
}


export default AttestationDeStage;
