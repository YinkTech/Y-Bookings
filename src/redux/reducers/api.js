
export const addItems = async (items) => {
  const response = await fetch('http://127.0.0.1:3000/booking_menu_items', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      accepts: 'application/json',
    },
    body: items,
  });
  return response.json();
};
