import style from './buttongallery.module.css'

const ButtonGalley = ({ onclick, value }) => {
  return (
    <button className={style.Button} onClick={onclick}>
      {value}
    </button>
  )
}

export default ButtonGalley
