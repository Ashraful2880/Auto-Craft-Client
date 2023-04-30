import CardLoading from "@/Components/Shared/Loading/CardLoading";
import { useRouter } from "next/router";
import { useAlert } from "react-alert";
import useFirebase from "../Hooks/UseFirebase";
import { useEffect, useState } from "react";

const AdminRoute = ({ children }) => {
  const alert = useAlert();
  const { user, admin } = useFirebase();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user?.email && admin) {
      setIsLoading(false);
    }
  }, [user?.email, admin]);

  if (isLoading) {
    return <CardLoading />;
  } else if (!admin?.admin) {
    router.push("/dashboard");
    alert.error("This is Admin Route & You are Not an Admin");
  } else if (!user?.email) {
    router?.push("/login");
  } else {
    return children;
  }
};

export default AdminRoute;
