import React from 'react'

import Logo from './Logo'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  component: Logo,
  title: 'Logo',
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Base = Template.bind({})
export const Text = Template.bind({})

Base.args = {
  size: 50,
}

Text.args = {
  size: 50,
  text: true,
}
