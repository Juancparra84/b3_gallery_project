import { Link } from "react-router-dom"
import { Animal1 } from "./Animal1"
import { Animal2 } from "./Animal2"
import { Animal3 } from "./Animal3"
import { Food1 } from "./Food1"
import { Food2 } from "./Food2"
import { Food3 } from "./Food3"
import { Landscape } from "./Landscape"


export const Navigation = () => {
  return (
    <div className="container thumbnail-container mt-2">
        <Link to='/animal1' className="links"> 
        <figure className="thumbnail-image-size">
            <Animal1 />
            <figcaption>Animal 1</figcaption>
        </figure>
        </Link>
        <Link to='/animal2' className="links"> 
        <figure className="thumbnail-image-size">
            <Animal2 />
            <figcaption>Animal 2</figcaption>
        </figure>
        </Link>
        <Link to='/animal3' className="links"> 
        <figure className="thumbnail-image-size">
            <Animal3 />
            <figcaption>Animal 3</figcaption>
        </figure>
        </Link>
        <Link to='/food1' className="links"> 
        <figure className="thumbnail-image-size">
            <Food1 />
            <figcaption>Food 1</figcaption>
        </figure>
        </Link>
        <Link to='/food2' className="links"> 
        <figure className="thumbnail-image-size">
            <Food2 />
            <figcaption>Food 2</figcaption>
        </figure>
        </Link>
        <Link to='/food3' className="links"> 
        <figure className="thumbnail-image-size">
            <Food3 />
            <figcaption>Food 3</figcaption>
        </figure>
        </Link>
        <Link to='/landscape' className="links"> 
        <figure className="thumbnail-image-size">
            <Landscape />
            <figcaption>Landscape</figcaption>
        </figure>
        </Link>
    </div>
  )
}
