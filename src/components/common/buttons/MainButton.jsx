import { ChevronRightIcon } from '@heroicons/react/24/outline'

function MainButton({children, className, rightIcon}) {

  return (
    <button className={
        `
        flex items-center gap-2 py-[10px] px-6 text-sm rounded-md bg-sec-blue-700 hover:bg-sec-blue-800 text-white font-regular ${className} transition duration-200
        `
    }>
        {children} {rightIcon ? <ChevronRightIcon className='h-6'/> : ""}
    </button>
  )
}

export default MainButton