import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";

// Function to authenticate and get the token
const authenticate = async () => {
  try {
    const response = await axios.post("http://localhost:8000/api/token/", {
      email: "kamalmiftah01@gmail.com",
      password: "4140",
    });
    return response.data.access;
  } catch (error) {
    console.error("Error authenticating:", error);
    return null;
  }
};

// Function to fetch data from the API
const fetchData = async (token) => {
  try {
    const response = await axios.get("http://localhost:8000/api/commands/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("API Response:", response.data); // Print the full API response
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const ProjectTables = ({ onClientClick }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const token = await authenticate();
      if (token) {
        const data = await fetchData(token);
        console.log("Fetched Data:", data); // Print the fetched data
        setTableData(data);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

          <Table className="table-full-width no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>Order State</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata) => (
                <tr
                  key={tdata.command_id}
                  className="border-top"
                  onClick={() => onClientClick(tdata)}
                  style={{ cursor: 'pointer' }}
                >
                  <td>
                    <div className="d-flex align-items-center py-2">
                      <div className="ms-0">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.phone_number || 'N/A'}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.city || 'N/A'}</td>
                  <td>
                    {tdata.order_state === "PENDING" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.order_state === "HOLD" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
