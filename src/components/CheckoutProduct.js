import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
  rating,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating,
    };

    dispatch(addToBasket(product));
  };
  const removeItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating,
    };
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <b>{title}</b>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price * 88} currency="INR" />
        {hasPrime ? (
          <div className="flex items-center space-x-2 ">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw "
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-end">
        <button onClick={addItemToBasket} className="button mt-auto">
          Add To Basket
        </button>
        <button onClick={removeItemToBasket} className="button mt-auto">
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
