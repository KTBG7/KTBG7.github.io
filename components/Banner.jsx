import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Banner(props) {
    const handleClick=()=>{props.setSubmitted(false)};
  return (
    <div className='fixed w-full flex bottom-14 justify-center items-center rounded-md'>
      <div className="w-3/4 lg:w-1/2 z-30 flex gap-x-6 bg-secondary rounded-lg py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm leading-6 text-white">
          Form submitted, I'll respond within a day.
      </p>
      <div className="flex flex-1 justify-end">
        <button type="button" onClick={handleClick} className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
    </div>
  )
}