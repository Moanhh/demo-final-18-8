import { Outlet } from "react-router-dom";

import Header from "./Header";
import { Container } from "reactstrap";
import TopNav from "../Component/Fragment/TopNav";

const FullLayout = () => {
  return (
    <main>
      <div >
        {/********Sidebar**********/}
       
        {/********Content Area**********/}

        <div >
         
          {/********header**********/}
          <Header />
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
