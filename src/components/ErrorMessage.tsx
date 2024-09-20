import { Box, Typography } from "@mui/material";

interface ErrorProps {
  message: string;
}

const ErrorMessage = (error: ErrorProps) => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 1,
        mb: 2,
        textAlign: "center",
        alignItems: "center"
      }}
    >
      <Typography variant="h4" color="warning">
        {error.message || "An error occurred."}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
