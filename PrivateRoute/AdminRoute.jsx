import CardLoading from "@/Components/Shared/Loading/CardLoading";
import { useRouter } from "next/router";
import { useAlert } from "react-alert";
import useFirebase from "../Hooks/UseFirebase";

const AdminRoute = ({ children }) => {
  const alert = useAlert();
  const { user, isloading, admin } = useFirebase();
  const router = useRouter();

  if (isloading) {
    return <CardLoading />;
  } 
/*   else if (!user?.email) {
    router?.push("/login");
  } else if (!admin) {
    router.push("/dashboard");
    alert.error("This is Admin Route & You are Not an Admin");
  } */
   else {
    return children;
  }
};

export default AdminRoute;
