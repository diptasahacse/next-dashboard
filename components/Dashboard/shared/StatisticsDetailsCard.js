import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
const StatisticsDetailsCard = ({ item }) => {
  const { bgColor1, bgColor2, statusIcon, title, totalValue, percentValue, itemIcon, bottomText } = item;
  // statusIcon: faArrowUpShortWide,
  //   title: "Total Users",
  //   totalValue: 277,
  //   percentValue: "+95",
  //   itemIcon: faUser,
  //   bottomText: "Last Month",
  //   bgColor1: "#f4d02b",
  //   bgColor2: "#e1940e",
  return (
    <div className="p-6 rounded-lg relative" style={{ background: `linear-gradient(to left, ${bgColor1}, ${bgColor2})` }}>
      <div className='absolute opacity-20 left-0  bottom-0'>
        <span className='text-9xl'>
          <FontAwesomeIcon icon={statusIcon} />
        </span>
      </div>
      <div className='flex justify-between items-center mb-10'>
        <div className=''>
          <h3 className='text-xl'>{title}</h3>
          <h3 className='text-3xl font-bold'>{totalValue}</h3>
        </div>
        <p className='text-2xl bg-gray-500 leading-10 h-12 w-12 text-center rounded-md'>
        <FontAwesomeIcon icon={itemIcon} />
        </p>
        
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <span className='bg-gray-600 inline-block rounded p-1'>{percentValue}%</span>
          <p className='ml-2'>{bottomText}</p>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end">

          <label tabIndex={0} className="p-1 cursor-pointer">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-accent rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default StatisticsDetailsCard