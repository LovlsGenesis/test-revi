import { ButtonType } from '../../../types'


enum ButtonBackgroundColor {
  primary = 'bg-[#6F58C9]',
  secondary = 'bg-[#7E78D2]'
}

export default function Button({ buttonType, type, text, onClickFunction }: ButtonType) {
  return(
    <button
      onClick={() => onClickFunction()}
      className={`cursor-pointer w-[100px]`}
      type={buttonType}
    >
      <p className={`p-1 rounded text-[#BDEDE0] ${type ? ButtonBackgroundColor[type] : ButtonBackgroundColor['primary']}`}>{text}</p>
    </button>
  )
}
