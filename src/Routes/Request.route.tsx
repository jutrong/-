import RequestDetail from "../pages/Request/RequestDetail";
import RequestForm from "../pages/Request/RequestForm";
import RequestRoot from "../pages/Request/RequestRoot";
import Requests from "../pages/Request/Requests";

export const RequestRouter = {
  path: "/requests",
  element: <RequestRoot />,
  children: [
    { index: true, element: <Requests /> },
    { path: "/requests/form", element: <RequestForm /> },
    { path: "/requests/:requestId", element: <RequestDetail /> },
  ],
};
