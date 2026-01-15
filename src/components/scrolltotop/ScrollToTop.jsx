import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

//  یه کامپوننت که ui خاصی نداره فقط منطق اجرا میکنه
// برای اینکه وثتی رو محصول کلیک میکنه میره صفحش بره بالای صفحه نه وسط
