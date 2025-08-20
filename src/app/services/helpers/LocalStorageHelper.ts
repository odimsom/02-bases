import Character from '../../Interfaces/Charater';

export class LocalStorageHelper {
  public static LoadFromLocalStorage = (): Character[] => {
    const CurrentsCharactersFromLocalStorage =
      localStorage.getItem('characters');
    return CurrentsCharactersFromLocalStorage
      ? JSON.parse(CurrentsCharactersFromLocalStorage)
      : [];
  };
}
