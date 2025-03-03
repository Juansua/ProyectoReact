

function MainButton({children, className}) {
  return (
    <button className={
        `
        py-[10px] px-6 text-sm rounded-md bg-sec-blue-700 hover:bg-sec-blue-800 text-white font-regular ${className} transition-colors duration-300
        `
    }>
        {children}
    </button>
  )
}

export default MainButton