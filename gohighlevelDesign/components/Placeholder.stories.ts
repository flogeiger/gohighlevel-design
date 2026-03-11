import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'SalonQueen/Einführung',
}

export default meta
type Story = StoryObj

export const Overview: Story = {
  render: () => ({
    template: '<div style="padding: 20px; font-family: sans-serif; color: #2c3e50;"><h2>SalonQueen GHL Whitelabel CSS</h2><p>Siehe Einführung für die vollständige Dokumentation.</p></div>',
  }),
}
