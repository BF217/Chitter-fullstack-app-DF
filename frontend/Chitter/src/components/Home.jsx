import Navbar from "./Navbar";
import PeepCards from "./PeepCards";
import getPeeps from "../services/getPeepsService";
import { useState, useEffect } from "react";
import PeepForm from "./PeepForm";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const [error, setError] = useState(null);
  const [peeps, setPeeps] = useState([]);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const fetchPeeps = async () => {
      try {
        const response = await getPeeps();
        setPeeps(response);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPeeps();
  }, []);

  return (
    <div>
      <Navbar />
      <br />
      <div className="container mt-5">
        <h1 className="mb-3">Welcome to Chitter!</h1>
        {isLoggedIn && (
          <div className="row">
            <PeepForm />
          </div>
        )}
        <h2 className="mt-2">Peeps from around the world:</h2>
        <div className="row">
          {error && (
            <div className="alert alert-danger mt-5" role="alert">
              {error}
            </div>
          )}
          {peeps.length > 0 &&
            peeps.map((peep) => {
              return <PeepCards key={peep._id} peep={peep} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
