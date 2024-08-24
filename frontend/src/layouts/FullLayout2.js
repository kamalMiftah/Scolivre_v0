import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";
import Tables from "../views/ui/Tables";
import { UserProvider } from "./UserContext"; // Ensure UserContext is imported

const FullLayout = () => {
  return (
    <UserProvider>
      <main>
        {/********header**********/}
        <Header />
        <div className="pageWrapper d-lg-flex">
          {/********Sidebar**********/}
          <aside className="sidebarArea shadow" id="sidebarArea">
            <Sidebar />
          </aside>
          {/********Content Area**********/}
          <div className="contentArea w-100">
            {/********Middle Content**********/}
            <Container className="p-4" fluid>
              <Tables />
              {/* <Forms /> */}
            </Container>
          </div>
        </div>
      </main>
    </UserProvider>
  );
};

export default FullLayout;
