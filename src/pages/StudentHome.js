import { Button } from "@mui/material";
import Navbar from "../components/Navbar";
import "./StuHome.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { useHistory } from "react-router-dom";

const StudentHome = () => {
  const { user } = useAuthContext();
  const history = useHistory();

  const routeChange = () => {
    let path = "ask";

    history.push(path);
    history.go();
  };

  const previous = () => {
    let path = "previous";
    history.push(path);
  };
  return (
    <div>
      <Navbar />
      <div className="vertical"></div>
      <div className="welcome">{`Welcome ${user.displayName} to Curiosity`}</div>
      <div className="para">
        <p>
          The basic motto of this project is to give students a platform from
          where they can ask and solve their doubts from the faculties of their
          own institute. This dedicated platform would allow the students to ask
          doubts 24 x 7 and get their solutions as quick as possible. 
          <br />
          <br />
          <br />
          The purpose of this project is to provide an efficient and reliable
          doubt solving portal to the students of this university and
          specifically cater their needs in a fast fashion.
        </p>
      </div>
      <div className="btn">
        <Button
          className="btn"
          variant="contained"
          fullWidth
          size="large"
          sx={{
            maxWidth: "100px",
            maxHeight: "200px",
            minWidth: "100px",
            minHeight: "100px",
          }}
          onClick={routeChange}
        >
          Ask Doubt
        </Button>
      </div>
      <div className="btn1">
        <Button
          className="btn1"
          variant="contained"
          size="large"
          fullWidth
          sx={{
            maxWidth: "100px",
            maxHeight: "200px",
            minWidth: "100px",
            minHeight: "100px",
          }}
          onClick={() => {
            previous();
          }}
        >
          Previous Doubt
        </Button>
      </div>
    </div>
  );
};

export default StudentHome;
