import { useSwiper } from 'swiper/react';

export default function SlideNextButton(props) {
  const swiper = useSwiper();

  if (props.isLast === true) {
    return (
      <div className="w-20"></div>
    )
  } else return (
    <button className='w-20' onClick={() => swiper.slideNext()}>    
      <svg width="75px" height="75px" viewBox="0 0 32 32" version="1.1" >
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Icon-Set-Filled" transform="translate(-466.000000, -985.000000)" fill="#ffffff">
                <path d="M489.535,1001.879 L483.879,1007.54 C483.488,1007.93 482.855,1007.93 482.465,1007.54 C482.074,1007.14 482.074,1006.51 482.465,1006.12 L486.586,1002 L476,1002 C475.447,1002 475,1001.552 475,1001 C475,1000.447 475.447,1000 476,1000 L486.586,1000 L482.465,995.879 C482.074,995.488 482.074,994.854 482.465,994.465 C482.855,994.074 483.488,994.074 483.879,994.465 L489.535,1000.121 C489.775,1000.361 489.85,1000.689 489.795,1001 C489.85,1001.311 489.775,1001.639 489.535,1001.879 L489.535,1001.879 Z M494,985 L470,985 C467.791,985 466,986.791 466,989 L466,1013 C466,1015.21 467.791,1017 470,1017 L494,1017 C496.209,1017 498,1015.21 498,1013 L498,989 C498,986.791 496.209,985 494,985 L494,985 Z" id="arrow-right-square" ></path>
            </g>
        </g>
      </svg>
    </button>
  );
}