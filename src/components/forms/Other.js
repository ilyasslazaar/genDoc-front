import React, { Component } from 'react';
import axios from 'axios'
import { Col, Form, FormTextarea, Row, Button } from "shards-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { downloadPDFURL as downloadURL, gendocServiceURL as apiURL } from '../../constants/defaultValues'
import '../../assets/style.css';
class Other extends Component {
  state = {
    toggleDownloadBtn: false,
    formData: {},
    typeName: this.props.type
  }
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      formData: e.target.json.value
    }, () => {
      axios.post(apiURL, null, {
        headers: {
          "Authorization": localStorage.getItem("token"),
          'Accept': 'application/pdf'
        },
        params: {
          data: this.state.formData
        }
      }).then((response) => {
        if (response.status == 200) {
          if (response.data) {
            toast.success("Un nouveau " + this.props.type + " a été crée", {
              position: toast.POSITION.TOP_RIGHT,
            });
            this.setState({
              toggleDownloadBtn: true,
              generatedFileName: response.data
            });
          }
          else {
            toast.error("Erreur lors de la création du document.")
          }

        }
      }).catch(function (error) {
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
    }
    );

  }
  render() {
    const jsonExample = '{\n" signed" : true,\n "typeName" : ' + this.props.type + ',\n "data" : {}\n}'
    return (
      <Form onSubmit={this.handleSubmit}>
        <fieldset className="contact-fieldset">
          <Row form>
            <Col md="12" className="form-group" >
              <h5 >JSON</h5>
              <FormTextarea
                rows="5"
                md="8"
                name="json"
                defaultValue={jsonExample}
                required
              />
            </Col>
          </Row>
          <Button outline theme="primary" className="mb-2 mr-1" type="submit">Générer le document</Button>
          <Button outline theme="secondary" className="mb-2 mr-1" type="reset">Vider les champs</Button>

          {this.state.toggleDownloadBtn ? <a href={downloadURL + this.state.generatedFileName} > <button onClick={this.handleClick} title="Télécharger le fichier PDF généré" type="button" className="mb-2 mr-1 btn btn-outline-success"><i className="fa fa-download" aria-hidden="true"></i></button></a> : ""}
          <ToastContainer />
        </fieldset>
      </Form>
    );
  }
}
export default Other;
