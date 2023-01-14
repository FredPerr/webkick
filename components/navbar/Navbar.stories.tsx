import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import Navbar from '@/components/navbar'
// import NavbarDrawerToggle from './DrawerToggle'

export default {
  component: Navbar,
  title: 'Navbar',
  // subcomponents: { NavbarDrawerToggle },
} as ComponentMeta<typeof Navbar>

const NavbarTemplate: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args} />
)
// const DrawerToggleTemplate: ComponentStory<typeof NavbarDrawerToggle> = (args) => <NavbarDrawerToggle {...args} />

export const NavbarDefault = NavbarTemplate.bind({})
// export const DrawerToggleDefault = DrawerToggleTemplate.bind({})

NavbarDefault.args = {}

// DrawerToggleDefault.args = {
//     onClick: () => {},
//     size: 24,
// }
