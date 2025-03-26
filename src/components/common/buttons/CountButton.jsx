function CountButton({ onClick, children, count }) {
  return (
    <button onClick={onClick} count={count}>
      {children}
    </button>
  );
}

export default CountButton;
