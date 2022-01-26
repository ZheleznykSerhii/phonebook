import style from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ articles }) => {
  return (
    <li className={style.ImageGalleryItem}>
      {articles.map((article) => (
        <img
          src={article.previewURL}
          alt=""
          className={style.ImageGalleryItem_image}
        />
      ))}
    </li>
  )
}

export default ImageGalleryItem
