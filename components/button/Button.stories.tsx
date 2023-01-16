import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from '../button'

export default {
  component: Button,
  title: 'Button',
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Contained = Template.bind({})
export const Text = Template.bind({})
export const Outlined = Template.bind({})

Contained.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Button',
  arrow: true,
}

Text.args = {
  variant: 'text',
  color: 'secondary',
  children: 'Button',
  arrow: true,
}

Outlined.args = {
  variant: 'outlined',
  color: 'primary',
  children: 'Button',
  arrow: true,
}
