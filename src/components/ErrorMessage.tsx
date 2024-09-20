

interface ErrorProps {
    message: string;
}

const ErrorMessage = (error: ErrorProps) => {
  return (
    <div className="error-wrapper">
        <h2 className="error-message">{error.message}</h2>
    </div>
  )
}

export default ErrorMessage