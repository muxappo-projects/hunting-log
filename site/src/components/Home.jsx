import { Link } from "react-router-dom";
import FindMonster from "./FindMonster";

export default function Home({ monster, setMonster, errorMsg, setErrorMsg }) {
  return (
    <div>
      <FindMonster
        monster={monster}
        setMonster={setMonster}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      />
      <h3 className="list-subheader">
        Or click below to see full lists by monster type:
      </h3>
      <Link to={"/large-monsters"}>
        <button>Large Monsters (42)</button>
      </Link>
      <Link to={"/small-monsters"}>
        <button>Small Monsters (16)</button>
      </Link>
    </div>
  );
}
