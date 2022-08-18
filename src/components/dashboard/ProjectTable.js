import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import {Link} from 'react-router-dom';
import styles from  "../../assets/style/projectTable.module.css";


import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    images: user1,
    terms: "Unit 10. Vocab. Use the correct form",
    owner: "maryam_elnashar",
    topic: "English"
  },
  {
    images: user2,
    terms: "CAE Osborne Multiple choice Test 7 (Vanilla Surprise)",
    owner: "maryam_elnashar",
    topic: "English"
  },
  {
    images: user3,
    terms: "CAE Osborne Multiple choice Test 8 (Raising Awarness)",
    owner: "maryam_elnashar",
    topic: "English"
  },
  {
    images: user4,
    terms: "UNIT 1/SECTION 1",
    owner: "maryam_elnashar",
    topic: "English"
  },
  {
    images: user5,
    terms: "CPE UOE Exam Practice Test 6",
    owner: "maryam_elnashar",
    topic: "English"
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Study sets</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            <>
            {tableData.length} sets are already 
            </>
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Terms</th>
                <th>Owner</th>
                <th>Topic</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.images}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 >
                          <Link to="https://www.w3schools.com/csSref/sel_hover.asp" className={styles.quiz} >
                            {tdata.terms}
                          </Link>
                         
                          
                          
                          </h6>
                        
                      </div>
                    </div>
                  </td>
                  <td>{tdata.owner}</td>
                  <td>{tdata.topic}</td>
                  
                  
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
