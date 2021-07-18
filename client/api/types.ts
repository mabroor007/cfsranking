export interface VehicleType {
  id: string;
  name: string;
  slug: string;
  icon_url: string;
  guid: string;
  icon_filename: string;
}

export interface ManufacturerType {
  id: string;
  name: string;
  slug: string;
  brand_logo: string;
  vehicle_type_id: string;
  guid: string;
  icon_filename: string;
  vehicle_type: string;
}

export interface ModelType {
  id: string;
  name: string;
  manufacturer_id: string;
  model_photo: string;
  model_photo_unbranded: string;
  slug: string;
  guid: string;
  modelphoto_filename: string;
  modelphoto_unbranded_filename: string;
}

export interface GenerationType {
  id: string;
  name: string;
  slug: string;
  model_id: string;
  year: string;
  yearend: string;
  photo: string;
  photo_unbranded: string;
  manufacturer_id: string;
  guid: string;
  photo_filename: string;
  photo_unbranded_filename: string;
}

export interface GenerationViewType {
  id: string;
  name: string;
  slug: string;
  model_id: string;
  year: string;
  yearend: string;
  photo: string;
  photo_unbranded: string;
  manufacturer_id: string;
  guid: string;
  photo_filename: string;
  photo_unbranded_filename: string;
  manufacturer: string;
}

export interface EngineType {
  name: string;
  slug: string;
  type: string;
  capacity: string;
  power: string;
  torque: string;
  cylinders: string;
  year: string;
  ecu: string;
  tcu: string;
  hp_values: string;
  nm_values: string;
  rpm_values: string;
  engine_code: string;
  fuel_name: string;
  generation_id: string;
  guid: string;
  id: string;
  orgid: string;
}

export interface RemapStage {
  engine_id: string;
  stage_no: string;
  power: string;
  torque: string;
  hp_values: string;
  nm_values: string;
  modifications: string;
  id: string;
  guid: string;
}

export interface EngineViewType {
  name: string;
  slug: string;
  type: string;
  capacity: string;
  power: string;
  torque: string;
  cylinders: string;
  year: string;
  ecu: string;
  tcu: string;
  hp_values: string;
  nm_values: string;
  rpm_values: string;
  engine_code: string;
  fuel_name: string;
  generation_id: string;
  guid: string;
  id: string;
  orgid: string;
  remap_stages: RemapStage[];
}
