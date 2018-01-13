import React from 'react'

import Spells from '../Spells'
import SpellSelect from '../SpellSelect'

import PointsDisplay from './PointsDisplay'

import './InputForm.css'

export default class InputForm extends React.Component {
  constructor(props) {
    super(props)
      this.state={
        spellsSize: 0,
        special: 0,
        input: "You can paste your mud 'spells' output here",
        allSpells: Spells,
        knownSpells: []
    }

    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleTextAreaChange=this.handleTextAreaChange.bind(this)
    this.handleTypeChange=this.handleTypeChange.bind(this)
  }

  handleInputChange (e) {
    let special=Number(e.target.value)

    if (special > 0) {special+=30}

    this.setState({special})
  }

  handleTextAreaChange (e) {
    const input=e.target.value,
          {allSpells}=this.state

    let knownSpells=[],
        spellsSize=0,
        a=input.toLowerCase().replace(/[^a-z]/gi, '')

    for (let i in allSpells) {
      let b=allSpells[i].name.toLowerCase().replace(/[^a-z]/gi, '')
      if (a.includes(b)) {
        knownSpells.push(allSpells[i].label)
        spellsSize += allSpells[i].size
      }
    }

    console.log('Input Spells:', knownSpells)

    this.setState({input, knownSpells, spellsSize})
  }

  handleTypeChange (e) {
    const {allSpells}=this.state
    let spellsSize=0
    
    for (let i in e) {
      for (let a in allSpells) {
        if (e[i] === allSpells[a].label) {
          spellsSize += allSpells[a].size
        }
      }
    }

    this.setState({
      knownSpells: e,
      spellsSize
    })
  }

  render() {
    const {input, spellsSize, special, knownSpells}=this.state

    return (
      <div>
        <div className='Display'>
          <PointsDisplay spellsSize={spellsSize} special={special} />
          <p>{knownSpells.join(" | ")}</p>
        </div>
        <SpellSelect
          mode='multiple'
          value={this.state.knownSpells}
          onChange={this.handleTypeChange}
        />
        <form>
          <div className='form-group LeftInput'>
            <div>
              <label>magic.spells.special</label>
            </div>
            <div>
              <input className='BonusInput' type='number' defaultValue={0} min={0} max={999} onChange={this.handleInputChange} />
            </div>
          </div>
          <div className='form-group RightInput'>
            <div>
              <label>spells</label>
            </div>
            <div>
              <textarea className='SpellsInput' placeholder={input} onChange={this.handleTextAreaChange} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}