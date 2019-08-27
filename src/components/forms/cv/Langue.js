import React from "react";
import {
    Row,
    Col,
    FormSelect,
    Form
} from "shards-react";

const Langue = (props) => {

    return (
        <fieldset className="my-fieldset">

            <Row form>
                <Col md="6" className="form-group" >
                    <label >Langue</label>
                    <FormSelect name={"langue" + props.idx}>
                        <option value="" selected disabled>-</option>
                        <option value="Arabe">Arabe</option>
                        <option value="Anglais">Anglais</option>
                        <option value="Français">Français</option>
                        <option value="Allemand">Allemand</option>
                        <option value="Espagnol">Espagnol</option>
                    </FormSelect>
                </Col>
                <Col md="6" className="form-group" >
                    <label >Niveau</label>
                    <FormSelect name={"niveau" + props.idx}>
                        <option value="" selected disabled>-</option>
                        <option value="Notions élémentaires">Notions élémentaires</option>
                        <option value="Compétence professionnelle limitée">Compétence professionnelle limitée</option>
                        <option value="Compétence professionnelle">Compétence professionnelle</option>
                        <option value="Compétence professionnelle complète">Compétence professionnelle complète</option>
                        <option value="Bilingue ou langue natale">Bilingue ou langue natale</option>
                    </FormSelect>
                </Col>
            </Row>

            <Row className="btn-grp">
                <Col className="text-center">
                    <button type="button" title="Supprimer la langue" className="mb-2 mr-1 btn btn-outline-danger" onClick={props.delete}>
                        x
                     </button>
                    <button type="button" title="Ajouter une nouvelle langue" className="mb-2 mr-1 btn btn-outline-info" onClick={props.add}>
                        +
                    </button>
                </Col>
            </Row>
        </fieldset>
    );

}

export default Langue;
