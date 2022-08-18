import { Col, Row } from "reactstrap";
import StudyChart from "../components/dashboard/StudyChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import Footer from "../components/dashboard/Footer";
import styles from  "../assets/style/starter.module.css";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Flash Cards",
    href: "/flashcard",
    icon: "bi bi-card-text",
  },
];



const Starter = () => {
  
  

  return (
    <div>
      <header className={styles.masthead}> 
            <div className= {styles.container}> 
                <div className={styles.mastheadsubheading}>Welcome To FlashCard</div>
                <div className={styles.mastheadheading }>It's Nice To Meet You</div>
                <Link to="/flashcard" className={styles.btnstarter}>
                  Start to study amazing things!
                </Link>
                    
        
                
            </div>
        </header>
      
        
      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <StudyChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
      {/***Blog Cards***/}
      <Row>
          <>
          <Footer />
          </>
          
      </Row>
    </div>
  );
};

export default Starter;
