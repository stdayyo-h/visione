import React from 'react'
import { Link } from 'react-router-dom'
import ErgoLogo from '../assets/images/eRGO.png'
import { MANAGER_DASHBOARD } from '../constants/routes'
function Navbar() {
  return (
    
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
<div class="container flex flex-wrap justify-between items-center mx-auto">
<Link to="/services" href='/'  class="flex items-center">
<img src={ErgoLogo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
{/* <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-black">Ergo</span> */}
</Link >
<div class="flex md:order-2">
  <Link to={MANAGER_DASHBOARD}>
  <button type="button" class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Get started</button>
  </Link>

<button data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
<span class="sr-only">Open main menu</span>
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
<svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
</div>
<div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
<ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
<li>
<Link to="/"   class="block py-2 pr-4 pl-3 text-white bg-black rounded md:bg-transparent md:text-indigo-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
</li>
<li>
<Link to="/services"   class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link >
</li>
<li>
<Link to="/pricing"   class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link >
</li>
<li>
<Link to="/contact"   class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link  >
</li>
</ul>
</div>
</div>
</nav>


//     <div>
//         <div class="navbar bg-slate-100">
//   <div class="navbar-start">
//     <div class="dropdown">
//       <label tabindex="0" class="btn btn-ghost btn-circle">
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
//       </label>
//       <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//         <li><Link to="/services" href='/'>Homepage</Link to="/services" href='/'></li>
//         <li><Link to="/services" href='/'>Projects</Link to="/services" href='/'></li>
//         <li><Link to="/services" href='/'>Settings</Link to="/services" href='/'></li>
//       </ul>
//     </div>
//   </div>
//   <div class="navbar-center">
//   <Link to="/services" >Features</Link to="/services">
//     <Link to="/services">Pricing</Link to="/services">
//   </div>
//   <div class="navbar-end">
//     <button class="btn btn-ghost btn-circle">
//       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
//     </button>
//     <button class="btn btn-ghost btn-circle">
//       <div class="indicator">
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
//         <span class="badge badge-xs badge-primary indicator-item"></span>
//       </div>
//     </button>
//   </div>
// </div>
//     </div>
  )
}

export default Navbar