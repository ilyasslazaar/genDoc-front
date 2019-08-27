import React, { Component } from 'react';
import axios from 'axios'
import { Col, Form,FormTextarea, Row, Button } from "shards-react";
import CustomFileUpload from "../components-overview/CustomFileUpload";
import { downloadFilesURL as downloadURL, gendocServiceURL as apiURL, styles } from '../../constants/defaultValues'
import '../../assets/style.css';

class Other extends Component {
  state = {
    toggleDownloadBtn: false,
    template: null,
    formData: {
      "signed": false,
      "type": "",
      data: {}
    }
  }
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

handleSubmit(e){
  e.preventDefault();
  console.log(e.target)

  this.setState({
    formData: {
      "signed": false,
      "typeName": this.props.type,
      data: {
        "json" : e.target.json.value,
        "template": e.target.template.value
      }
    }
  }, () => {
    console.log(this.state.formData)
    axios.post(apiURL, {
      responseType: 'arraybuffer',
      headers: {
        'Accept': 'application/pdf'
      }
    },
      {
        params: {
          data: this.state.formData
        }
      }).then((response) => {
        if (response.status == 200) {
          this.setState({
            toggleDownloadBtn: true,
            generatedFileName: response.data
          });
        }
      });
  }
  );

}
  render() {
    return (
    <Form onSubmit={this.handleSubmit}>
      <fieldset className="contact-fieldset">

        <Row form>
          <Col md="8" className="form-group" >
            <label >JSON</label>
            <FormTextarea
              md="8"
              name="json"
              defaultValue='{
              "signed" : true | false,
              "type" : "other",
              "data" : {
              ...
              }}'
           />
          </Col>
          
          <Col md="4" className="form-group" >
            
            <label >Template</label>
            <CustomFileUpload md="8" 
            name="template" id="template-file" extension=".docx,.doc" />

          </Col>
        </Row>
        <Button outline theme="primary" className="mb-2 mr-1" type="submit">Générer le document</Button>
        <Button outline theme="secondary" className="mb-2 mr-1" type="reset">Vider les champs</Button>

        {this.state.toggleDownloadBtn ? <a href={downloadURL + this.state.generatedFileName} > <button title="Télécharger le fichier PDF généré" type="button" className="mb-2 mr-1 btn btn-outline-success"><i className="fa fa-download" aria-hidden="true"></i></button></a> : ""}

       
      </fieldset>
    </Form>
    );
  }
}
export default Other;
