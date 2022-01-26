import ButtonGallery from '../buttongallery'
import ImageGalleryItem from '../ImageGalleryItem'
import style from './imagegallery.module.css'

const ImageGallery = ({ articles, value, onclick }) => {
  return (
    <ul className={style.ImageGallery}>
      {articles.map((article) => (
        <li className={style.ImageGalleryItem} key={article.id}>
          <img
            src={article.previewURL}
            alt=""
            className={style.ImageGalleryItem_image}
          />
        </li>
      ))}
      <br />
      {articles.length > 0 && <ButtonGallery value={value} onclick={onclick} />}
    </ul>
  )
}

export default ImageGallery
