import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  name: 'topping',
  // visible title
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'Name of the name of the topping',
    },
    {
      name: 'vegan',
      title: 'Vegan',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegan: 'vegan',
    },

    prepare: ({ name, vegan }) => ({
      title: `${name} ${vegan ? '🥬' : ''}`,
    }),
  },
};
