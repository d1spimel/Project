import { useContext } from "react";
import { HistoryContext } from "../HistoryNavigation/HistoryNavigation";

export default function Debug() {
  const { history } = useContext(HistoryContext);

  return (
    <div>
      <h2>History</h2>
      <ol>
        {history.map((path, index) => (
          <li key={index}>{path}</li>
        ))}
      </ol>
    </div>
  );
}