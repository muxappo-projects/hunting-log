import { useLocation } from "react-router-dom";
import guildCrest from "../images/Hunter_s_Guild_Crest-removebg-preview.png";

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header>
      <h1 className="main-header">Monster Hunter</h1>
      <h2 className="sub-header">Hunting Log</h2>
    </header>
  );
}
