import {
  EngineType,
  EngineViewType,
  GenerationType,
  GenerationViewType,
  ManufacturerType,
  ModelType,
  VehicleType,
} from "./types";
import { Request } from "./request";

export default class CFSApi {
  static async getVehicleTypes(): Promise<VehicleType[]> {
    return Request<VehicleType[]>((base) => `${base}/types`);
  }

  static async getManufacturers(type_id: string): Promise<ManufacturerType[]> {
    return Request<ManufacturerType[]>(
      (base) => `${base}/manufacturers/${type_id}`
    );
  }

  static async getModels(manufacturer_id: string): Promise<ModelType[]> {
    return Request<ModelType[]>((base) => `${base}/models/${manufacturer_id}`);
  }

  static async getGenerations(model_id: string): Promise<GenerationType[]> {
    return Request<GenerationType[]>(
      (base) => `${base}/generations/${model_id}`
    );
  }

  static async getEngines(generation_id: string): Promise<EngineType[]> {
    return Request<EngineType[]>((base) => `${base}/engines/${generation_id}`);
  }

  static async getEngineView(engine_id: string): Promise<EngineViewType> {
    return Request<EngineViewType>(
      (base) => `${base}/engines_view/${engine_id}`
    );
  }

  static async getGenerationView(
    generation_id: string
  ): Promise<GenerationViewType> {
    return Request<GenerationViewType>(
      (base) => `${base}/generations_view/${generation_id}`
    );
  }
}
