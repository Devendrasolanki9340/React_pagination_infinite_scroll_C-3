
import { keepPreviousData,useQuery } from "@tanstack/react-query"
import {getAllProducts} from "../src/api/productApi"
import ProductCard from "./components/ProductCard"
import {  useState } from "react";


const TanSack = () => {
  let limit = 10;
    const [page, setPage] = useState(0);
   
  let {data , isPending , isError , isPlaceholderData} = useQuery({
    queryKey :["products",page],
    queryFn : () => getAllProducts(limit,page),
    placeholderData : keepPreviousData,
  })

  if(isPending) return "Loading..."
  if(isError) return "Something went wrong"


  
  let totalPages =  Math.ceil(data?.total / limit) 
  console.log("totalPages", totalPages)
  console.log("data",data)


  return (
       <div className="flex flex-col gap-6 items-center">
      <div  style={{opacity : isPlaceholderData ? 0.3 : 1}}
      className="grid w-full p-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.products.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      <div className="flex gap-5 items-center">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="p-3 bg-red-700 text-white rounded"
        >
          Prev
        </button>
        <p>page{page+1} of {totalPages}</p>
        <button
          onClick={() => setPage(page + 1)}
          className="p-3 bg-red-700 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TanSack
