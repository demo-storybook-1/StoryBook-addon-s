// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MButtonComponent } from 'angular-dsm'; './m-button.component';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Demo/mbutton',
  component: MButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
  },
} as Meta;

const Template: Story<MButtonComponent> = (args: MButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: '#ff6200',
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small',
};

export const myStory = Template.bind({})
myStory.args={
  backgroundColor:'#ff6200',
  label:'LABEL'
}
myStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/lhSyjNyMAL0RFeOT6yy2v7/Test?node-id=3%3A3&scaling=min-zoom&page-id=0%3A1',
  },
}