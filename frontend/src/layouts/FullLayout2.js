import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";
import Tables from "../views/ui/Tables";
import Forms from "../views/ui/Forms";

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
            <Forms />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
