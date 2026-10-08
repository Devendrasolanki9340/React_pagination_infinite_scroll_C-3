


// import { keepPreviousData,useQuery } from "@Infinite/react-query"
import {getAllProducts} from "../src/api/productApi"
// import ProductCard from "./components/ProductCard"
// import {  useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query"
import ProductCard from "./components/ProductCard";

const infinite = () => {
  let limit = 10;
//     const [page, setPage] = useState(0);
   
  let {data ,isPending, fetchNextPage, hasNextPage, isFetchingNextPage} = useInfiniteQuery({
    queryKey :["products"],
    queryFn : ({pageParam}) => getAllProducts(limit,pageParam),
    initialPageParam : 0,
    getNextPageParam : (lastPage, allPage) =>{
        console.log(allPage)
        let loadedData = allPage.length * limit
        if(loadedData < lastPage.total) return loadedData
        return undefined
    }
  })

  if(isPending) return "Loading..."
  console.log("data",data)

  let allProducts  = data?.pages?.flatMap((val) => val.products) ?? []


  return (
       <div className="flex flex-col gap-6 items-center">
      <div  
      className="grid w-full p-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allProducts.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      {
        hasNextPage  && (
            <button onClick={()=> fetchNextPage() }>{ isFetchingNextPage ? "Loading..." : "Load More"}</button>
        )}
    </div>
  )
}

export default infinite
