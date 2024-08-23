import React, { useState } from "react";
import ProjectTables from "../../components/dashboard/ProjectTable";
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
} from "reactstrap";

const Tables = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const handleClientClick = (client) => {
    setSelectedClient(client);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Client Info:", selectedClient);
    // Update the client info in the state or send it to the backend
  };

  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1 */}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <Card>
          <CardBody>
            <ProjectTables onClientClick={handleClientClick} />
          </CardBody>
        </Card>
      </Col>

      {/* --------------------------------------------------------------------------------*/}
      {/* table-2 */}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        {selectedClient && (
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-card-text me-2"> </i>
              Selected Client Information
            </CardTitle>
            <CardBody>
              <Table bordered striped className="table-full-width">
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Phone Number</th>
                    <th>City</th>
                    <th>Address</th>
                    <th>Comment Client</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{selectedClient.name}</td>
                    <td>{selectedClient.phone_number}</td>
                    <td>{selectedClient.city}</td>
                    <td>{selectedClient.home_address}</td>
                    <td>{selectedClient.comment_client}</td>
                    <td>
                      <img
                        src={selectedClient.image}
                        alt="Client"
                        style={{ width: '100px', height: 'auto' }}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        )}
      </Col>

      {/* Form */}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Edit Client Info
          </CardTitle>
          <CardBody>
            {selectedClient && (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={selectedClient.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone_number">Phone Number</Label>
                  <Input
                    id="phone_number"
                    name="phone_number"
                    value={selectedClient.phone_number}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={selectedClient.city}
                    onChange={handleInputChange}
                    placeholder="Enter city"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="home_address">Address</Label>
                  <Input
                    id="home_address"
                    name="home_address"
                    value={selectedClient.home_address}
                    onChange={handleInputChange}
                    placeholder="Enter address"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="comment_client">Comment Client</Label>
                  <Input
                    id="comment_client"
                    name="comment_client"
                    value={selectedClient.comment_client}
                    onChange={handleInputChange}
                    placeholder="Enter comment"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="image">Image URL</Label>
                  <Input
                    id="image"
                    name="image"
                    value={selectedClient.image}
                    onChange={handleInputChange}
                    placeholder="Enter image URL"
                    type="text"
                  />
                </FormGroup>
                <Button type="submit">Update Client</Button>
              </Form>
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Tables;
