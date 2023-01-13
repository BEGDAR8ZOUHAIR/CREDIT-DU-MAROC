import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CompteForm from "../components/CompteForm";
import CompteItem from "../components/CompteItem";
import Spinner from "../components/Spinner";
import { getComptes, reset } from "../features/comptes/compteSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { comptes, isLoading, isError, message } = useSelector(
    (state) => state.comptes
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getComptes());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <div className="head">Welcome {user && user.name}</div>
        <p>Compte </p>
      </section>

      <CompteForm />

      <section className="content">
        {comptes.length > 0 ? (
          <div className="compte">
            {comptes.map((compte) => (
              <CompteItem key={compte._id} compte={compte} />
            ))}
          </div>
        ) : (
          <h4>You have not set any Comptes</h4>
        )}
      </section>
    </>
  );
}

export default Dashboard;
