import React from "react";
import { Field, FieldArray, reducer as reduxFormReducer, reduxForm } from 'redux-form'
import { years } from '../../../constants/defaultValues'

import {
    Row,
    Col,
    Form,
    FormInput,
    FormSelect,
    FormTextarea
} from "shards-react";


const Formation = (props) => {


    return (
        <fieldset className="my-fieldset">

            <Row form>
                <Col md="6">
                    <label >Etablissement</label>
                </Col>
            </Row>
            <Row form>
                <Col className="form-group" >
                    <FormInput
                        type="text"
                        name={"etablissement" + props.idx}
                        placeholder="Ex : Université Paris V."
                    />
                </Col>
            </Row>
            <Row form>
                <Col md="6" className="form-group" >

                    <label >Diplôme</label>
                    <FormInput
                        type="text"
                        name={"diplome" + props.idx}
                        placeholder="Ex : Licence..."
                    />
                </Col>
                <Col md="6" className="form-group" >

                    <label >Lieu</label>
                    <FormInput
                        name={"lieuFormation" + props.idx}
                        type="text"
                        placeholder="Lieu de la formation."
                    />
                </Col>


            </Row>
            <Row form>
                <Col md="6" className="form-group" >

                    <label >Année de début</label>
                    <FormSelect name={"anneeDebutFormation" + props.idx}>
                        <option disabled selected>Année</option>
                        {years.map((year) =>

                            <option value={year}>{year}</option>)}x
                </FormSelect>

                </Col>
                <Col md="6" className="form-group" >

                    <label >Année de fin</label>
                    <FormSelect name={"anneeFinFormation" + props.idx}>
                        <option disabled selected>Année</option>
                        {years.map((year) =>
                            <option value={year + 5}>{year + 5}</option>)}x
                </FormSelect>
                </Col>

            </Row>
            <Row form>
                <Col md="6" >
                    <label >Description</label>
                </Col>
            </Row>
            <Row form>
                <Col className="form-group">

                    <FormTextarea
                        type="textarea"
                        name={"descriptionFormation" + props.idx}
                        placeholder="Description de la formation."
                    />
                </Col>
            </Row>
            <Row className="btn-grp">
                <Col className="text-center">
                    <button type="button" title="Supprimer la formation" className="mb-2 mr-1 btn btn-outline-danger" onClick={props.delete}>
                        x
                     </button>
                    <button type="button" title="Ajouter une nouvelle formation" className="mb-2 mr-1 btn btn-outline-info" onClick={props.add}>
                        +
                    </button>
                </Col>
            </Row>
        </fieldset>);

}

export default Formation;
