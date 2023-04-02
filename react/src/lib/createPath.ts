import { PATH_CATALOG } from "../constants/routes";

export const  createCatalogPath = (category_id: string) => PATH_CATALOG.replace(':category_id', category_id);