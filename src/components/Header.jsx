import { useMemo } from "react";

function Header({ message }) {
  const quotes = [
    "Keep learning every day",
    "Dream big and build bigger then your dream",
    "Code creates possibilities.",
    "Small steps every day can make big chnages."
  ];

  const randomQuote = useMemo(() => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }, []);

  return (
    <header id="home" className="header">
      <h1>Hi, I'm Basira Mehrzad</h1>

      <p>{message}</p>

      <h3>{randomQuote}</h3>
    </header>
  );
}

export default Header;