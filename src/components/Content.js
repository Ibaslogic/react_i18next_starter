const Content = () => {
  return (
    <div className="container hero">
      <h1>Welcome to the react-i18next tutorial</h1>
      <p>Displaying $69.99 in the selected locale</p>
      <p>Formatting 3,000 in the selected language</p>
      <p>Today's date: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default Content;
