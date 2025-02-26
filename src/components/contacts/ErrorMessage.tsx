const ErrorMessage = ({ message }: { message?: string }) => {
  return message ? (
    <p className="my-2 text-error text-sm font-medium">{message}</p>
  ) : null;
};

export default ErrorMessage;
