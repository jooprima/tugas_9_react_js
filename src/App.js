import React, {Component} from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  NavDropdown,
  Container,
  Row,
  Col,
  Breadcrumb,
  Spinner,
  Tabs,
  Tab,
  Table,
  ProgressBar,
  Pagination,
  OverlayTrigger,
  Popover,
  Collapse
} from "react-bootstrap";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
  }

  render() {
    const popover = (
      <Popover id="popover-basic" title="Informasi Website">
        Website ini dibuat untuk memudahkan dalam pencarian informasi terkini
        tentang berita plahraga.
      </Popover>
    );

    const {open} = this.state;
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>

          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#berita">Berita</Nav.Link>
            <Nav.Link href="#livescore">Live Score</Nav.Link>
            <NavDropdown title="Piala & Liga" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#ligainggris">
                Liga Primer Inggris
              </NavDropdown.Item>
              <NavDropdown.Item href="#seriea">Serie A</NavDropdown.Item>
              <NavDropdown.Item href="#divisiprimera">
                Divisi Primera
              </NavDropdown.Item>
              <NavDropdown.Item href="#bundesliga">
                Bundes Liga
              </NavDropdown.Item>
              <NavDropdown.Item href="#liga1">
                Liga 1 Indonesia
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#transfer">Transfer Pemain</Nav.Link>
            <Nav.Link href="#tim">Tim</Nav.Link>
          </Nav>

          <Form inline>
            <Form.Control
              type="text"
              placeholder="search"
              className="mr-sm-2"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <Container>
          <Row>
            <Col />
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#ligainggris">
                  Liga Inggris
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#transfer">
                  Transfer Pemain
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>

          <br />

          <Row>
            <Col>
              <h3>Rumor Transfer Pemain</h3>
            </Col>
            <Col>
              <Spinner
                animation="border"
                variant="success"
                style={{position: "absolute", top: 0, right: 30}}
              />
              <Spinner
                animation="grow"
                variant="success"
                style={{position: "absolute", top: 0, right: 0}}
              />
            </Col>
          </Row>

          <br />

          <Row>
            <Col>
              <Tabs defaultActiveKey="transfer">
                <Tab eventKey="transfer" title="Semua Transfer">
                  <br />
                  <Table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nama Pemain</th>
                        <th>Tim</th>
                        <th>Transfer</th>
                        <th>Proses Transfer</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>MAROUANE FELLAINI</td>
                        <td>MANCHESTER UNITED</td>
                        <td>SHENDONG LUNENG</td>
                        <td>
                          <ProgressBar animated now={85} label="85%" />
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>LUIS NANI</td>
                        <td>SPORTING CP</td>
                        <td>ORLANDO CITY</td>
                        <td>
                          <ProgressBar animated now={55} label="55%" />
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>MAREK HAMSIK</td>
                        <td>NAPOLI</td>
                        <td>DALIAN YIFANG</td>
                        <td>
                          <ProgressBar animated now={95} label="95%" />
                        </td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>SARDAR AZMOUN</td>
                        <td>RUBIN KAZAN</td>
                        <td>ZENIT ST PETERSBURG</td>
                        <td>
                          <ProgressBar animated now={100} label="100%" />
                        </td>
                      </tr>

                      <tr>
                        <td>5</td>
                        <td>MITSHY BATSUAYI</td>
                        <td>CHELSEA</td>
                        <td>CRYSTAL PALLACE</td>
                        <td>
                          <ProgressBar animated now={50} label="50%" />
                        </td>
                      </tr>

                      <tr>
                        <td>6</td>
                        <td>LUCAS PIAZON</td>
                        <td>CHELSEA</td>
                        <td>CHIEVO</td>
                        <td>
                          <ProgressBar animated now={100} label="100%" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>

                <Tab eventKey="ligainggris" title="Liga Premier Inggris" />

                <Tab eventKey="seriea" title="Serie A" />

                <Tab eventKey="divisiprimera" title="Divisi Primera" />

                <Tab eventKey="bundesliga" title="Bundes Liga" />

                <Tab eventKey="liga1" title="Liga 1 Indonesia" />
              </Tabs>
            </Col>
          </Row>

          <br />

          <Row>
            <Col>
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Col>
          </Row>

          <br />

          <Row>
            <Col>
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={popover}
              >
                <Button variant="primary">Informasi</Button>
              </OverlayTrigger>

              <Button
                onClick={() => this.setState({open: !open})}
                aria-controls="example-fade-text"
                aria-expanded={open}
                style={{position:'absolute',left:120}}
              >
                Versi Website
              </Button>

              <Collapse in={this.state.open} style={{position:'absolute',left:120}}>
                <div id="example-fade-text">Akses Sport V1.0</div>
              </Collapse>
            </Col>
          </Row>

          <br />
        </Container>
      </div>
    );
  }
}

export default App;
