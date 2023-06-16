type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '10%' }}
    >
      <p className="fw-semibold fst-italic fs-3 text-secondary">{message}</p>
    </div>
  );
};
