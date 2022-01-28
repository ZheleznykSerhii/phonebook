import React from 'react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

import PhoneListMUI from '../phoneListMUI'

describe('Phone List MI', () => {
  it('snapShot', () => {
    const component = renderer.create(
      <PhoneListMUI contacts={[]} tel={12342} name="someName" />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
