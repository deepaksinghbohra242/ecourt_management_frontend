import React from 'react'
import { TbChartPieFilled } from "react-icons/tb";
import { IoBriefcaseSharp } from "react-icons/io5";



const Sidebar = () => {
  return (
      <aside className='w-64 ' aria-label='Sidebar'>
              
          <div className='py-4 px-3 bg-gray-100 h-screen rounded dark:bg-gray-800'>

              <ul className='space-y-2'>
                  <li>
                      <a
                          href='#'
                          className='flex flex-items p-2 text-base font-normal rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                      >
                          <TbChartPieFilled /> 
                          <span className='ml-3'>Dashboard</span>
                      </a>
                  </li>

                  <li>
                      <a
                          href='#'
                          className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                      >
                          <IoBriefcaseSharp />
                          <span className='flex-1 ml-3 whitespace-nowrap'>Cases</span>
                      </a>
                  </li>
                  <li>
                      <a
                          href='#'
                          className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                      >
                          <IoBriefcaseSharp />
                          <span className='flex-1 ml-3 whitespace-nowrap'>Case Hearings</span>
                      </a>
                  </li>
                  <li>
                      <a
                          href='#'
                          className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                      >
                          <IoBriefcaseSharp />
                          <span className='flex-1 ml-3 whitespace-nowrap'>Cases Orders</span>
                      </a>
                  </li>
                  <li>
                      <a
                          href='#'
                          className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                      >
                          <IoBriefcaseSharp />
                          <span className='flex-1 ml-3 whitespace-nowrap'>Advocate</span>
                      </a>
                  </li>

              </ul>
          </div>
      </aside>
  )
}

export default Sidebar
