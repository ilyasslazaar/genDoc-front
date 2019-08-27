import React from "react";

import {
    Row,
    Col,
    FormInput
} from "shards-react";
const Societe = (props) => {

    return (
        <div>
            <Row style={props.styles} >
                <Col md="6">
                    <h4>{props.title}</h4>
                </Col>
            </Row>
            <fieldset className="my-fieldset">

                <Row form>
                    <Col md="4" className="form-group" >
                        <label >Numero de facture</label>
                        <FormInput
                            name="numFacture"
                            type="text"
                            placeholder="N° Facture"
                        />
                    </Col>
                    <Col md="4" className="form-group" >

                        <label >Nom de la société</label>
                        <FormInput
                            name="nomSociete"
                            type="text"
                        />
                    </Col>
                    <Col md="4" className="form-group" >

                        <label >Numéro de telephone</label>
                        <FormInput
                            type="text"
                            name="telSociete"
                            placeholder="N° fixe"
                        />
                    </Col>
                </Row>
                <Row form>
                    <Col md="4" className="form-group" >
                        <label >Adresse</label>
                        <FormInput
                            type="text"
                            name="adresseSociete"
                            placeholder="Adresse"
                        />
                    </Col>
                    <Col md="4" className="form-group" >

                        <label >Email</label>
                        <FormInput
                            name="emailSociete"
                            type="email"
                        />
                    </Col>
                    <Col md="4" className="form-group" >
                        <label >Siteweb</label>
                        <FormInput
                            type="text"
                            name="sitewebSociete"
                            placeholder="EX"
                        />
                    </Col>
                </Row>
            </fieldset>
        </div>
    );


}

export default Societe