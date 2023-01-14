import React from 'react'

import Input from './Input'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  component: Input,
  title: 'Input',
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Contained = Template.bind({})
export const Outlined = Template.bind({})
export const Underline = Template.bind({})

Contained.args = {
  name: 'Email',
  color: 'primary',
  variant: 'contained',
  note: 'Please enter your email address',
  state: 'error',
}

Underline.args = {
  name: 'Email',
  color: 'primary',
  variant: 'underline',
  note: 'Please enter your email address',
  state: 'error',
}

Outlined.args = {
  name: 'Email',
  color: 'primary',
  variant: 'outlined',
  note: 'Please enter your email address',
  state: 'error',
}
