// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import CharactersWars from "./pages/CharactersWars";
import PlanetsWars from "./pages/PlanetsWars";
import VehiclesWars from "./pages/VehiclesWars";
import Personajes from "./pages/Personajes";
import Planetas from "./pages/Planetas";
import Vehiculos from "./pages/Vehiculos";

export const router = createBrowserRouter(
  createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

    // Root Route: All navigation will start from here.
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

      {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
      <Route path="/" element={<CharactersWars />} />
      <Route path="/PlanetsWars" element={<PlanetsWars />} />
      <Route path="/VehiclesWars" element={<VehiclesWars />} />
      <Route path="/Personajes/:id" element={<Personajes />} />
      <Route path="/Planetas/:id" element={<Planetas />} />
      <Route path="/Vehiculos/:id" element={<Vehiculos />} />

    </Route>
  )
);