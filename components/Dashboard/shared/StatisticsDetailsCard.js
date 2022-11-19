import React from 'react'

const StatisticsDetailsCard = ({item}) => {
    const {bgColor1, bgColor2} = item
  return (
    <div className={`bg-gradient-to-l from-[${bgColor1}] to-[${bgColor2}] p-6 rounded-lg`}>StatisticsDetailsCard</div>
  )
}

export default StatisticsDetailsCard