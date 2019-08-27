import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/style.css';
import Contact from './cv/Contact'
import Formation from './cv/Formation'
import Experience from './cv/Experience'
import Competence from './cv/Competence'
import Langue from './cv/Langue'
import Distinction from './cv/Distinction'
import Loisir from './cv/Loisir'
import axios from 'axios'
import { downloadFilesURL as downloadURL, gendocServiceURL as apiURL, styles } from '../../constants/defaultValues'
import { handleAdd, handleRemove } from '../../commun'

import {
  Col,
  Row,
  Form,
  Button
} from "shards-react";
class CV extends Component {
  state = {
    formationSection: [{ value: 0 }],
    experienceSection: [{ value: 0 }],
    competenceSection: [{ value: 0 }],
    languageSection: [{ value: 0 }],
    distinctionSection: [{ value: 0 }],
    formData: {
      "signed": false,
      "typeName": "CV",
      data: {
        contact: {},
        formations: [],
        experiences: [],
        competences: [],
        langues: [],
        distinctions: [],
        loisirs: []
      }
    }
  };
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();

    if (event.target.id === 'form') {
      let currentState = this.state.formData
      let distinctions = [], langues = [], competences = [], formations = [], experiences = []

      this.state.distinctionSection.map((item, i) => {

        const distinction =
        {
          "titre": event.target['titreDist' + i].value,
          "lieu": event.target['lieuDist' + i].value,
          "description": event.target['descriptionDist' + i].value,
          "annee": event.target['moisDist' + i].value + ' ' + event.target['anneeDist' + i].value
        }
        distinctions.push(distinction)


      })
      this.state.languageSection.map((item, i) => {

        const langue =
        {
          "langue": event.target['langue' + i].value,
          "niveau": event.target['niveau' + i].value
        }
        langues.push(langue)
      })

      this.state.competenceSection.map((item, i) => {

        const competence =
        {
          "titre": event.target['titreCompetence' + i].value,
          "description": event.target['competences' + i].value
        }
        competences.push(competence)

      })
      this.state.formationSection.map((item, i) => {

        const formation =
        {
          "anneeDebut": event.target['anneeDebutFormation' + i].value,
          "anneeFin": event.target['anneeFinFormation' + i].value,
          "lieu": event.target['lieuFormation' + i].value,
          "etablissement": event.target['etablissement' + i].value,
          "description": event.target['descriptionFormation' + i].value,
          "titre": event.target['diplome' + i].value
        }
        formations.push(formation)

      })
      this.state.experienceSection.map((item, i) => {

        const experience =
        {
          "anneeDebut": event.target['anneeDebutExperience' + i].value,
          "moisDebut": event.target['moisDebutExperience' + i].value,
          "anneeFin": event.target['anneeFinExperience' + i].value,
          "moisFin": event.target['moisFinExperience' + i].value,
          "titre": event.target['poste' + i].value,
          "lieu": event.target['lieu' + i].value,
          "description": event.target['description' + i].value,
          "societe": event.target['entreprise' + i].value,
        }
        experiences.push(experience)
        console.log("index : ", i)
      })
      const contact = {
        "bio": event.target.bio.value,
        "nom": event.target.nom.value,
        "prenom": event.target.prenom.value,
        "fonction": event.target.fonction.value,
        "adresse": event.target.adresse.value,
        "tel": event.target.tel.value,
        "email": event.target.email.value
      }
      currentState.data.langues = langues
      currentState.data.experiences = experiences
      currentState.data.formations = formations
      currentState.data.distinctions = distinctions
      currentState.data.competences = competences
      currentState.data.contact = contact

      currentState.data.loisirs = event.target.loisirs.value.split(",")
      console.log(currentState.data.loisirs)
      console.log('experiences : ', experiences)
      this.setState({ formData: currentState }, () => {
        axios.post(apiURL, {
          responseType: 'arraybuffer',
          headers: {
            'Accept': 'application/pdf'
          }
        }, { params: { data: this.state.formData } }).then((response) => {
          if (response.status === 200) {
            this.setState({
              toggleDownloadBtn: true,
              generatedFileName: response.data
            });
          }
        });
      })
      console.log(currentState)


    }

  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit} id="form" >
        <Row style={styles}>
          <Col md="6">
            <h4>Contact</h4>
          </Col>
        </Row>
        <Contact />
        <Row style={styles} >
          <Col md="6">
            <h4>Formation</h4>
          </Col>
        </Row>

        {this.state.formationSection.map((field, idx) => {
          return (
            <div key={`${field}-${idx}`}>
              <Formation idx={idx} add={handleAdd.bind(this, 'formationSection')} delete={handleRemove.bind(this, idx, 'formationSection')} />
            </div>

          );
        })}
        <Row style={styles} >
          <Col md="6">
            <h4>Expérience</h4>
          </Col>
        </Row>
        {this.state.experienceSection.map((field, idx) => {
          return (
            <div key={`${field}-${idx}`}>
              <Experience idx={idx} add={handleAdd.bind(this, 'experienceSection')} delete={handleRemove.bind(this, idx, 'experienceSection')} />
            </div>

          );
        })}

        <Row style={styles} >
          <Col md="6">
            <h4>Compétence</h4>
          </Col>
        </Row>
        {this.state.competenceSection.map((field, idx) => {
          return (
            <div key={`${field}-${idx}`}>
              <Competence idx={idx} add={handleAdd.bind(this, 'competenceSection')} delete={handleRemove.bind(this, idx, 'competenceSection')} />
            </div>

          );
        })}
        <Row style={styles} >
          <Col md="6">
            <h4>Langues</h4>
          </Col>
        </Row>
        {this.state.languageSection.map((field, idx) => {
          return (
            <div key={`${field}-${idx}`}>
              <Langue idx={idx} add={handleAdd.bind(this, 'languageSection')} delete={handleRemove.bind(this, idx, 'languageSection')} />
            </div>

          );
        })}

        <Row style={styles} >
          <Col md="6">
            <h4>Prix et distinctions</h4>
          </Col>
        </Row>
        {this.state.distinctionSection.map((field, idx) => {
          return (
            <div key={`${field}-${idx}`}>
              <Distinction idx={idx} add={handleAdd.bind(this, 'distinctionSection')} delete={handleRemove.bind(this, idx, 'distinctionSection')} />
            </div>
          );
        })}
        <Row style={styles} >
          <Col md="6">
            <h4>Loisirs</h4>
          </Col>
        </Row>
        <div>
          <Loisir />
        </div>
        <fieldset className="my-fieldset">

          <Button outline theme="primary" className="mb-2 mr-1" type="submit">Générer le document</Button>
          <Button outline theme="secondary" className="mb-2 mr-1" type="reset">Vider les champs</Button>
          {this.state.toggleDownloadBtn ? <a href={downloadURL + this.state.generatedFileName} > <button title="Télécharger le fichier PDF généré" type="button" className="mb-2 mr-1 btn btn-outline-success"><i className="fa fa-download" aria-hidden="true"></i></button></a> : ""}

        </fieldset>
      </Form>);
  }
}

export default CV;