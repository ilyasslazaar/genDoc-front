import React from "react";
import {
    Row,
    Col,
    FormInput,
    FormTextarea,
    FormSelect,
} from "shards-react";
import { years, months } from '../../../constants/defaultValues'
const style = { color: "white" }
const Distinction = (props) => {
    return (
        <fieldset className="my-fieldset">

            <Row form>
                <Col md="5" className="form-group" >
                    <label >Titre</label>
                    <FormInput
                        name={"titreDist" + props.idx}
                        type="text"
                        placeholder=""
                        required
                    />
                </Col>
                <Col md="3" className="form-group" >

                    <label >Lieu</label>
                    <FormInput
                        name={"lieuDist" + props.idx}
                        type="text"
                        placeholder=""
                        required
                    />
                </Col>

                <Col md="2" className="form-group" >
                    <label >Date d’émission</label>

                    <FormSelect name={"anneeDist" + props.idx} required>
                        <option disabled selected>Année</option>
                        {years.map((year) =>

                            <option value={year}>{year}</option>)}x
                            </FormSelect>
                </Col>
                <Col md="2" className="form-group" >
                    <label style={style}>Mois d'émission</label>
                    <FormSelect name={"moisDist" + props.idx} required>
                        <option disabled selected>Mois</option>
                        {months.map((month) =>

                            <option value={month}>{month}</option>)}x
                            </FormSelect>
                </Col>
            </Row>


            <Row>
                <Col className="form-group" >

                    <label >Description</label>
                    <FormTextarea
                        name={"descriptionDist" + props.idx}
                        type="textarea"
                        placeholder=""
                        required
                    />
                </Col>
            </Row>

            <Row className="btn-grp">
                <Col className="text-center">
                    <button type="button" title="Supprimer la distinction" className="mb-2 mr-1 btn btn-outline-danger" onClick={props.delete}>
                        x
                     </button>
                    <button type="button" title="Ajouter une nouvelle distinction" className="mb-2 mr-1 btn btn-outline-info" onClick={props.add}>
                        +
                    </button>
                </Col>
            </Row>
        </fieldset>
    );

}

export default Distinction;
