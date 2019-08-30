import React from 'react'
import {
  Row,
  Col,
  FormInput,
  FormSelect,
} from "shards-react";

const Responsable = () => {
  return (
    <fieldset className="my-fieldset">
      <Row form>
        <Col className="form-group" >
          <label htmlFor="fePrenomResponsable">Civilité</label>
          <FormSelect name="civiliteResponsable" required>
            <option value="Mr">Mr</option>
            <option value="Mme">Mme</option>
          </FormSelect>
        </Col>
        <Col className="form-group" >
          <label htmlFor="fePrenomResponsable">Nom</label>
          <FormInput
            name="nomResponsable"
            type="text"
            placeholder="Nom"
            required
          />
        </Col>
      </Row>
      <Row form>
        <Col md="6" className="form-group">
          <label htmlFor="fePrenomResponsable">Prénom</label>
          <FormInput
            name="prenomResponsable"
            type="text"
            placeholder="Prénom"
            required
          />
        </Col>
        <Col md="6" className="form-group">
          <label htmlFor="feFonctionResponsable">Fonction</label>
          <FormInput
            name="fonction"
            type="text"
            placeholder="Fonction"
            required
          />
        </Col>
      </Row>
    </fieldset>
  )
}
export default Responsable;