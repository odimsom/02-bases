export interface Vehicle {
  nombre: string;
  details: Details;
}

export interface Details {
  marca: string;
  modelo: string;
  tipo: string;
  carroceria: string;
  tamanioAro: number;
  cilindraje: string;
  caballos: number;
  kilometros: number;
}
