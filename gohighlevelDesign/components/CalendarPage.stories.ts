import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'SalonQueen/CalendarPage',
}

export default meta
type Story = StoryObj

export const Documentation: Story = {
  render: () => ({
    template: '<div style="padding: 20px; font-family: sans-serif;"><h2>CalendarPage CSS</h2><p>Siehe CalendarPage Dokumentation für alle CSS-Sections.</p></div>',
  }),
}
