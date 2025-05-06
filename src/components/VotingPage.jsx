const parties = [
    { name: "BJP", logo: "/party-logos/bjp.png" },
    { name: "Congress", logo: "/party-logos/congress.png" },
    { name: "AAP", logo: "/party-logos/aap.png" },
  ];
  
  const VotingPage = ({ setVoted }) => {
    const handleVote = (party) => {
      if (localStorage.getItem("hasVoted") === "true") {
        alert("You have already voted.");
        return;
      }
      const votes = JSON.parse(localStorage.getItem("votes") || "{}");
      votes[party] = (votes[party] || 0) + 1;
      localStorage.setItem("votes", JSON.stringify(votes));
      localStorage.setItem("hasVoted", "true");
      setVoted(true);
    };
  
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Vote for Your Party</h2>
        {parties.map((p) => (
          <div key={p.name} style={{ margin: 10 }}>
            <img src={p.logo} alt={p.name} height="80" />
            <br />
            <button onClick={() => handleVote(p.name)}>{p.name}</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default VotingPage;
  