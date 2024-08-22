import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Starter from "../views/ui/Tables";
import { Container } from "reactstrap";
import Tables from "../views/ui/Tables";

const FullLayout = () => {
  return (
    <main>
      {/********header**********/}
      <Header />
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea">
          {/********Middle Content**********/}
          <Container className="p-4" fluid>
            <Tables />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
