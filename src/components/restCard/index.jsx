import React, {useState} from 'react';
import ReactStars from "react-rating-stars-component";
import {Restaurant,RestInfo, Title, Adress, RestaurantePhoto} from './styles'
import restaurante from '../../assets/padrao.jpg';
import Skeleton from '../Skeleton';

const RestaurantCard = ({restaurant, onClick}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
return (
<Restaurant 
onClick={onClick}>
  <RestInfo>
    <Title>{restaurant.name}</Title>
      <ReactStars
      count={5}
      isHalf
      value={restaurant.rating}
      edit={false}
      activeColor="#ffd700"/>
        <Adress>
          {restaurant.vicinity || restaurant.formatted_adress}
        </Adress>
  </RestInfo>
  <RestaurantePhoto 
  imageLoaded={imageLoaded}
  src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}  onLoad={()=> setImageLoaded(true)}alt=''/>
  {!imageLoaded && <Skeleton width='100px' heigth='100px' />}
</Restaurant>
)};

export default RestaurantCard;