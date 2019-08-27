import React, { PureComponent } from 'react'
import {
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  Button
} from "shards-react";

const Responsable = () => {
  return (
    <fieldset className="my-fieldset">
      <Row form>
        <Col className="form-group" >
          <label htmlFor="fePrenomResponsable">Civilité</label>
          <FormSelect name="civiliteResponsable">
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
          />
        </Col>
        <Col md="6" className="form-group">
          <label htmlFor="feFonctionResponsable">Fonction</label>
          <FormInput
            name="fonction"
            type="text"
            placeholder="Fonction"
          />
        </Col>
      </Row>
    </fieldset>
  )
}
export default Responsable;