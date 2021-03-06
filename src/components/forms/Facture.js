import React, { Component } from "react";
import Produit from './facture/Produit'
import axios from 'axios'
import Client from './facture/Client'
import Societe from './facture/Societe'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { downloadPDFURL as downloadURL, gendocServiceURL as apiURL, styles } from '../../constants/defaultValues'
import { handleAdd, handleRemove } from '../../commun'
import {
    Row,
    Col,
    FormInput,
    Button,
    FormSelect,
    Form
} from "shards-react";
class Facture extends Component {

    state = {
        toggleDownloadBtn: false,

        produit: [{ value: 0 }],
        formData: {
            signed: true,
            typeName: this.props.type,
            data: {
                "ref": "",
                "societe": "",
                "adresse": "",
                "tel": "",
                "fixe": "",
                "email": "",
                "nomC": "",
                "societeC": "",
                "adresseC": "",
                "telC": "",
                "dateCreation": "",
                "description": "",
                produits: []
            }
        }
    }
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        if (e.target.id === 'form') {
            let produits = []
            let totalFacture = 0;
            this.state.produit.map((item, i) => {
                totalFacture += e.target['qteProduit' + i].value * e.target['prixProduit' + i].value
                const produit =
                {
                    "name": e.target['nomProduit' + i].value,
                    "quantite": e.target['qteProduit' + i].value,
                    "prix": e.target['prixProduit' + i].value + ' ' + e.target['devise' + i].value,
                    "total": e.target['prixProduit' + i].value * e.target['qteProduit' + i].value + ' ' + e.target['devise' + i].value
                }
                produits.push(produit)


            })

            this.setState({
                formData: {
                    signed: e.target.signature.value,
                    typeName: this.props.type,
                    data: {
                        "ref": e.target.numFacture.value,
                        "nomS": "Novelis",
                        "adresseS": e.target.adresseSociete.value,
                        "telS": e.target.telSociete.value,
                        "fixeS": '',
                        "mailS": e.target.emailSociete.value,
                        "siteS": e.target.sitewebSociete.value,
                        "nomC": e.target.nomClient.value,
                        "adresseC": e.target.adresseClient.value,
                        "telC": e.target.telClient.value,
                        "mailC": e.target.emailClient.value,
                        "dateFacturation": e.target.dateFacturation.value,
                        "datePaiement": e.target.datePaiement.value,
                        "description": e.target.description.value,
                        "total": totalFacture + ' ' + e.target['devise' + 0].value,
                        produits: produits
                    }
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
                })
                    .then((response) => {
                        if (response.status === 200) {
                            toast.success("Une nouvelle facture été crée !", {
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

    }


    render() {
        return (
            <Form id='form' onSubmit={this.handleSubmit}>

                <Societe styles={styles} title="Societé" />
                <Client title="Client" styles={styles} />

                <Row style={styles} >
                    <Col md="6">
                        <h5>Produit</h5>
                    </Col>
                </Row>
                {this.state.produit.map((field, idx) => {
                    return (
                        <div key={`${field}-${idx}`}>
                            <Produit styles={styles} title="Produit" idx={idx} add={handleAdd.bind(this, 'produit')} delete={handleRemove.bind(this, idx, 'produit')} />
                        </div>

                    );
                })}
                <fieldset className="my-fieldset">
                    <hr />
                    <Row>
                        <Col className="form-group">
                            <label >Intitulé de la facture</label>

                            <FormInput
                                type="text"
                                name="description"
                                placeholder="Description"
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4" className="form-group">

                            <label htmlFor="feSignature">Signature</label>
                            <FormSelect name="signature" required>
                                <option value="true">Oui</option>
                                <option value="false">Non</option>
                            </FormSelect>
                        </Col>
                        <Col md="4" className="form-group">
                            <label >Date de facturation</label>

                            <FormInput
                                name="dateFacturation"
                                type="date"
                                required
                            />
                        </Col>


                        <Col md="4" className="form-group">
                            <label >Date de Paiement</label>

                            <FormInput
                                name="datePaiement"
                                type="date"
                                required
                            />
                        </Col>

                    </Row>
                </fieldset>
                <fieldset className="my-fieldset">
                    <Button outline theme="primary" className="mb-2 mr-1" type="submit">Générer le document</Button>
                    <Button outline theme="secondary" className="mb-2 mr-1" type="reset">Vider les champs</Button>
                    {this.state.toggleDownloadBtn ? <a href={downloadURL + this.state.generatedFileName} > <button title="Télécharger le fichier PDF généré" type="button" className="mb-2 mr-1 btn btn-outline-success"><i className="fa fa-download" aria-hidden="true"></i></button></a> : ""}
                </fieldset>
                <ToastContainer />

            </ Form>);
    }
}

export default Facture;
