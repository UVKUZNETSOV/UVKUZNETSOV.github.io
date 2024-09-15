import me from '../assets/me.jpeg'
import arrow from '../assets/arrow-2.svg'

export const About = () => {
  const date = new Date()
  const bDate = new Date('10/22/2002')
  const res = Math.trunc(Math.abs(date.getTime() - bDate.getTime()) / (1000 * 3600 * 24 * 365))

  return (
    <div className=" text-zinc-200 flex justify-center h-svh flex-col ml-10 text-2xl lg:ml-52">
      <img className='w-60 rounded-xl' src={me} alt="" />
      <h1 className="pt-4 text-6xl text-white">My name is Yuriy Kuznetsov</h1>
      <div className="w-1/2">
        <p className="pt-4 ">I`m {res} years old and I am a Frontend Developer</p>
        <p className=''>I am in the last year of my bachelor`s degree in technical direction at Peoples` Friendship University of Russia.</p>
        <a className="flex mt-5 gap-3 justify-center rounded-3xl p-2 w-64 bg-black text-white" href="/projects">
            See my projects
            <img className='w-8' src={arrow} alt="" />
        </a>
      </div>
    </div>
  )
}
