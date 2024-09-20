import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear().toString();
  };
  return (
    <AppBar
      position="static"
      color="primary"
      component="footer"
      sx={{
        py: 1,
        position: "absolute",
        bottom: "auto",
        width: "100%",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          Made by Moysh{" "}
          <i className="fa fa-copyright" aria-hidden="true">
            {" "}
            Copyright {getCurrentYear()}
          </i>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
