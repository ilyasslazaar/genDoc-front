import React from "react";
import {
    Row,
    Col,
    FormInput,
} from "shards-react";
const Client = (props) => {
    return (
        <div>
            <Row style={props.styles} >
                <Col md="6">
                    <h5>{props.title}</h5>
                </Col>
            </Row>
            <fieldset className="my-fieldset">

                <Row form>
                    <Col md="6" className="form-group" >
                        <label >Nom</label>
                        <FormInput
                            name="nomClient"
                            type="text"
                            placeholder="Nom"
                        />
                    </Col>

                    <Col md="6" className="form-group" >

                        <label >Numéro de téléphone</label>
                        <FormInput
                            name="telClient"
                            type="text"
                            placeholder="N° tel"
                        />
                    </Col>
                </Row>
                <Row form>
                    <Col md="6" className="form-group" >
                        <label >Adresse</label>
                        <FormInput
                            name="adresseClient"
                            type="text"
                            placeholder="Adresse"
                        />
                    </Col>
                    <Col md="6" className="form-group" >

                        <label >Email</label>
                        <FormInput
                            name="emailClient"
                            type="email"
                        />
                    </Col>
                </Row>


            </fieldset>
        </div>

    );
}
export default Client