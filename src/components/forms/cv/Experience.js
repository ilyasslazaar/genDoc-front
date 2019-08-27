import React from "react";
import {
    Row,
    Col,
    Form,
    FormInput,
    FormTextarea,
    FormSelect
} from "shards-react";
import { years, months } from '../../../constants/defaultValues'
const style = { color: "white" }

const Experience = (props) => {
    return (
        <fieldset className="my-fieldset">

            <Row form>
                <Col md="6">
                    <label >Entreprise</label>
                </Col>
            </Row>
            <Row form>
                <Col className="form-group" >
                    <FormInput
                        name={"entreprise" + props.idx}
                        type="text"
                        placeholder="Ex : Novelis."
                    />
                </Col>
            </Row>
            <Row form>
                <Col md="6" className="form-group" >

                    <label >Intitulé du poste</label>
                    <FormInput
                        name={"poste" + props.idx}
                        type="text"
                        placeholder="Ex : Développeur Java/JEE."
                    />
                </Col>
                <Col md="6" className="form-group" >

                    <label >Lieu</label>
                    <FormInput
                        name={"lieu" + props.idx}
                        type="text"
                        placeholder="Lieu"
                    />
                </Col>


            </Row>

            <Row form>
                <Col md="3" className="form-group" >
                    <label >Date de début</label>

                    <FormSelect name={"anneeDebutExperience" + props.idx}>
                        <option disabled selected>Année</option>
                        {years.map((year) =>

                            <option value={year}>{year}</option>)}x
                            </FormSelect>
                </Col>
                <Col md="3" className="form-group" >
                    <label style={style}>Mois</label>
                    <FormSelect name={"moisDebutExperience" + props.idx}>
                        <option disabled selected>Mois</option>
                        {months.map((month) =>

                            <option value={month}>{month}</option>)}x
                            </FormSelect>
                </Col>
                <Col md="3" className="form-group" >
                    <label >Date de fin</label>

                    <FormSelect name={"anneeFinExperience" + props.idx}>
                        <option disabled selected>Année</option>
                        {years.map((year) =>

                            <option value={year + 2}>{year + 2}</option>)}x
                            </FormSelect>
                </Col>
                <Col md="3" className="form-group" >
                    <label style={style}>Mois</label>
                    <FormSelect name={"moisFinExperience" + props.idx}>
                        <option disabled selected>Mois</option>
                        {months.map((month) =>

                            <option value={month}>{month}</option>)}x
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
                        name={"description" + props.idx}
                        type="textarea"
                        placeholder=""
                    />
                </Col>
            </Row>

            <Row className="btn-grp">
                <Col className="text-center">
                    <button type="button" title="Supprimer l'expérience" className="mb-2 mr-1 btn btn-outline-danger" onClick={props.delete}>
                        x
                     </button>
                    <button type="button" title="Ajouter une nouvelle expérience" className="mb-2 mr-1 btn btn-outline-info" onClick={props.add}>
                        +
                    </button>
                </Col>
            </Row>
        </fieldset>
    );
}
export default Experience;
