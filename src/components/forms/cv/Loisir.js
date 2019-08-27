import React from "react";
import {
    Row,
    Col,
    FormInput,
} from "shards-react";

const Loisir = (props) => {

    return (
        <fieldset className="my-fieldset">

            <Row form>
                <Col className="form-group" >
                    <label >Loisirs</label>

                    <FormInput
                        type="text"
                        name="loisirs"
                        placeholder="Ex : Sport, lecture ..."
                    />
                </Col>

            </Row>

        </fieldset>);

}

export default Loisir;
