import React from "react";
import {
    Row,
    Col,
    FormInput,
    FormSelect
} from "shards-react";

const Produit = (props) => {

    return (
        <fieldset className="my-fieldset">

            <Row form>
                <Col md="5" className="form-group" >
                    <label >Nom</label>

                    <FormInput
                        name={"nomProduit" + props.idx}
                        type="text"
                        required />
                </Col>
                <Col md="2" className="form-group" >

                    <label >Quantité</label>
                    <FormInput
                        name={"qteProduit" + props.idx}
                        type="number"
                        required />
                </Col>
                <Col md="3" className="form-group" >

                    <label >Prix</label>
                    <FormInput
                        name={"prixProduit" + props.idx}
                        type="number"
                        requried />
                </Col>
                <Col md="2" className="form-group" >

                    <label >Devise</label>
                    <FormSelect name={"devise" + props.idx} required>
                        <option value="" selected disabled>-</option>
                        <option value="MAD">MAD</option>
                        <option value="€">EURO</option>
                        <option value="$">USD</option>
                    </FormSelect>
                </Col>

            </Row>

            <Row className="btn-grp">
                <Col className="text-center">
                    <button type="button" title="Supprimer le produit" className="mb-2 mr-1 btn btn-outline-danger" onClick={props.delete}>
                        x
                     </button>
                    <button type="button" title="Ajouter un nouveau produit" className="mb-2 mr-1 btn btn-outline-info" onClick={props.add}>
                        +
                    </button>
                </Col>
            </Row>
        </fieldset>);

}

export default Produit;
