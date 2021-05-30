import { useState } from "react";

const Footer = () => {
  const [count, setCount] = useState(0);
  const onChange = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div className="container mt">
      {/* Footer content here */}
      <p>
        Let's <strong> click the button </strong> below:
      </p>
      <button onClick={onChange}>Click here</button>
      <p>You've clicked {count} times</p>
    </div>
  );
};

export default Footer;
