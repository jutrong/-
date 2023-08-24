import RequestDetailNoWriter from "../pages/Request/RequestDetailNoWriter";
import RequestDetailWriter from "../pages/Request/RequestDetailWriter";
import RequestForm from "../pages/Request/RequestForm";
import RequestRoot from "../pages/Request/RequestRoot";
import Requests from "../pages/Request/Requests";

export const RequestRouter = {
  path: "/requests",
  element: <RequestRoot />,
  children: [
    { index: true, element: <Requests /> },
    { path: "/requests/form", element: <RequestForm /> },
    { path: "/requests/writer/:requestId", element: <RequestDetailWriter /> },
    {
      path: "/requests/nowriter/:requestId",
      element: <RequestDetailNoWriter />,
    },
  ],
};
