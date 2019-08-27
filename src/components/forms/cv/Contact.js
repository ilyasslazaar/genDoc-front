import React from "react";
import {
  Row,
  Col,
  FormInput,
  FormTextarea
} from "shards-react";
const styles = {
  padding: "10px"
}

const Contact = () => (
  
  <fieldset className="contact-fieldset">
       
    <Row form>
      <Col className="form-group" >

        <label htmlFor="fePrenomResponsable">Nom</label>
        <FormInput
          name="nom"
          type="text"
          placeholder="Nom"
        />
      </Col>
      <Col className="form-group" >
        <label htmlFor="fePrenomResponsable">Prénom</label>

        <FormInput
          name="prenom"
          type="text"
          placeholder="Prénom"
        />
      </Col>
    </Row>
    <Row form>

      <Col md="6" className="form-group">
        <label htmlFor="fePrenomResponsable">Fonction</label>
        <FormInput
          name="fonction"
          type="text"
          placeholder="Fonction"
        />
      </Col>
      <Col md="6" className="form-group">
        <label htmlFor="feFonctionResponsable">Adresse</label>
        <FormInput
          name="adresse"
          type="text"
          placeholder="Adresse"
        />
      </Col>
    </Row>
    <Row form>

      <Col md="6" className="form-group">
        <label htmlFor="fePrenomResponsable">Email</label>
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
        />
      </Col>
      <Col md="6" className="form-group">
        <label htmlFor="feFonctionResponsable">Telephone</label>
        <FormInput
          type="tel"
          name="tel"
          placeholder="N° Telephone"
        />
      </Col>
    </Row>

    <Row form>
      <Col className="form-group">
        <label htmlFor="feSignature">Résumé</label>

        <FormTextarea
          name="bio"
          type="textarea"
          placeholder="Résumé"
        />
      </Col>
    </Row>
  </fieldset>
);

export default Contact;
