import Settings from "../pages/Settings/Settings";
import SettingList from "../pages/Settings/SettingList";
import InfoModify from "../pages/Settings/InfoModify";
import SonMinSooRule from "../pages/Settings/SonMinSooRule";
import PasswordModify from "../pages/Settings/PasswordModify";

export const SettingsRouter = {
  path: "settings",
  element: <Settings />,
  children: [
    { path: "", element: <SettingList /> },
    { path: "infoModify", element: <InfoModify /> },
    { path: "sonminsooRule", element: <SonMinSooRule /> },
    { path: "passwordModify", element: <PasswordModify /> },
  ],
};
