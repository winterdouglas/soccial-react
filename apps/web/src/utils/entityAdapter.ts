export type Entity = {
  id: number;
};

export type Entities<T extends Entity> = Record<number, T>;

export type EntitiesAndIds<T extends Entity> = {
  /**
   * The entity objects keyed by their ids
   */
  entities: Entities<T>;

  /**
   * The entity ids, sorted
   */
  ids: number[];
};

/**
 * Transforms the response array in an entity set that can be looked up by id
 * @param response The response to be transformed
 * @param sortBy The sorting function
 * @returns Entities keyed by their ids, and the sorted ids
 */
export const selectEntities = <T extends Entity>(
  response: T[],
  options?: {
    sortBy?: (a: T, b: T) => number;
    filter?: (item: T) => boolean;
  }
): EntitiesAndIds<T> => {
  const filtered = options?.filter ? response.filter(options.filter) : response;
  const sortedData = options?.sortBy ? filtered.sort(options.sortBy) : filtered;

  return {
    entities: sortedData.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {} as Entities<T>),
    ids: sortedData.map((item) => item.id),
  };
};

/**
 * Transforms the entity result back to an array
 * @param entities The transformed entity set
 * @returns An array of entities
 */
export const toArray = <T extends Entity>(entities?: EntitiesAndIds<T>) => {
  if (!entities) return [];

  return entities.ids.map((id) => entities.entities[id]);
};
