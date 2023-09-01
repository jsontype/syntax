import Cart from './'

export default {
  title: 'Atoms/Cart',
  component: Cart,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
}

export const Price100 = {
  args: {
    price: 100,
  },
}

export const Price200 = {
  args: {
    price: 200,
  },
}
