const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    nextShipment: {
      day: 1,
      month: 6,
      year: 2021
    }
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    nextShipment: {
      day: 15,
      month: 6,
      year: 2021
    }
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    nextShipment: {
      day: 3,
      month: 6,
      year: 2021
    }
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    nextShipment: {
      day: 1,
      month: 6,
      year: 2021
    }
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    nextShipment: {
      day: 10,
      month: 6,
      year: 2021
    }
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    nextShipment: {
      day: 3,
      month: 7,
      year: 2021
    }
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    nextShipment: {
      day: 1,
      month: 6,
      year: 2021
    }
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    nextShipment: {
      day: 8,
      month: 6,
      year: 2021
    }
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    nextShipment: {
      day: 1,
      month: 7,
      year: 2021
    }
  }
]


const app = new Vue({
  el: '#app',
  data: {
      items: tshirts
  },
  methods: {
    stock_days: function (date) {
      const now = new Date()
      const difference = date.getTime() - now.getTime() 
      return Math.floor(difference / 1000 / 60 / 60 / 24)
    },
    shipment_date: function (dd, mm, yyyy) {
      const ms = new Date(yyyy, mm - 1, dd)
      return ms
    }
  }
})
