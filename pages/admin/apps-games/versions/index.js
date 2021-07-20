import React, { useState } from "react";
import { Button, Card, CardHeader, CardBody, Container, Row, Table, Badge } from "reactstrap";
import Admin from "layouts/Admin.js";
import Header from "components/Headers/Header.js";
import Add from "./add";
import Edit from "./edit";
const Versions = () => {
  const [addVersionModal, setAddVersionModal] = useState(false);
  const [editVersionModal, setEditVersionModal] = useState(false);
  const handleAddVersion = () => {
    setAddVersionModal(!addVersionModal);
  };
  const handleEditVersion = () => {
    setEditVersionModal(!editVersionModal);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Versions List</h3>
                  </div>
                  <div className="col text-right">
                    <Button color="primary" size="sm" onClick={handleAddVersion}>
                      <i className="ni ni-fat-add" /> Add Version
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <CardBody className="p-0">
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Version</th>
                      <th scope="col" className="text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="py-1">
                        V 5.0.0 <Badge color="success">Currently Active</Badge>
                      </th>
                      <td className="text-right">
                        <Button color="primary" size="sm" href="#pablo" onClick={handleEditVersion}>
                          <i className="fa fa-edit" />
                        </Button>
                        {/* <Button color="primary" size="sm" href="#pablo" onClick={e => e.preventDefault()}>
                          <i className="fa fa-trash" />
                        </Button> */}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-1">
                        V 4.0.0
                      </th>
                      <td className="text-right">
                        <Button color="primary" size="sm" href="#pablo" onClick={handleEditVersion}>
                          <i className="fa fa-edit" />
                        </Button>
                        <Button color="primary" size="sm" href="#pablo" onClick={e => e.preventDefault()}>
                          <i className="fa fa-trash" />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-1">
                        V 3.0.0
                      </th>
                      <td className="text-right">
                        <Button color="primary" size="sm" href="#pablo" onClick={handleEditVersion}>
                          <i className="fa fa-edit" />
                        </Button>
                        <Button color="primary" size="sm" href="#pablo" onClick={e => e.preventDefault()}>
                          <i className="fa fa-trash" />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-1">
                        V 2.0.0
                      </th>
                      <td className="text-right">
                        <Button color="primary" size="sm" href="#pablo" onClick={handleEditVersion}>
                          <i className="fa fa-edit" />
                        </Button>
                        <Button color="primary" size="sm" href="#pablo" onClick={e => e.preventDefault()}>
                          <i className="fa fa-trash" />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
      <Add open={addVersionModal} handleAddVersion={handleAddVersion} />
      <Edit open={editVersionModal} handleEditVersion={handleEditVersion} />
    </>
  );
};

Versions.layout = Admin;

export default Versions;
