import ReactDataGrid from "react-data-grid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTypesList } from '../../commun/DataLists'
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from "shards-react";
import { downloadTemplateURL as downloadURL } from '../../constants/defaultValues'
import React, { Component } from 'react'

export default class TypesTable extends Component {
    state = {
        typesList: []
    }
    style = { padding: '20px' }
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let rows = []
        getTypesList().then(typesList => {
            typesList.map(type => {
                rows.push({ id: type.id, name: type.name, template: <a title="Télécharger" href={downloadURL + type.template}>{type.template}</a> })
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
            { key: "name", name: "Name", editable: false, resizable: true },
            { key: "template", name: "Template", editable: false, resizable: true }
        ];
        const rows = this.state.typesList
        return (

            <Container>
                <Row>
                    <Col lg="12" md="12">
                        <Card small className="mb-12">
                            <ListGroup >
                                <ListGroupItem >
                                    <h5 className="m-0">
                                        Types
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

                    {/* Sidebar Widgets */}
                    <Col lg="3" md="12">

                    </Col>
                </Row>
                <ToastContainer />
            </Container>

        )
    }
}

/*
const TypesTable = ({ rows }) => {
    return <ReactDataGrid columns={columns} rowGetter={i => rows[i]}
        rowsCount={rows.length}
        enableCellSelect={true} />;
};

TypesFiles.propTypes = {
    rows: PropTypes.array
};

TypesFiles.defaultProps = {
    rows: TypesList()
};
  */

