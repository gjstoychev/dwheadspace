import React from 'react'

import Select from 'antd/lib/select'
import 'antd/lib/tree-select/style/css'

import classes from './Select.scss'

export class SelectWrapper extends React.Component {
  render () {
    return (
      <Select
        className={classes.select}
        notFoundContent='Not Found'
        optionFilterProp='children'
        {...this.props}
      />
    )
  }
}

const Selection = SelectWrapper

Selection.Option = Select.Option

export default Selection