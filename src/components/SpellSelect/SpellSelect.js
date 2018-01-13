import React from 'react'

import Select from '../Select'
import Spells from '../Spells'

import './SpellSelect.css'

export const SpellSelect = props => (
  <Select className='Select' size='large' placeholder='Click to add/remove spell' {...props}>
    {
       Spells.map((spell, i) => (
        <Select.Option key={i} value={spell.label}>
          {spell.name}
          <span className='SizeLabel'>
            {spell.size}
          </span>
        </Select.Option>
      ))
    }
  </Select>
)

export default SpellSelect