import MainButton from "../buttons/MainButton"

function SimpleModal( {isOpen, onClose, children} ) {

    if (!isOpen) return null

  return (
        <div className="lg:w-4/5 mt-12 mx-auto flex flex-wrap py-8 pr-16 rounded-2xl drop-shadow-xl bg-white">
            {children}
        </div>
  )
}

export default SimpleModal