import React from 'react'
import { me, categories } from './utils/personalData'

export default function Desktop() {
  return (
    <div className='desktop-container'>
       <div className='window top-left'></div> 
       <div className='window top-right'></div> 
       <div className='window bottom-left'></div> 
       <div className='window bottom-right'></div> 
    </div>
  )
}
