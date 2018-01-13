import React from 'react'

import './InputForm.css'

export const PointsDisplay = ({spellsSize, special}) => {
  let color='white'
  let message='full headspace'

  if (!special) {
    message='total spells size'
  }

  if (special) {
    if (spellsSize > special) {
      color='red'
      message=` ${special-spellsSize} bonus`
    }
  
    if (spellsSize < special) {
      color='green'
      message=` ${special-spellsSize} points free`
    }
  }

  return (
    <div align='center'>
      <div className={color}>
        {spellsSize}
        <div style={{fontSize: '11px', verticalAlign: 'middle'}}>
          {message}
        </div>
      </div>
    </div>
  )
}

export default PointsDisplay