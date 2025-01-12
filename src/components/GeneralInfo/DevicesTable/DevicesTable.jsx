import { BsEyeFill } from "react-icons/bs";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useLang } from "../../../context/LangContext";

const DevicesTable = () => {

  const { lang } = useLang();
  const devices = [
    {
      active: true,
      address_in_bus: "6",
      brand: "Riello",
      bus_address: "1.1.1.1:3",
      device2control: true,
      id_device: 2,
      id_planta: null,
      model: "RIELLO INVERSOR CENTRAL_Modbus Protocol R00",
      name: "Dev Test 1",
      nombre: "modbusrtu",
      params: { kw: 6, modbusSleep: 0.3 },
      serial: 23001,
    },
    {
      active: true,
      address_in_bus: "6",
      brand: "Riello",
      bus_address: "1.1.1.1:3",
      device2control: true,
      id_device: 2,
      id_planta: null,
      model: "RIELLO INVERSOR CENTRAL_Modbus Protocol R00",
      name: "Dev Test 2",
      nombre: "modbusrtu",
      params: { kw: 6, modbusSleep: 0.3 },
      serial: 23002,
    },
    {
      active: true,
      address_in_bus: "6",
      brand: "Riello",
      bus_address: "1.1.1.1:3",
      device2control: true,
      id_device: 2,
      id_planta: null,
      model: "RIELLO INVERSOR CENTRAL_Modbus Protocol R00",
      name: "Dev Test 2",
      nombre: "modbusrtu",
      params: { kw: 6, modbusSleep: 0.3 },
      serial: 23002,
    },
    {
      active: true,
      address_in_bus: "6",
      brand: "Riello",
      bus_address: "1.1.1.1:3",
      device2control: true,
      id_device: 2,
      id_planta: null,
      model: "RIELLO INVERSOR CENTRAL_Modbus Protocol R00",
      name: "Dev Test 2",
      nombre: "modbusrtu",
      params: { kw: 6, modbusSleep: 0.3 },
      serial: 23002,
    },
    {
      active: true,
      address_in_bus: "6",
      brand: "Riello",
      bus_address: "1.1.1.1:3",
      device2control: true,
      id_device: 2,
      id_planta: null,
      model: "RIELLO INVERSOR CENTRAL_Modbus Protocol R00",
      name: "Dev Test 2",
      nombre: "modbusrtu",
      params: { kw: 6, modbusSleep: 0.3 },
      serial: 23002,
    },
    {
      active: true,
      address_in_bus: "6",
      brand: "Riello",
      bus_address: "1.1.1.1:3",
      device2control: true,
      id_device: 2,
      id_planta: null,
      model: "RIELLO INVERSOR CENTRAL_Modbus Protocol R00",
      name: "Dev Test 2",
      nombre: "modbusrtu",
      params: { kw: 6, modbusSleep: 0.3 },
      serial: 23002,
    },
    {
      active: true,
      address_in_bus: "6",
      brand: "Riello",
      bus_address: "1.1.1.1:3",
      device2control: true,
      id_device: 2,
      id_planta: null,
      model: "RIELLO INVERSOR CENTRAL_Modbus Protocol R00",
      name: "Dev Test 2",
      nombre: "modbusrtu",
      params: { kw: 6, modbusSleep: 0.3 },
      serial: 23002,
    },
    {
      active: true,
      address_in_bus: "6",
      brand: "Riello",
      bus_address: "1.1.1.1:3",
      device2control: true,
      id_device: 2,
      id_planta: null,
      model: "RIELLO INVERSOR CENTRAL_Modbus Protocol R00",
      name: "Dev Test 2",
      nombre: "modbusrtu",
      params: { kw: 6, modbusSleep: 0.3 },
      serial: 23002,
    },
    {
      active: true,
      address_in_bus: "6",
      brand: "Riello",
      bus_address: "1.1.1.1:3",
      device2control: true,
      id_device: 2,
      id_planta: null,
      model: "RIELLO INVERSOR CENTRAL_Modbus Protocol R00",
      name: "Dev Test 2",
      nombre: "modbusrtu",
      params: { kw: 6, modbusSleep: 0.3 },
      serial: 23002,
    },
    {
      active: true,
      address_in_bus: "6",
      brand: "Riello",
      bus_address: "1.1.1.1:3",
      device2control: true,
      id_device: 2,
      id_planta: null,
      model: "RIELLO INVERSOR CENTRAL_Modbus Protocol R00",
      name: "Dev Test 2",
      nombre: "modbusrtu",
      params: { kw: 6, modbusSleep: 0.3 },
      serial: 23002,
    },
    {
      active: true,
      address_in_bus: "6",
      brand: "Riello",
      bus_address: "1.1.1.1:3",
      device2control: true,
      id_device: 2,
      id_planta: null,
      model: "RIELLO INVERSOR CENTRAL_Modbus Protocol R00",
      name: "Dev Test 2",
      nombre: "modbusrtu",
      params: { kw: 6, modbusSleep: 0.3 },
      serial: 23002,
    },
    {
      active: true,
      address_in_bus: "6",
      brand: "Riello",
      bus_address: "1.1.1.1:3",
      device2control: true,
      id_device: 2,
      id_planta: null,
      model: "RIELLO INVERSOR CENTRAL_Modbus Protocol R00",
      name: "Dev Test 2",
      nombre: "modbusrtu",
      params: { kw: 6, modbusSleep: 0.3 },
      serial: 23002,
    },
  ];

  const renderTooltip = (tooltipText) => <Tooltip>{tooltipText}</Tooltip>;

  return (
    <div className="table-container">
      <Table responsive className="devices-table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">{lang.name}</th>
            <th scope="col">{lang.type}</th>
            <th scope="col">{lang.plant}</th>
            <th scope="col">{lang.address}</th>
            <th scope="col">{lang.protocol}</th>
            <th scope="col">{lang.brand_model}</th>
            <th scope="col">{lang.bus}</th>
            <th scope="col">{lang.active}</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
				{devices.map((device) => (
            <tr key={device.serial}>
              <td>
                <button
                  className="btn btn-link"
                >
                  <BsEyeFill style={{ color: "#56638c",fontSize: "1.2rem" }} />
                </button>
              </td>
              <td>
                <div style={{ color: device.active ? "green" : "red" }}>
                  {device.active ? "🟢" : "🔴"}
                </div>
              </td>
              <td>{device.name || "-"}</td>
              <td>{device.nombre || "Device"}</td>
              <td style={{ textAlign: "center"}}>{device.id_planta ? "Plant Name" : "-"}</td>
              <td>{device.address_in_bus || "-"}</td>
              <td>{device.nombre || "-"}</td>
              <td style={{ fontSize: ".8rem" }}>{`${device.brand}/${device.model}`}</td>
              <td>
                {device.bus_address ? (
                  <OverlayTrigger
                    placement="top"
                    overlay={renderTooltip("Bus Address")}
                  >
                    <span>{device.bus_address}</span>
                  </OverlayTrigger>
                ) : (
                  <div className="no_data_container">No Bus Connected</div>
                )}
              </td>
              <td style={{ textAlign: "center"}}>
                {device.active ? "✔️" : "❌"}
              </td>
              <td>
                <div className="d-flex gap-2">
                  <button title="Modify" className="btn btn-sm">
                    ✏️
                  </button>
                  <button title="Delete" className="btn btn-sm">
                    🗑️
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DevicesTable;
