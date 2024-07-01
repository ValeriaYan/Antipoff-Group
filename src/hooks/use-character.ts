import { useAppSelector } from "./redux-hooks";

export function useCharacterId() {
    const { id } = useAppSelector(state => state.character);

    return id;
}