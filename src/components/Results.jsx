import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { RESULT_PASSWORD } from "../config";

const COLORS = ["#ff9933", "#3366cc", "#00cc99"];

const Results = () => {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");

  const votes = JSON.parse(localStorage.getItem("votes") || "{}");
  const data = Object.keys(votes).map((key) => ({
    name: key,
    value: votes[key],
  }));

  if (!auth) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h3>Enter Password to View Results</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => setAuth(password === RESULT_PASSWORD)}>
          Submit
        </button>
        {password && password !== RESULT_PASSWORD && <p>Wrong password!</p>}
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Voting Results</h2>
      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Results;
