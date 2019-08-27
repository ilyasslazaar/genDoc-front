import React from "react";
import {
    Row,
    Col,
    Form,
    FormInput,
} from "shards-react";

const Competence = (props) => {

    return (
        <fieldset className="my-fieldset">
            <Row form>
                <Col md="6" className="form-group" >
                    <label >Titre</label>

                    <FormInput
                        name={"titreCompetence" + props.idx}
                        type="text"
                        placeholder="Ex : Technologies Web, Langages de programmation ..."
                    />
                </Col>
                <Col md="6" className="form-group" >

                    <label >Compétences</label>
                    <FormInput
                        name={"competences" + props.idx}
                        type="text"
                        placeholder="EX : PHP, JEE ..."
                    />
                </Col>
            </Row>

            <Row className="btn-grp">
                <Col className="text-center">
                    <button type="button" title="Supprimer la compétence" className="mb-2 mr-1 btn btn-outline-danger" onClick={props.delete}>
                        x
                     </button>
                    <button type="button" title="Ajouter une nouvelle compétence" className="mb-2 mr-1 btn btn-outline-info" onClick={props.add}>
                        +
                    </button>
                </Col>
            </Row>
        </fieldset>);

}

export default Competence;
