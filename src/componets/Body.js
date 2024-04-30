import React from 'react'; 
import Browse from './Browse';
import Login from './Login';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import GptSearch from './GptSearch';




function Body() {
  

 
    const appRouter = createBrowserRouter([
        {
            path:'/' ,
            element:<Login/> 
        }
        ,{
            path:'/browse' ,
            element: <Browse/>
        }
        ,{
          path:'/GPTSearch',
          element: <GptSearch/>
        }
    ]) ;

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
