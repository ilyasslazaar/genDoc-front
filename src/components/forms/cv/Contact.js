import React from "react";
import {
  Row,
  Col,
  FormInput,
  FormTextarea
} from "shards-react";

const Contact = () => (
  <fieldset className="contact-fieldset">

    <Row form>
      <Col className="form-group" >

        <label htmlFor="fePrenomResponsable">Nom</label>
        <FormInput
          name="nom"
          type="text"
          placeholder="Nom"
          required />
      </Col>
      <Col className="form-group" >
        <label htmlFor="fePrenomResponsable">Prénom</label>

        <FormInput
          name="prenom"
          type="text"
          placeholder="Prénom"
          required />
      </Col>
    </Row>
    <Row form>

      <Col md="6" className="form-group">
        <label htmlFor="fePrenomResponsable">Fonction</label>
        <FormInput
          name="fonction"
          type="text"
          placeholder="Fonction"
          required
        />
      </Col>
      <Col md="6" className="form-group">
        <label htmlFor="feFonctionResponsable">Adresse</label>
        <FormInput
          name="adresse"
          type="text"
          placeholder="Adresse"
          required
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
          required
        />
      </Col>
      <Col md="6" className="form-group">
        <label htmlFor="feFonctionResponsable">Téléphone</label>
        <FormInput
          type="tel"
          name="tel"
          placeholder="N° Téléphone"
          required
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
          required
        />
      </Col>
    </Row>
  </fieldset>
);

export default Contact;
