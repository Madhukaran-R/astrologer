let AstroButton = (props) => {
  return (
    <div>
      <button {...props} className="astro-button">
        {props.title} {props.icon}
      </button>
    </div>
  );
};

export default AstroButton;
