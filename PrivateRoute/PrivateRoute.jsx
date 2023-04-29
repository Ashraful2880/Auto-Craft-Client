import CardLoading from "@/Components/Shared/Loading/CardLoading";
import { useRouter } from "next/router";
import useFirebase from "../Hooks/UseFirebase";

const PrivateRoute = ({ children }) => {
  const { user, isloading } = useFirebase();
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
