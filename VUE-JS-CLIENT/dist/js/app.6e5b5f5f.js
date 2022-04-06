(function(){"use strict";var t={6044:function(t,e,a){var s=a(8935),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view")],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fixed top-0 left-0 text-white bg-red-500 w-4/5 md:max-w-xs py-4 h-screen ease-in duration-300 ",class:{"w-20 ":t.mainCollapsed},attrs:{id:"sidemenu"}},[a("div",{attrs:{id:"header"}},[a("div",{staticClass:"px-4 pb-4 ease-in duration-300 ",class:{hidden:t.mainCollapsed},attrs:{id:"title"}},[a("span",{staticClass:"text-2xl"},[t._v("HOME FOOD")])]),a("div",{staticClass:"cursor-pointer px-4 ease-in duration-300 ",class:{"mt-0":t.mainCollapsed},attrs:{id:"main-button"},on:{click:t.showMain}},[a("svg",{attrs:{width:"50",height:"30",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M0 0h47.727v2.727H0zM0 13.636h47.727v2.727H0zM0 27.273h47.727V30H0z"}})])])]),null!=t.user?a("hr",{staticClass:"bg-red-600 w-full mt-4"}):t._e(),null!=t.user?a("div",{attrs:{id:"profile"}},[a("div",{staticClass:"px-4  ease-in duration-300 ",class:{"h-14":t.mainCollapsed,"h-36":!t.mainCollapsed},attrs:{id:"photo"}},[a("svg",{staticClass:"w-full h-full",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.0",width:"800",height:"800",viewBox:"0 0 600 600"}},[a("path",{attrs:{d:"M283.5 51c-16 2.2-29.7 7.1-42.1 15.1-4.1 2.7-9.8 6.1-12.6 7.5-6.9 3.5-16.6 13.3-21.1 21.4-7.8 14.1-12.2 32.9-13.6 58.8-.8 14.7-.9 14.8-3.9 17.8-4.4 4.4-5.5 9.8-4.9 23.9.4 9.2 1.1 13.9 3.1 20 2.9 9.2 8.3 17.8 12.5 19.9 1.9 1 3.4 3.1 4.6 6.3 4.6 12.3 14.8 30.6 23.4 42.1l5.9 7.7.4 18.5c.3 18.3.3 18.6 3.4 25.1 4.5 9.4 12.5 16.9 23.9 22.4 13.5 6.5 20.4 7.9 37.5 7.9 17.5 0 24.6-1.5 37.7-8 11.6-5.7 19.2-12.9 23.7-22.3 3.1-6.5 3.1-6.8 3.5-24.5l.3-18 5.7-7.5c9.8-13 18.9-29 24.2-42.3 1.1-2.8 3.8-6.9 6.3-9.2 8.4-8.2 13.6-23.9 13.6-41 0-11.7-1.1-16.3-4.7-20.6-2.4-2.9-2.7-4.5-3.9-17.8-4.2-46.2-13.2-67.3-34-79.8-3.8-2.3-10.8-6.6-15.5-9.6C338.2 53 309.5 47.6 283.5 51z"}}),a("path",{attrs:{d:"M219 337.1c-18.5 12.8-40.2 21.3-70 27.4-32.7 6.6-39.9 9.5-49.5 19.6-12.9 13.5-18.6 35.3-20.5 78.1-1.2 27.3-.1 32.3 8.8 41.5 21.5 22.1 78.5 38 159.7 44.5 20.8 1.6 84.2 1.6 105 0 91.3-7.3 152.5-26.8 165.8-52.8 3.2-6.2 3.6-11.4 2.7-32.9-1.8-42.5-7.4-64.2-20.3-78.1-9.5-10.3-16.7-13.2-49.2-19.8-32.9-6.8-52.5-14.6-73.2-29.2-3.4-2.4-6.4-4.4-6.7-4.4-.3 0-.6.9-.6 2 0 3-14.7 31.2-28.7 55-16.2 27.7-41.3 68-42.3 68-1.4 0-38-59.8-53.2-86.8-9.2-16.4-17.8-34-17.8-36.3 0-1.1-.3-1.9-.7-1.8-.5 0-4.6 2.7-9.3 6z"}})])]),a("div",{staticClass:"px-4 uppercase ease-in duration-300 ",class:{hidden:t.mainCollapsed},attrs:{id:"name"}},[t._v(" "+t._s(t.user.username)+" ")]),a("div",{staticClass:"w-full h-14 border-t border-white item",class:{hidden:t.mainCollapsed}},[a("div",{staticClass:"flex hover:bg-red-600  h-full px-4 item-link ease-in duration-300 ",class:{"justify-center":t.mainCollapsed},on:{click:function(e){return t.cerrarSesion()}}},[a("div",{staticClass:"flex items-center w-10 mr-2 icon ease-in duration-300 ",class:{"mr-0":t.mainCollapsed}},[a("svg",{staticClass:"w-full h-full",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#000","fill-rule":"evenodd",d:"M2 12.5H14V11.5H2V12.5Z","clip-rule":"evenodd"}}),a("path",{attrs:{fill:"#000","fill-rule":"evenodd",d:"M5.14641 8.14645L1.64641 11.6465C1.45115 11.8417 1.45115 12.1583 1.64641 12.3536L5.14641 15.8536 5.85352 15.1465 2.70707 12 5.85352 8.85356 5.14641 8.14645zM14.5954 5C11.9176 5 9.59182 6.54597 8.44623 8.81305L7.55371 8.36204C8.86051 5.77594 11.521 4 14.5954 4 18.967 4 22.5 7.58778 22.5 12 22.5 16.4122 18.967 20 14.5954 20 11.521 20 8.86051 18.2241 7.55371 15.638L8.44623 15.187C9.59182 17.454 11.9176 19 14.5954 19 18.4027 19 21.5 15.8721 21.5 12 21.5 8.12795 18.4027 5 14.5954 5z","clip-rule":"evenodd"}})])]),a("div",{staticClass:"flex items-center text-xl md:text-base ease-in duration-300  title",class:{hidden:t.mainCollapsed}},[t._v(" Cerrar sesion ")])])])]):t._e(),a("hr",{staticClass:"bg-red-600  w-full",class:{"mt-4":null==t.user}}),a("div",{attrs:{id:"menu-items"}},[null==t.user?a("div",{staticClass:"w-full h-14 item"},[a("router-link",{staticClass:"flex hover:bg-red-600  h-full px-4 item-link ease-in duration-300 ",class:{"justify-center":t.mainCollapsed},attrs:{to:{name:"login"}}},[a("div",{staticClass:"flex items-center w-10 mr-2 icon ease-in duration-300 ",class:{"mr-0":t.mainCollapsed}},[a("svg",{staticClass:"w-full h-auto",attrs:{version:"1.0",width:"682.667",height:"682.667",viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M170.5 33.6c-48.9 10.8-83.1 51-85.2 100-1.4 31.7 9.5 59.6 31.8 81.5 41.5 40.9 108.3 40.9 149.8 0 22.3-21.9 33.3-50 31.8-81.5-1.8-40-24.7-74.4-60.8-91.5-16-7.6-23.3-9.2-43.4-9.7-12.8-.3-18.7 0-24 1.2zm38.5 33c3.6.8 10.7 3.5 15.9 6 8 3.9 10.8 6 18.5 13.8 10.3 10.3 14.5 16.8 18.9 29.3 2.9 8.2 3.1 9.8 3.2 22.3 0 14.8-1.7 22.5-7.5 34-9.2 18.3-27.6 33.1-48 38.6-8.8 2.4-27.1 2.4-36 0-20.4-5.4-38.7-20.2-48-38.6-5.8-11.5-7.5-19.2-7.5-34 .1-12.5.3-14.1 3.2-22.3 4.4-12.5 8.6-19 18.9-29.3 7.7-7.8 10.5-9.9 18.5-13.8 5.2-2.5 12.1-5.2 15.4-6 8.1-1.9 26.3-2 34.5 0zM403 134.8c-6.8 3.4-10.3 11.9-8 19.5 1 3.5 6 9.1 30.8 33.9l29.7 29.8H311.4l-4.4 2.2c-5 2.6-9 8.9-9 14.3 0 4.1 3.8 11.4 7.3 13.9 2.8 2.1 3.9 2.1 77 2.4l74.1.2-30.6 30.8c-26.5 26.6-30.7 31.2-31.3 34.4-1 5.3.1 10.2 3.2 13.8 3.6 4.3 7.4 6 13.6 6 4.4 0 6.1-.5 9.3-2.9 2.1-1.6 23.3-22.4 47.1-46.2 29-29.2 43.4-44.3 43.8-46.2.4-1.5.5-5.3.3-8.3l-.5-5.6-45.4-45.5c-25-25-46.6-46.1-48.1-46.9-3.7-1.9-10.6-1.8-14.8.4zM80.7 289.6c-40.4 8.7-71.5 40.2-79.3 80.2C.3 375.5 0 387.6 0 423.3c0 44.3.1 46.3 2 49.5 1.1 1.8 3.4 4.1 5.2 5.2 3.3 2 5.5 2 184.8 2s181.5 0 184.8-2c1.8-1.1 4.1-3.4 5.2-5.2 2-3.2 2-4.6 1.7-52.8l-.3-49.5-2.7-9c-11.5-37.6-40.4-64.2-78.1-71.9-10.9-2.3-211.3-2.2-221.9 0zm208 31.4c27.2 2.9 48.7 19.5 58.7 45.4l3.1 8.1.3 36.7.3 36.8H32v-27.8c0-15.2.5-31.8 1-36.9 2.6-24.8 17.2-45.7 39.3-56.1 7.8-3.7 13.2-5.2 22.2-6.2 10.6-1.1 183.5-1.1 194.2 0z"}})])]),a("div",{staticClass:"flex items-center text-xl md:text-base ease-in duration-300  title",class:{hidden:t.mainCollapsed}},[t._v(" Iniciar sesion ")])])],1):t._e(),null==t.user?a("hr",{staticClass:"bg-black w-full"}):t._e(),null==t.user?a("div",{staticClass:"w-full h-14  item"},[a("router-link",{staticClass:"flex hover:bg-red-600  h-full px-4 item-link ease-in duration-300 ",class:{"justify-center":t.mainCollapsed},attrs:{to:{name:"register"}}},[a("div",{staticClass:"flex items-center w-10 mr-2 icon ease-in duration-300 ",class:{"mr-0":t.mainCollapsed}},[a("svg",{staticClass:"w-full h-full",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"2133.333",height:"2133.333",viewBox:"0 0 1600 1600"}},[a("path",{attrs:{d:"M977.7 267c-52.9 5.1-97.9 22.5-139.6 53.8-15 11.2-39.3 35.4-50.3 50.2-29 38.6-46.1 80.2-53 129-1.7 12.5-1.7 54.3.1 67 8.3 60.4 34.3 113.3 76.1 155 34.4 34.4 77.2 58.7 123.5 70.3 24.5 6.1 34.6 7.2 65.5 7.2 21.8 0 30-.4 39.5-1.9 111-17.1 199.1-100.3 221.8-209.1 4.3-20.4 5.2-29.7 5.2-55 0-33.5-3.3-54.6-13.1-84.5-13-39.6-34.6-74.3-64.9-104.5-41.8-41.7-91.7-66.8-150-75.5-15.9-2.3-46.8-3.4-60.8-2zM266 566v100H66v134h200v200h134V800h200V666H400V466H266v100zM963 933.6c-2.5.2-12.4.8-22 1.4-108.9 6.7-213.1 37.1-295.8 86.4-58.1 34.7-105.6 76-145.2 126.6-9 11.4-24.2 34-29.9 44.3l-4.1 7.4V1334h1068v-134.3l-4.1-7.4c-5.7-10.3-20.9-32.9-29.9-44.3-75.1-95.8-183.3-162.6-315-194.3-37.2-9-78.7-15.3-124-18.8-13.3-1-89.2-2-98-1.3z"}})])]),a("div",{staticClass:"flex items-center text-xl md:text-base ease-in duration-300  title",class:{hidden:t.mainCollapsed}},[t._v(" Registrarse ")])])],1):t._e(),null==t.user?a("hr",{staticClass:"bg-black w-full"}):t._e(),null!=t.user&&"Comercio"!=t.user.rol?a("div",{staticClass:"w-full h-14  item"},[a("router-link",{staticClass:"flex hover:bg-red-600  h-full px-4 item-link ease-in duration-300 ",class:{"justify-center":t.mainCollapsed},attrs:{to:{name:"bag"}}},[a("div",{staticClass:"flex items-center w-10 mr-2 icon ease-in duration-300 ",class:{"mr-0":t.mainCollapsed}},[a("svg",{staticClass:"w-full h-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.0",viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M238.2 18.5c-17.1 5.5-30.4 18.9-35.8 36.1-2.3 7-2.4 9-2.4 32.4v25h-54c-61.6 0-56.9-.7-58.9 9.2-9.4 45.7-71.1 364.2-71.1 367 0 2.5.7 4.5 2 5.8 2 2 3.3 2 238 2s236 0 238-2c1.3-1.3 2-3.3 2-5.8 0-2.8-61.7-321.3-71.1-367-2-9.7 0-9.2-38.9-9.2h-34V87.1c0-23.8-.1-25.4-2.5-32.8-5.5-17.3-19.2-30.8-36.9-36.2-8.4-2.6-23.6-2.9-31.4-.6-4.7 1.4-5.7 1.4-10.4 0-8.1-2.4-23.6-1.9-32.6 1zm13.9 18c-3.8 4.4-8.3 13.2-10.5 20.4-1.3 4.4-1.6 10.4-1.6 30.3V112h-24V93.2c0-28.4 2-37.2 10.3-46.7 6.6-7.6 17.6-13.4 25.6-13.5h3.3l-3.1 3.5zm60.5-.1c6.9 3.2 15.8 12 18.9 18.9 3.4 7.4 4.5 16.3 4.5 37.9V112h-24V87.2c0-19.9-.3-25.9-1.6-30.3-2.2-7.3-6.7-16-10.6-20.5l-3.3-3.7 5.3.6c3 .3 7.8 1.7 10.8 3.1zm-30.2 6.7c6.8 6.2 11.2 14.7 12.6 24.4.5 3.8 1 15.4 1 25.7V112h-40V93.2c0-22.7 1.1-30.8 5-38.9 2.8-5.6 12.6-16.3 15-16.3.5 0 3.3 2.3 6.4 5.1zM112 196v68h16V128h4.5c4.3 0 4.4.1 5.1 3.7.4 2.1 15.2 77.8 32.9 168.3 17.7 90.5 32.1 164.6 32 164.8-.2.2-17-13.5-37.4-30.5l-37-30.8-.1-41.8V320h-16v41.7l-.1 41.8-37 30.8c-20.4 17-37.2 30.7-37.4 30.5-.1-.2 14.3-74.3 32-164.8 17.7-90.5 32.5-166.2 32.9-168.3.7-3.6.8-3.7 5.1-3.7h4.5v68zm128-44v24h-16v16h48v-16h-16v-48h80v48h-16v16h48v-16h-16v-48h56.9l.7 3.7c.4 2.1 15.9 81.2 34.4 175.8l33.6 172-127 .3c-69.8.1-127.1.1-127.2-.1-.2-.2-15.5-77.5-33.9-171.8-18.4-94.3-33.9-173.3-34.4-175.7l-.9-4.2H240v24zm-82.9 298.2 35.1 29.3-36.1.3c-19.9.1-52.3.1-72.2 0l-36.1-.3 35.7-29.8c19.7-16.4 36.4-29.6 37.1-29.3.7.3 17.1 13.7 36.5 29.8z"}}),a("path",{attrs:{d:"M112 288v8h16v-16h-16v8zM315.3 233.4c-10.1 3.3-19 11.3-24.1 21.6-2.5 5-2.7 6.5-2.7 17 0 10.7.2 11.9 2.9 17.5 3.8 7.7 11.4 15.3 19.1 19.1 5.6 2.7 6.8 2.9 17.5 2.9s11.9-.2 17.5-2.9c7.7-3.8 15.3-11.4 19.1-19.1 2.7-5.6 2.9-6.8 2.9-17.5s-.2-11.9-2.9-17.5c-3.8-7.7-11.4-15.3-19.1-19-5.2-2.6-7.2-3-16-3.2-6.4-.2-11.5.2-14.2 1.1zm21.5 17.2c8.5 3.5 14.2 12 14.2 21.4 0 20.3-24.2 30.6-38.9 16.7-14.9-14.2-4.9-39.6 15.7-39.7 2.9 0 6.9.7 9 1.6zM264 344v8h40v-16h-40v8zM320 344v8h80v-16h-80v8zM248 376v8h96v-16h-96v8zM360 376v8h64v-16h-64v8z"}})])]),a("div",{staticClass:"flex items-center text-xl md:text-base ease-in duration-300  title",class:{hidden:t.mainCollapsed}},[t._v(" Carrito ")])])],1):t._e(),null!=t.user?a("hr",{staticClass:"bg-black w-full"}):t._e(),null!=t.user?a("div",{staticClass:"w-full h-14  item"},[a("router-link",{staticClass:"flex hover:bg-red-600  h-full px-4 item-link ease-in duration-300 ",class:{"justify-center":t.mainCollapsed},attrs:{to:{name:"products"}}},[a("div",{staticClass:"flex items-center w-10 mr-2 icon ease-in duration-300 ",class:{"mr-0":t.mainCollapsed}},[a("svg",{staticClass:"w-full h-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.0",viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M314.1 1.6c-6 2.1-8.7 3.9-14.4 9.3-5.4 5.1-7.2 8-10.2 15.9-1.9 5-2.3 5.5-7.3 7.1-2.9 1-7.2 3.2-9.6 4.9l-4.4 3.1-3.7-5.7c-8.4-12.6-22.8-22.9-37.1-26.6-8-2.1-23.8-2.1-31.8 0-16.4 4.2-31.7 16.2-39.3 31-5.4 10.4-7.3 18-7.3 29.8 0 8.6 1.8 17.8 17.5 91.4l17.5 81.9v55.7c0 30.6-.1 55.6-.2 55.6-.2 0-2.8-.7-5.8-1.5-7.2-1.9-22.3-1.9-28.6 0-2.7.8-5 1.5-5.1 1.5-.2 0-.3-15.2-.3-33.8 0-26.5-.3-35.9-1.6-43.3-3.1-17.9-8.6-32.5-19.8-51.9-14.9-25.8-18.5-42.7-18.6-87.3 0-18 .1-18.7 2-18.7 1.1 0 2.9-.9 4-2 1.8-1.8 2-3.3 2-18.8 0-18.7-.7-21.2-7.2-25.2-3.1-1.9-5.1-2-32.8-2-27.7 0-29.7.1-32.8 2-6.5 4-7.2 6.5-7.2 25.2 0 15.5.2 17 2 18.8 1.1 1.1 2.9 2 4 2 1.9 0 2 .7 2 18.2 0 45-3.9 62.8-19.8 90.2-10 17.1-15.6 32-18.6 49.5-1.4 8.3-1.6 22.4-1.6 113 0 98.8.1 103.8 1.9 107.6 1 2.2 3.4 5.4 5.2 7.2 6.8 6.5 5.3 6.3 65.1 6.3 50.7 0 54.6-.2 58.3-1.9 2.2-1 5.3-3.2 6.8-4.8l2.8-3 7.3 3.6c4 2.1 9.7 4.2 12.7 4.9 4.1.9 48.2 1.2 176.6 1.2 170.3 0 171.3 0 173.3-2s2-3 2-181.8V148.5l-16-24-16-24V84.2c0-14.9-.2-16.4-2-18.2-1.9-1.9-3.3-2-40-2-29.6 0-38.1-.3-38.4-1.3-4.6-14.8-14.6-25.6-27.1-29.2-4.8-1.4-5.2-1.8-6.3-6.1-2.9-10.6-12.8-21.2-23.7-25.3-6.9-2.6-21.6-2.8-28.4-.5zm23.7 17.3c7.7 3.9 12.3 10.7 13.7 20.4.8 6.1 3.1 8.4 9.2 9.3 9.1 1.3 16.4 5.9 19.9 12.6l1.5 2.8H373c-13.2 0-13-.2-13 20.2v16.3l-15.1 22.6-15 22.7-4.2-1c-3.6-.8-25.5-.6-31.2.4-1.8.3-2.6-2.9-10.7-40.2-4.8-22.3-8.7-41.2-8.8-42.1 0-2.6 7.6-10.5 11.7-12.2 2.1-.8 6-1.8 8.6-2.1 6.1-.9 8.4-3.2 9.2-9.3 1.4-9.5 5.9-16.3 13.5-20.4 4.8-2.5 14.8-2.5 19.8 0zM231.6 29.5c4.4 2.1 9.3 5.7 12.6 8.9 9.4 9.5 10.4 12.5 22 66.1l10.3 48-5.7 3.8c-12.2 8.1-23.7 23.9-28.3 38.7-.9 3-2 10.8-2.4 17.2l-.6 11.7-8.1-7.4c-4.5-4.1-9.4-7.9-10.9-8.5-3.7-1.4-7.4.6-16.5 8.8-4.6 4.2-7.1 5.9-7.4 5-.3-.7-7.3-33.6-15.6-73.2-10.8-50.7-15.2-73.7-15.2-78.2.2-33.7 35.7-55.7 65.8-40.9zM464 88v8h-88V80h88v8zM96 96v8H48V88h48v8zm380.8 30.7c5.4 8.2 10.2 15.4 10.6 16 .6 1-7.9 1.3-40.8 1.3H405l-9.8-14.8c-5.4-8.1-10.2-15.3-10.6-16-.6-.9 7.9-1.2 40.8-1.2H467l9.8 14.7zM88 148.3c0 21.5.4 30.6 1.6 37.8 3.1 17.9 8.6 32.5 19.8 51.9 10.5 18.1 16.1 34.9 17.2 51.5.2 4.4.7 9.5.9 11.2l.4 3.3H16.1l.4-3.3c.2-1.7.7-6.8.9-11.2 1.1-16.7 6.7-33.3 17.6-52.3 17.4-30.3 21-45.4 21-88.8V120h32v28.3zm292.3-10.5 11.7 17.8-.2 32.4-.3 32.4-3.6-3.2c-3.4-2.9-3.7-3.7-4.1-9.9-.7-8.9-4.9-21.1-10.3-29.8-4.7-7.6-15.4-18.5-22.3-22.9-2.4-1.5-4.2-3.1-4-3.5.6-1.7 20.3-31.1 20.8-31.1.3 0 5.8 8 12.3 17.8zm-55.8 21.7c19.7 5 35.2 20 40.9 39.4.9 3 1.6 6.9 1.6 8.6 0 3.1-.7 4-14.7 16.9l-4.2 3.9-10.4-9.6c-5.7-5.3-11.5-10.1-13-10.6-4.2-1.6-7 0-18.4 10.5l-10.3 9.6-10.3-9.6c-5.7-5.2-11.6-10-13.1-10.5-3.4-1.4-7.9.4-12 4.8-1.7 1.7-3.2 3.1-3.6 3.1-1.1 0 .8-15.4 2.4-19.8 6.6-18.2 21.3-31.8 39.6-36.6 7.3-1.9 18.2-2 25.5-.1zM496 190c0 16.5-.2 30-.5 30s-3.5-2.7-7-6c-5.7-5.3-6.9-6-10.5-6-3.7 0-4.9.8-15 10.1l-11 10.1-11-10.1c-10.1-9.3-11.3-10.1-15-10.1-3.6 0-4.8.7-10.5 6-3.5 3.3-6.7 6-7 6-.3 0-.5-13.5-.5-30v-30h88v30zm-267.6 47.5c11.3 10.4 14.1 12 18.3 10.4 1.5-.5 7.3-5.3 13-10.5l10.3-9.6 10.3 9.6c11.4 10.5 14.2 12.1 18.4 10.5 1.5-.5 7.3-5.3 13-10.5l10.3-9.6 10.3 9.6c5.7 5.2 11.5 10 13 10.5 4.2 1.6 7 0 18.4-10.5l10.3-9.6 9 8.2 9 8.3V496H252.1l6.9-8.7c8.1-10 15-23.3 18.2-34.8 3-11.1 3.3-40.5.4-50.5-6.9-24-22.9-42.4-41.8-48.1-5.8-1.8-8.6-2-17.6-1.6-5.9.3-11.8.8-13 1.2l-2.4.8 2-4c4.3-8.4 13.9-14.6 25.1-16.1 7.8-1.1 10.1-3.1 10.1-8.8 0-3.4-.5-4.7-2.7-6.4-2.4-1.9-3.6-2.2-9.4-1.7-8 .7-17 3.7-22.7 7.7-2.3 1.6-4.5 3-4.7 3-.3 0-.5-18.8-.5-41.8v-41.7l8.7-8.2c4.9-4.5 9-8.2 9.2-8.3.2 0 4.9 4.3 10.5 9.5zm206.7-1.4 8.9 8.2v207.3L426.3 468l-17.8 16.4-.3-119.9-.3-120 8.8-8.2c4.9-4.5 9-8.2 9.1-8.3.2 0 4.4 3.7 9.3 8.1zm52.2.2 8.8 8.2-.3 120-.3 119.9-17.7-16.4-17.8-16.4V244.5l8.7-8.2c4.9-4.5 9-8.2 9.3-8.2.3 0 4.4 3.7 9.3 8.2zM128 342.8v22.9l-2.6 2.4c-4.6 4.2-12.2 15.7-15.3 23.3-1.6 3.9-3.8 11.1-4.7 15.9l-1.7 8.7H16v-96h112v22.8zm40.2 26.1c3.1.5 7.9 2 10.7 3.2l5.1 2.1v6.9c0 8.4 1.8 10.9 8 10.9s8-2.5 8-10.9v-6.9l5.3-2.3c4.3-2 6.8-2.4 15.2-2.4 9.5 0 10.3.2 16.3 3.4 16.3 8.9 26.2 28.8 26.2 52.8 0 11.5-2 22.8-5.5 31.6-5.6 13.7-18.6 28.5-30.2 34.2-8.1 4-20.3 4.7-29.2 1.6L192 491l-6.1 2.1c-8.6 3-21.1 2.4-29-1.4-11.3-5.4-24.8-20.7-30.4-34.4-8-19.8-7.3-46.3 1.7-64.2 6.2-12.2 17.8-21.8 29-24 2.4-.5 4.5-.9 4.8-1 .3 0 3 .3 6.2.8zM104 436.4c0 5.9 4.1 21.7 7.8 29.7 2.4 5.4 8 14.4 14.7 23.5.7 1 .3 2-1.3 3.6l-2.3 2.3-48.2.3c-33.6.2-49.4 0-52-.8-6.4-1.9-6.7-3.7-6.7-35.5V432h88v4.4zM467.5 482l14.7 13.5-15.1.3c-8.3.1-21.9.1-30.2 0l-15-.3 14.8-13.7c8.1-7.5 15.1-13.6 15.4-13.5.4.1 7.3 6.3 15.4 13.7z"}}),a("path",{attrs:{d:"M210.7 96.7c-9.3 9.3-17.5 18.2-18.3 20-1 2.4-1.1 3.9-.3 6.2 1.3 3.8 3.5 5.1 8.5 5.1 3.5 0 4.9-1.1 20.7-16.8 9.3-9.2 17.5-18.1 18.3-19.9 1-2.4 1.1-3.9.3-6.2-1.3-3.8-3.5-5.1-8.5-5.1-3.5 0-4.9 1.1-20.7 16.7zM226.7 152.7c-9.3 9.3-17.5 18.2-18.3 20-3.1 7.2 3.7 14 10.9 10.9 4-1.7 35.2-33.1 36.6-36.8 1.2-3.3-.3-8.4-2.9-9.8-1-.6-3.6-1-5.6-1-3.5 0-4.9 1.1-20.7 16.7z"}})])]),"Comercio"==t.user.rol?a("div",{staticClass:"flex items-center text-xl md:text-base ease-in duration-300  title",class:{hidden:t.mainCollapsed}},[t._v(" Mis Productos ")]):a("div",{staticClass:"flex items-center text-xl md:text-base ease-in duration-300  title",class:{hidden:t.mainCollapsed}},[t._v(" Productos ")])])],1):t._e(),null!=t.user?a("hr",{staticClass:"bg-black w-full"}):t._e(),null!=t.user&&"Comercio"==t.user.rol?a("div",{staticClass:"w-full h-14  item"},[a("router-link",{staticClass:"flex hover:bg-red-600  h-full px-4 item-link ease-in duration-300 ",class:{"justify-center":t.mainCollapsed},attrs:{to:{name:"registerProduct"}}},[a("div",{staticClass:"flex items-center w-10 mr-2 icon ease-in duration-300 ",class:{"mr-0":t.mainCollapsed}},[a("svg",{staticStyle:{"enable-background":"new 0 0 48 48"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48","xml:space":"preserve"}},[a("path",{attrs:{d:"M36 44c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-14c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm2-15H6v23h20l1 2H5c-.6 0-1-.4-1-1V13l6-8c0-.6.4-1 1-1h21c.6 0 1 .4 1 1l7 8v14l-2-1V15zM21 6h-9l-5 7h14V6zm10 0h-8v7h14l-6-7zM19 23c-1.7 0-3-1.3-3-3s1.3-3 3-3h6c1.7 0 3 1.3 3 3s-1.3 3-3 3h-6zm7-3c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1z"}}),a("path",{staticStyle:{fill:"none"},attrs:{d:"M11.8 53.4c1.8 0 3.3-1.5 3.3-3.3 0-1.8-1.5-3.3-3.3-3.3-1.8.1-3.3 1.6-3.3 3.4s1.5 3.2 3.3 3.2z"}}),a("path",{staticStyle:{fill:"#333"},attrs:{d:"M39.1 35.1h-2v-2c0-.6-.4-1-1-1s-1 .4-1 1v2h-1.9c-.6 0-1 .4-1 1s.4 1 1 1h1.9V39c0 .6.4 1 1 1s1-.4 1-1v-1.9h2c.6 0 1-.4 1-1s-.5-1-1-1z"}})])]),a("div",{staticClass:"flex items-center text-xl md:text-base ease-in duration-300  title",class:{hidden:t.mainCollapsed}},[t._v(" Nuevo producto ")])])],1):t._e(),null!=t.user?a("hr",{staticClass:"bg-black w-full"}):t._e()])])},r=[],o=a(4665),c={name:"HeaderComponent",data(){return{mainCollapsed:!0}},computed:{...(0,o.Se)("Auth",{user:"getSesion"})},methods:{showMain(){this.changeMainCollapsed(),this.getMainCollapsed()},getMainCollapsed(){this.mainCollapsed=this.$store.getters.getMainCollapsed},...(0,o.OI)(["changeMainCollapsed"]),...(0,o.OI)("Auth",["logoutSesion"]),cerrarSesion(){this.showMain(),this.logoutSesion(),this.$router.push({name:"login"})}}},d=c,u=a(1001),h=(0,u.Z)(d,l,r,!1,null,null,null),m=h.exports,v={name:"App",components:{Header:m}},p=v,f=(0,u.Z)(p,n,i,!1,null,null,null),g=f.exports,C=a(2809);s.Z.use(C.Z);const b=[{path:"/",name:"home",component:()=>a.e(231).then(a.bind(a,3231))},{path:"/login",name:"login",component:()=>a.e(970).then(a.bind(a,970))},{path:"/register",name:"register",component:()=>a.e(547).then(a.bind(a,547))},{path:"/products",name:"products",component:()=>a.e(494).then(a.bind(a,9494))},{path:"/register-product",name:"registerProduct",component:()=>a.e(124).then(a.bind(a,2124))},{path:"/modify-product",name:"modifyProduct",component:()=>a.e(544).then(a.bind(a,9544))},{path:"/detail/:id",name:"detail",component:()=>a.e(763).then(a.bind(a,9763))},{path:"/bag",name:"bag",component:()=>a.e(410).then(a.bind(a,3410))},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>a.e(472).then(a.bind(a,7472))}],w=new C.Z({routes:b});var x=w,z=a(6166),M=a.n(z),y={namespaced:!0,state:{sesion:null},getters:{getSesion(t){return t.sesion}},mutations:{getSesion(t,e){t.sesion=e},logoutSesion(t){t.sesion=null}},actions:{async getUser({commit:t},e){const a=await M().get(`/login/${e.username}/${e.password}`),s=await a.data;t("getSesion",s)}}},k={namespaced:!0,state:{bag:[],subtotal:0,envio:0,total:0},getters:{getBag(t){return t.bag},getSubtotal(t){return t.subtotal},getEnvio(t){return t.envio},getTotal(t){return t.total=t.envio+t.subtotal,t.total}},mutations:{addBag(t,e){let a=!1;for(let n=0;n<t.bag.length;n++){var s=t.bag[n];s.id==e.id&&(a=!0)}a?t.bag.map((t=>{t.id!=e.id||(t.cantidad+=e.cantidad)})):(t.bag.push(e),t.envio+=e.envio),t.subtotal+=e.cantidad*e.precio},sumProduct(t,e){t.bag.map((a=>{a.id==e&&(t.subtotal+=a.precio,a.cantidad++)}))},restProduct(t,e){t.bag.map((a=>{a.id!=e||(1!=a.cantidad?(t.subtotal-=a.precio,a.cantidad--):(console.log("Uno"),t.bag=t.bag.filter((t=>t.id!=a.id)),t.subtotal-=a.precio,t.envio-=a.envio))}))},buy(t){t.bag=[],t.subtotal=0,t.envio=0,t.total=0}},actions:{}},_={namespaced:!0,state:{products:[],product:{titulo:"",local:"",predescripcion:"",descripcion:"",precio:"",envio:"",images:""}},getters:{getProducts(t){return t.products},getProduct(t){return t.product}},mutations:{getProducts(t,e){t.products=e},getProductById(t,e){t.product=e}},actions:{async getProducts({commit:t},e){if("Comercio"==e.rol){const a=await M().get(`/productos/${e.username}`),s=await a.data;t("getProducts",s)}else{const e=await M().get("/productos"),a=await e.data;t("getProducts",a)}},async getProductById({commit:t},e){const a=await M().get(`/producto/${e}`),s=await a.data;t("getProductById",s)}}};s.Z.use(o.ZP);var V=new o.ZP.Store({state:{mainCollapsed:!0},getters:{getMainCollapsed(t){return t.mainCollapsed}},mutations:{changeMainCollapsed(t){t.mainCollapsed=!t.mainCollapsed}},actions:{},modules:{Auth:y,Bag:k,Product:_}});M().defaults.baseURL="https://backend-homefood.herokuapp.com/",s.Z.filter("formatoPrecio",(t=>`$${t.toFixed(2)}`)),s.Z.config.productionTip=!1,new s.Z({store:V,router:x,render:t=>t(g)}).$mount("#app")}},e={};function a(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,s,n,i){if(!s){var l=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],i=t[d][2];for(var r=!0,o=0;o<s.length;o++)(!1&i||l>=i)&&Object.keys(a.O).every((function(t){return a.O[t](s[o])}))?s.splice(o--,1):(r=!1,i<l&&(l=i));if(r){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[s,n,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,s){return a.f[s](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{124:"4c794536",231:"32c5b8ea",410:"fbdc9c08",472:"ba7c2b13",494:"d96a8f0e",544:"98f0af00",547:"2e72822c",763:"818ad4d1",970:"9392a655"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+t+"."+{231:"ceaad836",494:"45bb2460"}[t]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="frontend:";a.l=function(s,n,i,l){if(t[s])t[s].push(n);else{var r,o;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==s||u.getAttribute("data-webpack")==e+i){r=u;break}}r||(o=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",e+i),r.src=s),t[s]=[n];var h=function(e,a){r.onerror=r.onload=null,clearTimeout(m);var n=t[s];if(delete t[s],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((function(t){return t(a)})),e)return e(a)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=h.bind(null,r.onerror),r.onload=h.bind(null,r.onload),o&&document.head.appendChild(r)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t=function(t,e,a,s){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=function(i){if(n.onerror=n.onload=null,"load"===i.type)a();else{var l=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.href||e,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.type=l,o.request=r,n.parentNode.removeChild(n),s(o)}};return n.onerror=n.onload=i,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var n=a[s],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===t||i===e))return n}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){n=l[s],i=n.getAttribute("data-href");if(i===t||i===e)return n}},s=function(s){return new Promise((function(n,i){var l=a.miniCssF(s),r=a.p+l;if(e(l,r))return n();t(s,r,n,i)}))},n={143:0};a.f.miniCss=function(t,e){var a={231:1,494:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=s(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={143:0};a.f.j=function(e,s){var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)s.push(n[2]);else{var i=new Promise((function(a,s){n=t[e]=[a,s]}));s.push(n[2]=i);var l=a.p+a.u(e),r=new Error,o=function(s){if(a.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var i=s&&("load"===s.type?"missing":s.type),l=s&&s.target&&s.target.src;r.message="Loading chunk "+e+" failed.\n("+i+": "+l+")",r.name="ChunkLoadError",r.type=i,r.request=l,n[1](r)}};a.l(l,o,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,i,l=s[0],r=s[1],o=s[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(o)var d=o(a)}for(e&&e(s);c<l.length;c++)i=l[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},s=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(6044)}));s=a.O(s)})();
//# sourceMappingURL=app.6e5b5f5f.js.map