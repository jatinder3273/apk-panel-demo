import React from "react";
import { Button, Card, CardHeader, CardBody, Container, Row, Table, Media } from "reactstrap";
import Router from "next/router";
import Admin from "layouts/Admin.js";
import Header from "components/Headers/Header.js";
import Link from "next/link";

const Categories = () => {
  const editCategory = () => {
    Router.push("/admin/categories/edit/1");
  };
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Categories</h3>
                  </div>
                  <div className="col text-right">
                    <Link href="/admin/categories/add">
                      <Button color="primary" size="sm">
                        <i className="ni ni-fat-add" /> Add Category
                      </Button>
                    </Link>
                  </div>
                </Row>
              </CardHeader>
              <CardBody className="p-0">
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Category Name</th>
                      {/* <th scope="col">Status</th> */}
                      <th scope="col" className="text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="py-1">
                        <Media className="align-items-center">
                          <a className="avatar rounded-circle mr-3" href="#pablo" onClick={e => e.preventDefault()}>
                            <img alt="..." src={require("assets/img/theme/vue.jpg")} />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">Action</span>
                          </Media>
                        </Media>
                      </th>
                      {/* <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td> */}
                      <td className="text-right">
                        <Button color="primary" size="sm" href="#pablo" onClick={editCategory}>
                          <i className="fa fa-edit" />
                        </Button>
                        <Button color="primary" size="sm" href="#pablo" onClick={e => e.preventDefault()}>
                          <i className="fa fa-trash" />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-1">
                        <Media className="align-items-center">
                          <a className="avatar rounded-circle mr-3" href="#pablo" onClick={e => e.preventDefault()}>
                            <img alt="..." src={require("assets/img/theme/vue.jpg")} />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">Adventure</span>
                          </Media>
                        </Media>
                      </th>
                      {/* <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td> */}
                      <td className="text-right">
                        <Button color="primary" size="sm" href="#pablo" onClick={editCategory}>
                          <i className="fa fa-edit" />
                        </Button>
                        <Button color="primary" size="sm" href="#pablo" onClick={e => e.preventDefault()}>
                          <i className="fa fa-trash" />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-1">
                        <Media className="align-items-center">
                          <a className="avatar rounded-circle mr-3" href="#pablo" onClick={e => e.preventDefault()}>
                            <img alt="..." src={require("assets/img/theme/vue.jpg")} />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">Arcade</span>
                          </Media>
                        </Media>
                      </th>
                      {/* <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td> */}
                      <td className="text-right">
                        <Button color="primary" size="sm" href="#pablo" onClick={editCategory}>
                          <i className="fa fa-edit" />
                        </Button>
                        <Button color="primary" size="sm" href="#pablo" onClick={e => e.preventDefault()}>
                          <i className="fa fa-trash" />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-1">
                        <Media className="align-items-center">
                          <a className="avatar rounded-circle mr-3" href="#pablo" onClick={e => e.preventDefault()}>
                            <img alt="..." src={require("assets/img/theme/vue.jpg")} />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">Puzzle</span>
                          </Media>
                        </Media>
                      </th>
                      {/* <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td> */}
                      <td className="text-right">
                        <Button color="primary" size="sm" href="#pablo" onClick={editCategory}>
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
    </>
  );
};

Categories.layout = Admin;

export default Categories;
