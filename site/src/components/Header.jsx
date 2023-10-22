import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";

export default function Header() {
  const { setIsLoading } = useContext(LoadingContext);

  return (
    <header>
      <Link to={"/"} onClick={() => setIsLoading(true)}>
        <h1 className="main-header">Monster Hunter</h1>
        <h2 className="sub-header">Hunting Log</h2>
      </Link>
    </header>
  );
}
