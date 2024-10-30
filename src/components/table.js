import {useState} from "react";
const productlist=[]


export function Table(){
const [tableData,setTableData]=useState(productlist)
const[selectedRows,setSelectedRows]=useState([])
    const columns=[
        {title:"description",field:"description"},
        {title:"price",field:"price"},
        {title:"mrp",field:"mrp"},
        {title:"quantity",field:"quantity"},
        {title:"value",field:"value"},
      
    ]

    const handleBulkDelete=()=>{
        
    }
    return(
        <MaterialTable
        title="productdata"
        data={tableData}
        onSelectionChange={(rows)=>setSelectedRows(rows)}
        columns={columns}
        options={{
            selection:true
        }}
        actions={[
            {
                icon:"delete",
                tooltip:"delete all selected rows",
                onClick:()=>handleBulkDelete()
            }
        ]}
        
        />
    )
}
