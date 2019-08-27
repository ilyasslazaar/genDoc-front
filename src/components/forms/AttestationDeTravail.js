import React, { Component } from "react";
import '../../assets/style.css';
import Responsable from './responsable/Responsable'
import { downloadFilesURL as downloadURL, gendocServiceURL as apiURL, styles } from '../../constants/defaultValues'
import axios from "axios";

import {
    Row,
    Col,
    Form,
    FormInput,
    FormSelect,
    Button
} from "shards-react";

class AttestationDeTravail extends Component {
    state = { formData: {}, toggleDownloadBtn: false, generatedFileName: "" }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            formData: {
                "signed": event.target.signature.value,
                "typeName": "ATTESTATION_DE_TRAVAIL",
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
                    "collaborateur": {
                        "civilite": event.target.civiliteCollaborateur.value,
                        "nom": event.target.nomCollaborateur.value,
                        "prenom": event.target.prenomCollaborateur.value,
                        "cin": event.target.cinCollaborateur.value,
                        "cnss": event.target.cinCollaborateur.value,
                        "poste": event.target.posteCollaborateur.value,
                        "dateDebut": event.target.dateDebut.value,
                    }
                },
            }
        }, () => {
            axios.post(apiURL, {
                responseType: 'arraybuffer',
                headers: {
                    'Accept': 'application/pdf'
                }
            },
                {
                    params: {
                        data: this.state.formData
                    }
                }).then((response) => {
                    if (response.status == 200) {
                        this.setState({
                            toggleDownloadBtn: true,
                            generatedFileName: response.data
                        });
                    }
                });
        })
    }

    render() {
        return (<div>
            <Row style={styles} >
                <Col md="6">
                    <h4>Responsable</h4>
                </Col>
            </Row>
            <Form onSubmit={this.handleSubmit}>
                <Responsable />

                <Row style={styles} >
                    <Col md="6">
                        <h4>Collaborateur</h4>
                    </Col>
                </Row>
                <fieldset className="my-fieldset">
                    <Row form>
                        <Col className="form-group" >

                            <label htmlFor="fePrenomStagiaire">Civilité</label>

                            <FormSelect name="civiliteCollaborateur">
                                <option value="Mr">Mr</option>
                                <option value="Mme">Mme</option>
                                <option value="Mlle">Mlle</option>
                            </FormSelect>
                        </Col>
                        <Col className="form-group" >
                            <label htmlFor="fePrenomStagiaire">Nom</label>

                            <FormInput
                                type="text"
                                name="nomCollaborateur"
                                placeholder="Nom"
                            />
                        </Col>
                    </Row>
                    <Row form>

                        <Col md="6" className="form-group">
                            <label htmlFor="fePrenomStagiaire">Prénom</label>
                            <FormInput
                                name="prenomCollaborateur"
                                type="text"
                                placeholder="Prénom"
                            />
                        </Col>
                        <Col md="6" className="form-group">
                            <label htmlFor="feFonctionStagiaire">CIN</label>
                            <FormInput
                                name="cinCollaborateur"
                                type="text"
                                placeholder="N° CIN"
                            />
                        </Col>
                    </Row>
                    <Row form>

                        <Col md="4" className="form-group">
                            <label htmlFor="fePrenomStagiaire">CNSS</label>
                            <FormInput
                                name="cnssCollaborateur"
                                type="text"
                                placeholder="N° CNSS"
                            />
                        </Col>
                        <Col md="4" className="form-group">
                            <label htmlFor="feFonctionStagiaire">Poste</label>
                            <FormInput
                                type="text"
                                name="posteCollaborateur"
                                placeholder="EX : Ingénieur ..."
                            />
                        </Col>

                        <Col md="4" className="form-group">
                            <label htmlFor="fePrenomStagiaire">Date de début du contrat</label>
                            <FormInput
                                name="dateDebut"
                                type="month"
                            />
                        </Col>
                    </Row>
                    <hr />
                    <Row className="other-doc-info" form>
                        <Col md="4" className="form-group">

                            <label htmlFor="feSignature">Signature</label>
                            <FormSelect name="signature">
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
                            />
                        </Col>
                        <Col md="4" className="form-group">
                            <label htmlFor="feFonctionResponsable">Lieu de livraison</label>
                            <FormInput
                                name="lieuLivraison"
                                type="text"
                                placeholder="Lieu"
                            />
                        </Col>
                    </Row>
                    <Button outline theme="primary" className="mb-2 mr-1" type="submit">Générer le document</Button>
                    <Button outline theme="secondary" className="mb-2 mr-1" type="reset">Vider les champs</Button>

                    {this.state.toggleDownloadBtn ? <a href={downloadURL + this.state.generatedFileName} > <button title="Télécharger le fichier PDF généré" type="button" class="mb-2 mr-1 btn btn-outline-success"><i class="fa fa-download" aria-hidden="true"></i></button></a> : ""}
                </fieldset>
            </Form>
        </div>
        );
    }
}

export default AttestationDeTravail;
