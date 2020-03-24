import React from 'react'

const StatItem = (props) => {
  const indicatorSize = (n) => ({
    width: n + 'px',
    backgroundColor: n<'50' ? 'saddlebrown' : n<'100' ? 'rgb(34, 61, 44)' : 'green'
  })
  return (
    <div>
      {props.stats.map((stat,index) =>
        <div key={index} className='baseStats'>
          <div className="baseStatName">{stat.stat.name} </div>
          <div className="baseStatNumber"> {stat.base_stat}</div>
          <div className="baseStatIndicator" style={indicatorSize(stat.base_stat)}></div>
        </div>
      )}
    </div>
  )
}

export default StatItem
