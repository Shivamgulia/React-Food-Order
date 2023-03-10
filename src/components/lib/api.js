export async function getTables(orderData) {
  const response = await fetch(
    'https://springfoodmenu.azurewebsites.net/tables'
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create Order.');
  }
  return data;
}

export async function orderCompleted(props) {
  console.log(props);
  const response = await fetch(
    'https://springfoodmenu.azurewebsites.net/tables/' + props,
    {
      method: 'POST',
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create Order.');
  }
  return data;
}
