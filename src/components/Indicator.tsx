import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'
import { CgShapeCircle } from 'react-icons/cg'
import compoundFrequencyStore from '../stores/compoundFrequencyStore'

interface Props {
  size?: string
}

export const Indicator: FunctionComponent<Props> = observer(({ size = '48' }) => {
  const { getTrafficLightColor } = compoundFrequencyStore
  return <CgShapeCircle size={size} color={getTrafficLightColor()} />
})
