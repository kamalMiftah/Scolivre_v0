import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import API_BASE_URL from "./../../config";

// Fonction pour récupérer les données depuis l'API
export const fetchData = async (token, page = 1) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/commands/?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    return { results: [], count: 0 };
  }
};

const ProjectTables = ({ onClientClick }) => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const data = await fetchData(token, currentPage);
        setTableData(data.results);
        setTotalPages(Math.ceil(data.count / 10)); // Supposons 10 articles par page
      }
    };

    loadData();
  }, [currentPage]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5" className="fw-bold">
            Gestion des Commandes
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Surveillez, modifiez et gérez les commandes des clients.
          </CardSubtitle>

          <Table
            className="table-full-width no-wrap mt-3 align-middle"
            responsive
            borderless
          >
            <thead>
              <tr>
                <th>Nom</th>
                <th>Ville</th>
                <th>État de la Commande</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata) => (
                <tr
                  key={tdata.command_id}
                  className="border-top"
                  onClick={() => onClientClick(tdata)}
                  style={{ cursor: "pointer" }}
                >
                  <td>
                    <div className="d-flex align-items-center py-2">
                      <div className="ms-0">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">
                          {tdata.phone_number || "N/A"}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.city || "N/A"}</td>
                  <td>
                    {tdata.order_state === "PENDING" ? (
                      <div className="d-flex align-items-center">
                        <span className="p-2 bg-secondary rounded-circle d-inline-block me-2"></span>
                        <span>En attente</span>
                      </div>
                    ) : tdata.order_state === "PROCESSING" ? (
                      <div className="d-flex align-items-center">
                        <span className="p-2 bg-warning rounded-circle d-inline-block me-2"></span>
                        <span>En cours</span>
                      </div>
                    ) : tdata.order_state === "COMPLETED" ? (
                      <div className="d-flex align-items-center">
                        <span className="p-2 bg-success rounded-circle d-inline-block me-2"></span>
                        <span>Terminée</span>
                      </div>
                    ) : tdata.order_state === "CANCELLED" ? (
                      <div className="d-flex align-items-center">
                        <span className="p-2 bg-danger rounded-circle d-inline-block me-2"></span>
                        <span>Annulée</span>
                      </div>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Contrôles de Pagination */}
          <Pagination className="d-flex justify-content-center">
            <PaginationItem disabled={currentPage === 1}>
              <PaginationLink
                previous
                onClick={() => handlePageClick(currentPage - 1)}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem active={i + 1 === currentPage} key={i}>
                <PaginationLink onClick={() => handlePageClick(i + 1)}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem disabled={currentPage === totalPages}>
              <PaginationLink
                next
                onClick={() => handlePageClick(currentPage + 1)}
              />
            </PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
