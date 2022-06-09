import { CharactersRequest } from '../../service/marvel/types/characters';
import { MarvelDefaultReques } from '../../service/marvel/types/requests';

export type CharactersFilter = MarvelDefaultReques<CharactersRequest>;
