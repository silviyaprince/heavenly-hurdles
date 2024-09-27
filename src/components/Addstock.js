

export function Addstock() {
  return (
    <div>
    <div className=" ml-44 mt-20 space-y-5 space-x-7 ">
      <p className="ml-64 text-xl font-bold font-display text-fuchsia-950">ENTER STOCK DETAILS</p>
    <input type="text" className="border border-black w-4/5 ml-7  p-2 rounded-md" placeholder="Enter product name"/>
    <input type="text" className="border border-black w-4/5  p-2 rounded-md" placeholder="Enter product price"/>
    <input type="text" className="border border-black w-4/5  p-2 rounded-md" placeholder="Enter product quantity"/>
    <input type="text" className="border border-black w-4/5  p-2 rounded-md" placeholder="Enter product category"/>
    </div>
    <br></br><br></br>
    <div>
    <button className="border border-black align-middle text-fuchsia-950 rounded-md text-base font-display font-semibold m-auto bg-pink-200 h-2 p-5 w-15 flex items-center justify-center">SUBMIT</button>
      {/* <TextField id="outlined-basic" label="poster" variant="outlined" value={poster} onChange={(event)=>setPoster(event.target.value)} />
      <TextField id="outlined-basic" label="name" variant="outlined" value={name} onChange={(event)=>setName(event.target.value)}/>      
        <TextField id="outlined-basic" label="rating" variant="outlined" value={rating} onChange={(event)=>setRating(event.target.value)}/>
        <TextField id="outlined-basic" label="category" variant="outlined" value={category} onChange={(event)=>setCategory(event.target.value)}/>
         <TextField id="outlined-basic" label="price" variant="outlined" value={price} onChange={(event)=>setPrice(event.target.value)}/>
          <TextField id="outlined-basic" label="description" variant="outlined" value={description} onChange={(event)=>setDiscription(event.target.value)}/>
          <Button style={{width:"250px",marginLeft:"600px"}}variant="outlined" onClick={()=>{
          const newProduct={
            poster,
            name,
            rating,
            category,
            price,
            description,
          }
          
          setProductlist([...productlist,newProduct])
        }}>ADD PRODUCT</Button>
 <button ></button> */}
      </div>
      {/* <div className="product-list">
        {productlist.map((pd,index)=>(
           <Product key={index} product={pd} id={index}/>
        ))} */}
      </div>
     
   
  )
}

export default Addstock