import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
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
  Alert,
} from "reactstrap";
import { useAuth } from "../../AuthContext"; // Adjust the path based on your project structure
import API_BASE_URL from "../../config";

const Tables = () => {
  const { isAuthenticated } = useAuth();
  const [selectedClient, setSelectedClient] = useState(null);
  const [clients, setClients] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // Fetch clients data
  const fetchClients = useCallback(async () => {
    if (!isAuthenticated) {
      // console.error("L'utilisateur n'est pas authentifié");
      return;
    }

    const token = localStorage.getItem("token");
    axios
      .get(`${API_BASE_URL}/api/commands/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setClients(response.data);
        // Restore selected client from localStorage if available
        const savedClient = localStorage.getItem("selectedClient");
        if (savedClient) {
          setSelectedClient(JSON.parse(savedClient));
          localStorage.removeItem("selectedClient");
        }
      })
      .catch((error) => {
        // console.error("Erreur lors de la récupération des clients :", error);
      });
  }, [isAuthenticated]);

  useEffect(() => {
    fetchClients();

    // Retrieve the success message from localStorage (if any)
    const storedMessage = localStorage.getItem("successMessage");
    if (storedMessage) {
      setSuccessMessage(storedMessage);
      localStorage.removeItem("successMessage"); // Clear it after displaying
    }
  }, [fetchClients]);

  const handleClientClick = (client) => {
    setSelectedClient(client);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  // Handle file change
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const clientId = selectedClient.command_id;
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("name", selectedClient.name);
    formData.append("phone_number", selectedClient.phone_number);
    formData.append("city", selectedClient.city);
    formData.append("home_address", selectedClient.home_address);
    formData.append("comment_client", selectedClient.comment_client);
    formData.append("order_state", selectedClient.order_state);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    // Perform the PATCH request to update the client information
    axios
      .patch(`${API_BASE_URL}/api/commands/${clientId}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        localStorage.setItem(
          "successMessage",
          "Client mis à jour avec succès !",
        );
        localStorage.setItem("selectedClient", JSON.stringify(selectedClient));
        window.location.reload(); // Reload the page
      })
      .catch((error) => {
        // console.error("Erreur lors de la mise à jour du client :", error);
      });
  };

  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Display success message */}
      {/* --------------------------------------------------------------------------------*/}
      {successMessage && (
        <Alert color="success" toggle={() => setSuccessMessage("")}>
          {successMessage}
        </Alert>
      )}

      {/* --------------------------------------------------------------------------------*/}
      {/* table-1 */}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <Card>
          <CardBody>
            <ProjectTables
              clients={clients}
              onClientClick={handleClientClick}
            />
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
                    <th>Nom</th>
                    <th>Numéro de Téléphone</th>
                    <th>Ville</th>
                    <th>Adresse</th>
                    <th>Commentaire du Client</th>
                    <th>État de la Commande</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{selectedClient.name}</td>
                    <td>{selectedClient.phone_number}</td>
                    <td>{selectedClient.city}</td>
                    <td>{selectedClient.home_address}</td>
                    <td
                      style={{
                        maxWidth: "150px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {selectedClient.comment_client}
                    </td>
                    <td>
                      {selectedClient.order_state === "PENDING"
                        ? "En attente"
                        : selectedClient.order_state === "PROCESSING"
                          ? "En cours"
                          : selectedClient.order_state === "COMPLETED"
                            ? "Terminée"
                            : selectedClient.order_state === "CANCELLED"
                              ? "Annulée"
                              : null}
                    </td>

                    <td>
                      <a
                        href={selectedClient.image}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Télécharger le Fichier
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        )}
      </Col>

      {/* Form */}
      <Col lg="12" className="mt-4">
        {selectedClient && (
          <Card>
            <CardTitle tag="h5" className="border-bottom p-3 mb-0 fw-bold">
              <i className="bi bi-bell me-2"> </i>
              Modifier les Informations de la Commande
            </CardTitle>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="name" className="">
                    Nom
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={selectedClient.name || ""}
                    onChange={handleInputChange}
                    placeholder="Entrez le nom complet"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone_number">Numéro de Téléphone</Label>
                  <Input
                    id="phone_number"
                    name="phone_number"
                    value={selectedClient.phone_number || ""}
                    onChange={handleInputChange}
                    placeholder="Entrez le numéro de téléphone"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="city">Ville</Label>
                  <Input
                    id="city"
                    name="city"
                    value={selectedClient.city || ""}
                    onChange={handleInputChange}
                    placeholder="Entrez la ville"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="home_address">Adresse</Label>
                  <Input
                    id="home_address"
                    name="home_address"
                    value={selectedClient.home_address || ""}
                    onChange={handleInputChange}
                    placeholder="Entrez l'adresse"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="comment_client">Commentaire du Client</Label>
                  <Input
                    id="comment_client"
                    name="comment_client"
                    value={selectedClient.comment_client || ""}
                    onChange={handleInputChange}
                    placeholder="Entrez le commentaire du client"
                    type="textarea"
                    rows="4" // Adjust the number of rows based on the desired height
                    style={{ whiteSpace: "pre-wrap" }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="comment_admin">Commentaire de l'Admin</Label>
                  <Input
                    id="comment_admin"
                    name="comment_admin"
                    value={selectedClient.comment_admin || ""}
                    onChange={handleInputChange}
                    placeholder="Entrez le commentaire de l'admin"
                    type="textarea"
                    rows="4" // Adjust the number of rows based on the desired height
                    style={{ whiteSpace: "pre-wrap" }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="order_state">État de la Commande</Label>
                  <Input
                    id="order_state"
                    name="order_state"
                    value={selectedClient.order_state || ""}
                    onChange={handleInputChange}
                    type="select"
                  >
                    <option value="PENDING">En attente</option>
                    <option value="PROCESSING">En cours</option>
                    <option value="COMPLETED">Terminée</option>
                    <option value="CANCELLED">Annulée</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="image">Image (choisir un fichier)</Label>
                  <Input
                    id="image"
                    name="image"
                    type="file"
                    onChange={handleFileChange}
                  />
                </FormGroup>
                <Button type="submit" color="primary">
                  Mettre à jour
                </Button>
              </Form>
            </CardBody>
          </Card>
        )}
      </Col>
    </Row>
  );
};

export default Tables;
