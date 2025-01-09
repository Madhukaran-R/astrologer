let AstroButton = (props) => {
  return (
    <div>
      <button {...props} style={{ background: props.color }} className="astro-button">
        {props.title} {props.icon}
      </button>
    </div>
  );
};

export default AstroButton;
