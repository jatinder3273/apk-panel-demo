import React from "react";
import Link from "next/link";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Table,
  Media,
  Badge
} from "reactstrap";
import Admin from "layouts/Admin.js";
import Router from 'next/router'
import Header from "components/Headers/Header.js";

const AppsGames = () => {
  const editAppGames = (event) => {
    event.preventDefault()
    Router.push('/admin/apps-games/edit/1')
  };
  const handleVersionPage = (event) => {
    event.preventDefault()
    Router.push('/admin/apps-games/versions')
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
                    <h3 className="mb-0">Apps and Games</h3>
                  </div>
                  <div className="col text-right">
                    <Link href="/admin/apps-games/add">
                      <Button color="primary" size="sm">
                        <i className="ni ni-fat-add" /> Add App or Game
                      </Button>
                    </Link>
                  </div>
                </Row>
              </CardHeader>
              <CardBody className="p-0">
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Status</th>
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
                            <span className="mb-0 text-sm">Argon Design System</span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                      <td className="text-right">
                        <Button color="primary" size="sm" href="#pablo" onClick={handleVersionPage}>
                          <b>Versions</b>
                        </Button>
                        <Button color="primary" size="sm" href="#pablo" onClick={editAppGames}>
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
                            <span className="mb-0 text-sm">Argon Design System</span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                      <td className="text-right">
                        <Button color="primary" size="sm" href="#pablo" onClick={handleVersionPage}>
                          <b>Versions</b>
                        </Button>
                        <Button color="primary" size="sm" href="#pablo" onClick={editAppGames}>
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
                            <span className="mb-0 text-sm">Argon Design System</span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                      <td className="text-right">
                        <Button color="primary" size="sm" href="#pablo" onClick={handleVersionPage}>
                          <b>Versions</b>
                        </Button>
                        <Button color="primary" size="sm" href="#pablo" onClick={editAppGames}>
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
                            <span className="mb-0 text-sm">Argon Design System</span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                      <td className="text-right">
                        <Button color="primary" size="sm" href="#pablo" onClick={handleVersionPage}>
                          <b>Versions</b>
                        </Button>
                        <Button color="primary" size="sm" href="#pablo" onClick={editAppGames}>
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

AppsGames.layout = Admin;

export default AppsGames;
