import { Box, Container, Typography } from "@mui/material"


const About = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography color="secondary" variant="h4" component="h1" gutterBottom>
          About This Website
        </Typography>
        <Typography variant="body1">
          This website is a demo for an assignment only.
        </Typography>
      </Box>
    </Container>
  )
}

export default About