import ReactDataGrid from "react-data-grid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDocsList } from '../../commun/DataLists'
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from "shards-react";
import { downloadPDFURL as downloadURL } from '../../constants/defaultValues'
import React, { Component } from 'react'

export default class TypesTable extends Component {
    state = {
        typesList: []
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let rows = []
        getDocsList().then(typesList => {
            typesList.map(doc => {
                rows.push({ id: doc.id, doc: <a title="Télécharger" href={downloadURL + doc.doc}>{doc.doc}</a>, signed: doc.signed + "", typeName: doc.typeName, createdAt: doc.createdAt })
            })
            this.setState({ typesList: rows })
        }).catch(function (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        })
    }
    render() {
        const columns = [
            { key: "id", name: "ID", editable: false, resizable: false, width: 70 },
            { key: "doc", name: "Doc", editable: false, resizable: true, width: 350 },
            { key: "signed", name: "Signed", editable: false, resizable: true, width: 65 },
            { key: "typeName", name: "Type", editable: false, resizable: true },
            { key: "createdAt", name: "Created at", editable: false, resizable: true },

        ];
        const rows = this.state.typesList
        return (

            <Container>
                <Row>
                    <Col lg="12" md="12">
                        <Card small className="mb-12">
                            <ListGroup>
                                <ListGroupItem >
                                    <h5 className="m-0">
                                        Documents
                                     </h5>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Col md="12" className="form-group">
                                        <ReactDataGrid
                                            columns={columns}
                                            rowGetter={i => this.state.typesList[i]}
                                            rowsCount={this.state.typesList.length}
                                            enableCellSelect={true}
                                        />
                                    </Col>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col lg="3" md="12">

                    </Col>
                </Row>
                <ToastContainer />
            </Container>

        )
    }
}


