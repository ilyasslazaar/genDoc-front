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
                    <h5>{props.title}</h5>
                </Col>
            </Row>
            <fieldset className="my-fieldset">

                <Row form>
                    <Col md="4" className="form-group" >
                        <label >Numéro de facture</label>
                        <FormInput
                            name="numFacture"
                            type="text"
                            placeholder="N° Facture"
                        />
                    </Col>

                    <Col md="4" className="form-group" >

                        <label >Numéro de téléphone</label>
                        <FormInput
                            type="text"
                            name="telSociete"
                            placeholder="N° fixe"
                        />
                    </Col>
                    <Col md="4" className="form-group" >

                        <label >Email</label>
                        <FormInput
                            name="emailSociete"
                            type="email"
                        />
                    </Col>
                </Row>
                <Row form>
                    <Col md="4" className="form-group" >
                        <label >Siteweb</label>
                        <FormInput
                            type="text"
                            name="sitewebSociete"
                            placeholder="EX"
                        />
                    </Col>
                    <Col md="8" className="form-group" >
                        <label >Adresse</label>
                        <FormInput
                            type="text"
                            name="adresseSociete"
                            placeholder="Adresse"
                        />
                    </Col>

                </Row>
            </fieldset>
        </div>
    );


}

export default Societe