export interface DogFact {
  id: string;
  type: string; // always "fact"
  attributes: {
    body: string; // fact itself
  }
}
