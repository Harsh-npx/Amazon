import { useSession } from "next-auth/client";
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";

function checkout() {
  const [session] = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  return (
    <div className="">
      <h1 className="bg-gray-100">
        <Header />
        <main className="relative top-24 lg:flex max-w-screen-2xl mx-auto">
          <div className="flex-grow m-5 shadow-sm">
            <Image
              src="https://links.papareact.com/ikj"
              width={1020}
              height={250}
              objectFit="contain"
            />
            <div className="flex flex-col p-5 space-y-10 bg-white">
              <h1 className="text-3xl border-b pb-4">
                {items.length === 0
                  ? "Your Shopping Basket is Empty"
                  : "Shopping Basket"}
              </h1>
              {items.map((item, i) => (
                <CheckoutProduct
                  key={i}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col bg-white p-10 shadow-md ">
            {items.length > 0 && (
              <div>
                <h2 className="whitespace-nowrap">
                  Subtotal ({items.length} items:{" "}
                  <span className="font-bold">
                    <Currency quantity={total * 88} currency="INR" />
                  </span>
                </h2>
                <button
                  disabled={!session}
                  className={`button mt-2 ${
                    !session &&
                    "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed active:from-gray-300 to-gray-500"
                  }`}
                >
                  {!sessionStorage
                    ? "Sign in to Checkout"
                    : "procced to checkout"}
                </button>
              </div>
            )}
          </div>
        </main>
      </h1>
    </div>
  );
}

export default checkout;
