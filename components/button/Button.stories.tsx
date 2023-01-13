import React from 'react'

import Button from './Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  component: Button,
  title: 'Button',
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Text = Template.bind({})
export const Outlined = Template.bind({})

Primary.args = {
  children: 'Button',
  variant: 'contained',
  color: 'primary',
}

Secondary.args = {
  children: 'Button',
  color: 'secondary',
  variant: 'contained',
}

Text.args = {
  children: 'Button',
  color: 'text',
  variant: 'text',
}

Outlined.args = {
  children: 'Button',
  color: 'primary',
  variant: 'outlined',
}
