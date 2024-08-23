import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectTables, { authenticate } from "../../components/dashboard/ProjectTable";
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
  Alert,
} from "reactstrap";

const Tables = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [clients, setClients] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const fetchClients = async () => {
    const token = await authenticate();
    axios
      .get("http://localhost:8000/api/commands/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Error fetching clients:", error);
      });
  };

  useEffect(() => {
    // Fetch clients data to populate the first table
    fetchClients();
  }, []);

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

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Updated Client Info:", selectedClient);

    const clientId = selectedClient.command_id; // Use the updated client ID
    const token = await authenticate();

    const formData = new FormData();
    formData.append("name", selectedClient.name);
    formData.append("phone_number", selectedClient.phone_number);
    formData.append("city", selectedClient.city);
    formData.append("home_address", selectedClient.home_address);
    formData.append("comment_client", selectedClient.comment_client);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    // Perform a PATCH request to update the client information
    axios
      .patch(
        `http://localhost:8000/api/commands/${clientId}/`,
        formData, // Send the FormData object
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure the Content-Type header is set
            Authorization: `Bearer ${token}`, // Use template literals to insert the token variable
          },
        }
      )
      .then((response) => {
        console.log("Client updated successfully:", response.data);
        setSuccessMessage("Client updated successfully!");
        // Refresh the clients data
        fetchClients();
      })
      .catch((error) => {
        console.error("Error updating client:", error);
      });
  };

  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1 */}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <Card>
          <CardBody>
            <ProjectTables clients={clients} onClientClick={handleClientClick} />
          </CardBody>
        </Card>
      </Col>

      {/* --------------------------------------------------------------------------------*/}
      {/* table-2 */}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12" className="mt-4">
        {selectedClient && (
          <Card>
            <CardTitle tag="h5" className="border-bottom p-3 mb-0 fw-bold">
              <i className="bi bi-card-text me-2"> </i>
              Détails de la Commande
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
                        style={{ width: "100px", height: "auto" }}
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
      <Col lg="12" className="mt-4">
        {selectedClient && (
          <Card>
            {successMessage && (
              <Alert color="success" toggle={() => setSuccessMessage("")}>
                {successMessage}
              </Alert>
            )}
            <CardTitle tag="h5" className="border-bottom p-3 mb-0 fw-bold">
              <i className="bi bi-bell me-2"> </i>
              Modifier les Informations de la Commande
            </CardTitle>
            <CardBody>
              {selectedClient && (
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="name" className="">
                      Full Name
                    </Label>
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
                    <Label for="image">Image</Label>
                    <Input
                      id="image"
                      name="image"
                      onChange={handleFileChange}
                      placeholder="Upload image"
                      type="file"
                    />
                  </FormGroup>
                  <Button type="submit">Update Client</Button>
                </Form>
              )}
            </CardBody>
          </Card>
        )}
        ;
      </Col>
    </Row>
  );
};

export default Tables;