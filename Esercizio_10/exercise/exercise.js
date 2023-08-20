const order = {};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}

// Non sono riuscito a capire cosa fare