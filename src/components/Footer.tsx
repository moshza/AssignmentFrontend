import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear().toString();
  };
  return (
    <AppBar
      className="footer-comp"
      position="static"
      color="primary"
      component="footer"
       sx={{
        py: 1,
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
           Copyright {getCurrentYear()} &#169;
          </i>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
