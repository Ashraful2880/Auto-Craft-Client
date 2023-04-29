import CardLoading from "@/Components/Shared/Loading/CardLoading";
import { useRouter } from "next/router";
import useAuth from "../Hooks/UseAuth";


const PrivateRoute = ({ children }) => {
  const { user, isloading } = useAuth();
  const router = useRouter();

  if (isloading) {
    return (
      <div className="container mx-auto pt-20">
        <CardLoading />
      </div>
    );
  } else if (!user?.email) {
    router?.push("/login");
  } else {
    return children;
  }
};

export default PrivateRoute;
