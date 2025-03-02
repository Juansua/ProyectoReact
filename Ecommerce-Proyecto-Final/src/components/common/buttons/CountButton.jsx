function CountButton({ onClick, children, count }) {
  return (
    <button onClick={onClick} count={count} className="bg-slate-200 rounded-sm hover:bg-slate-300">{children}</button>
  )
}

export default CountButton