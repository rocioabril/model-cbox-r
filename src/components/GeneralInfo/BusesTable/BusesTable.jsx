import Table from 'react-bootstrap/Table';

const BusesTable = () => {
  const buses = [
    {
      id: 1,
      name: "Bus 1",
      status: "Active",
      address: "1.1.1.1",
    },
    {
      id: 2,
      name: "Bus 2",
      status: "Inactive",
      address: "2.2.2.2",
    },
  ];

  return (
    <Table striped bordered responsive className="buses-table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
        {buses.map((bus) => (
          <tr key={bus.id}>
            <td>{bus.id}</td>
            <td>{bus.name}</td>
            <td>{bus.status}</td>
            <td>{bus.address}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BusesTable;
