import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import Navbar from '@/components/navbar'
import NavbarDrawerToggle from './DrawerToggle'
import NavbarLink from './NavbarLink'

export default {
  component: Navbar,
  title: 'Navbar',
  subcomponents: { NavbarDrawerToggle, NavbarLink },
} as ComponentMeta<typeof Navbar>

const NavbarTemplate: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args} />
)
const DrawerToggleTemplate: ComponentStory<typeof NavbarDrawerToggle> = (
  args,
) => <NavbarDrawerToggle {...args} />
const NavbarLinkTemplate: ComponentStory<typeof NavbarLink> = (args) => (
  <NavbarLink {...args} />
)

export const Root = NavbarTemplate.bind({})
export const DrawerToggle = DrawerToggleTemplate.bind({})
export const Link = NavbarLinkTemplate.bind({})

Root.args = {}

DrawerToggle.args = {
  onClick: () => {},
  size: 24,
}

Link.args = {
  href: '#',
  text: 'Solutions',
}
