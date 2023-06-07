import { Redirect } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { Center, Spinner } from "@chakra-ui/react";

const AuthMiddleware = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (!user) {
    return <Redirect to="/login" />;
  }

  return children;
};

export default AuthMiddleware;