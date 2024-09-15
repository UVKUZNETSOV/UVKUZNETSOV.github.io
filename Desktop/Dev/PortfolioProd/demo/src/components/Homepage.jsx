import arrow from '../assets/arrow-1.svg'

export const Homepage = () => {
  return (
    <div className=" text-white flex justify-center items-center h-svh px-4">
      <div className="flex flex-col text-center gap-5">
        <h1 className=" text-6xl">Welcome to my page!</h1>
        <h2 className="text-4xl text-white">Click arrow to read more about me</h2>
        <a className='flex justify-center' href="/about">
          <img className=' w-16' src={arrow} alt="" />
        </a>
      </div>
    </div>
  )
}
