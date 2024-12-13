export interface MonsterType {
  name: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  image: string
}

export interface MonsterStatusType {
  current_hp: number;
  monster: MonsterType
}

export interface LogType {
  number: number,
  damage: number,
  attacker: MonsterType,
  defender: MonsterType,
  }

  export interface RoundType {
  number: number,
  damage: number,
  attacker: MonsterStatusType,
  defender: MonsterStatusType,
}

export interface InputType {
  name: string;
  type?: 'text' | 'number',
  value: string | number,
  required?: boolean;
  onChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ButtonType {
  text: string;
  buttonType?: 'button' | 'submit',
  type?: 'primary' | 'secondary',
  onClickFunction: () => unknown
}

export interface GameState {
  result: 'Win' | 'Lose',
}
