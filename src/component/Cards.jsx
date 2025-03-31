import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className='mt-4 my-3'>
          <div className="card bg-base-100 image-full w-92 p-3 shadow-xl">
        <figure>
          <img
            src={item.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-yellow-600 hover:text-red-600 duration-200 ">{item.id}</button>
          </div>
        </div>
      </div>
      </div>
    </>

  )
}

export default Cards
