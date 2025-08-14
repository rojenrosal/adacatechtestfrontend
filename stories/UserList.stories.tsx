import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import UserList from '~/components/UserLists';

const meta: Meta<typeof UserList> = {
  title: 'User/UserList',
  component: UserList,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      // Wrap the component with BrowserRouter for routing context
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};