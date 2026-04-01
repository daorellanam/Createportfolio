import { createBrowserRouter } from "react-router";
import { HomePage } from "./components/portfolio/HomePage";
import { PortalArchivoPage } from "./components/portfolio/PortalArchivoPage";
import { MarketplaceVehiculosPage } from "./components/portfolio/MarketplaceVehiculosPage";
import { ViviendaGtcPage } from "./components/portfolio/ViviendaGtcPage";
import { TipoDeCambioPage } from "./components/portfolio/TipoDeCambioPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/work/portal-archivo",
    Component: PortalArchivoPage,
  },
  {
    path: "/work/marketplace-de-vehiculos",
    Component: MarketplaceVehiculosPage,
  },
  {
    path: "/work/vivienda-gtc",
    Component: ViviendaGtcPage,
  },
  {
    path: "/work/tipo-de-cambio",
    Component: TipoDeCambioPage,
  },
]);
