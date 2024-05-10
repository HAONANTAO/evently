
'use client'
import {useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'
import { formUrlQuery } from '@/lib/utils'

type PaginationProps={
  page:number | string,
  totalPages:number,
  urlParamName?:string
}
const Pagniation = ({page,totalPages,urlParamName}:PaginationProps) => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const onClick =(btnType: string)=>{
    // 前进和后退
      const pageValue = btnType ==="next"?Number(page)+1 :Number(page)-1
      const newUrl = formUrlQuery({
        params:searchParams.toString(),
        key: urlParamName || "page",
        value:pageValue.toString()
      })
      // 通过设置 scroll 选项为 false，可以阻止页面在导航时滚动到顶部。
      router.push(newUrl,{scroll:false})
  }
  return (
    <div className='flex gap-2'>
      <Button
      size='lg' variant="outline" className='w-28' onClick={()=>onClick("prev") }
      disabled={Number(page)<=1}>Previous</Button>
       <Button
      size='lg' variant="outline" className='w-28' onClick={()=>onClick("next") }
      disabled={Number(page)>=totalPages}>Next</Button>
    </div>
  )
}

export default Pagniation