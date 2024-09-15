import SlideNextButton from './shared/slideNextButton';
import SlidePrevButton from './shared/slidePrevButton';

import arrow from '../assets/arrow-2.svg'

import desktop from '../assets/desktop.svg'
import tablet from '../assets/tablet.svg'
import mobile from '../assets/mobile.svg'

export const Project = (props) => {
  const adaptive = (props) => {
    if (props.adapted === "3") {
      return (
        <div className='flex gap-2'>
          <img className='w-10' src={desktop} alt="desktop" />
          <img className='w-10' src={tablet} alt="tablet" />
          <img className='w-10' src={mobile} alt="mobile" />
        </div>
      )
    } else if (props.adapted === "2") {
      return (
        <div className='flex gap-2'>
          <img className='w-10' src={desktop} alt="desktop" />
          <img className='w-10' src={tablet} alt="tablet" />
        </div>
      )
    } else {
      return (
        <div className='flex gap-2'>
          <img className='w-10' src={desktop} alt="desktop" />
        </div>
      )
    }
  }
  return (
    <div className="flex w-full justify-center h-full">
      <SlidePrevButton isFirst={props.firstSlide} />
      <div className='flex flex-col justify-center w-3/5 h-full text-white'>
        <h1 className='text-center text-4xl pb-10'>{props.name}</h1>
        <div className="flex justify-center gap-20 h-4/6">
          <div className="flex flex-col w-64 justify-between h-full ">
            <div className="flex flex-col gap-2">
              <h4 className='text-2xl'>Description:</h4>
              <p className=' text-slate-300'>{props.description}</p>
              <h4 className='pb-3 text-2xl'>Adapted:</h4>
              <div className="flex gap-2">
                {adaptive(props)}
              </div>
            </div>
            <a className='flex justify-between items-center p-5 mb-5 border rounded-2xl transition-all hover:bg-black' href={props.link} rel="noreferrer" target="_blank">Go to website <img className='w-10' src={arrow} alt="" /></a>
          </div>
          <img src={props.preview} alt="" className='h-full rounded-xl'/>
        </div>
      </div>
      <SlideNextButton isLast={props.lastSlide} />
    </div>
    
  )
}
