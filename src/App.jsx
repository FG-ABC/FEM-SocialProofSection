import React from "react";
import Colton from "./assets/images/image-colton.jpg";
import Irene from "./assets/images/image-irene.jpg";
import Anne from "./assets/images/image-anne.jpg";

function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center md:mx-16 md:mt-4 md:w-auto md:flex-row md:flex-wrap lg:mx-20 lg:mt-0 lg:content-center xl:mx-36">
      {/* Info */}
      <div className="mt-7 p-7 text-center md:w-5/12 md:p-0 md:text-left">
        <h1 className="pb-3 text-4xl font-bold leading-none md:text-5xl">
          10,000+ of our users love our products.
        </h1>
        <p>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>

      {/* Ratings */}
      <div className="flex w-full flex-col items-end gap-y-3 px-7 text-center md:w-7/12 md:p-0 lg:mt-14">
        <div className="rating w-full rounded-xl px-5 py-3 md:flex md:w-auto md:items-center md:gap-x-3 md:px-8 md:py-4 lg:mr-20">
          <div className="flex items-center justify-center gap-2 pb-2 md:pb-0">
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
                fill="#EF9546"
                fillRule="nonzero"
              />
            </svg>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
                fill="#EF9546"
                fillRule="nonzero"
              />
            </svg>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
                fill="#EF9546"
                fillRule="nonzero"
              />
            </svg>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
                fill="#EF9546"
                fillRule="nonzero"
              />
            </svg>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
                fill="#EF9546"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <h2>Rated 5 stars in Reviews</h2>
        </div>

        <div className="rating w-full rounded-xl px-5 py-3 md:flex md:w-auto md:items-center md:gap-x-3 md:px-8 md:py-4 lg:mr-10">
          <div className="flex items-center justify-center gap-2 pb-2 md:pb-0">
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
                fill="#EF9546"
                fillRule="nonzero"
              />
            </svg>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
                fill="#EF9546"
                fillRule="nonzero"
              />
            </svg>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
                fill="#EF9546"
                fillRule="nonzero"
              />
            </svg>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
                fill="#EF9546"
                fillRule="nonzero"
              />
            </svg>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
                fill="#EF9546"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <h2>Rated 5 stars in Reviews</h2>
        </div>

        <div className="rating w-full rounded-xl px-5 py-3 md:flex md:w-auto md:items-center md:gap-x-3 md:px-8 md:py-4">
          <div className="flex items-center justify-center gap-2 pb-2 md:pb-0">
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
                fill="#EF9546"
                fillRule="nonzero"
              />
            </svg>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
                fill="#EF9546"
                fillRule="nonzero"
              />
            </svg>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
                fill="#EF9546"
                fillRule="nonzero"
              />
            </svg>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
                fill="#EF9546"
                fillRule="nonzero"
              />
            </svg>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
                fill="#EF9546"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <h2>Rated 5 stars in Reviews</h2>
        </div>
      </div>

      {/* Testimony Cards */}
      <div className="mt-5 flex flex-col gap-y-3 md:flex-row md:gap-x-6 xl:mt-16">
        <div className="Card mx-7 flex h-max flex-col rounded-xl bg-primary px-8 pb-8 pt-10 md:mx-0">
          <div className="flex h-10">
            <img src={Colton} className="mr-5 rounded-full"></img>
            <div className="h-full">
              <h4 className="font-bold leading-5 text-white">Colton Smith</h4>
              <h4 className="leading-none text-secondary">Verified Buyer</h4>
            </div>
          </div>
          <p className="mt-5 leading-5 text-white md:mt-10 md:text-sm lg:mt-4">
            "We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!"
          </p>
        </div>

        <div className="Card mx-7 flex h-max flex-col rounded-xl bg-primary px-8 pb-8 pt-10 md:mx-0 md:mt-10">
          <div className="flex h-10">
            <img src={Irene} className="mr-5 rounded-full"></img>
            <div className="h-full">
              <h4 className="font-bold leading-5 text-white">Irene Roberts</h4>
              <h4 className="leading-none text-secondary">Verified Buyer</h4>
            </div>
          </div>
          <p className="mt-5 leading-5 text-white md:mt-10 md:text-sm lg:mt-4">
            "Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery."
          </p>
        </div>

        <div className="Card mx-7 flex h-max flex-col rounded-xl bg-primary px-8 pb-8 pt-10 md:mx-0 md:mt-20">
          <div className="flex h-10">
            <img src={Anne} className="mr-5 rounded-full"></img>
            <div className="h-full">
              <h4 className="font-bold leading-5 text-white">Anne Wallace</h4>
              <h4 className="leading-none text-secondary">Verified Buyer</h4>
            </div>
          </div>
          <p className="lg: mt-5 leading-5 text-white md:mt-10 md:text-sm lg:mt-4">
            "Put an order with this company and can only praise them for the
            very high standard. Will definitely use them again and recommend
            them to everyone!"
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
