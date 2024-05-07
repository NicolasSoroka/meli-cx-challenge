type Shipment = {
  shipment_id: number;
  status: string;
};

export type ShipmentMap = {
  [key: number]: Shipment;
};