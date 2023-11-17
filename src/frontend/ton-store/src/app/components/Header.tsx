"use client"

import { useEffect, useState } from "react";
import HeaderNotAuthenticated from "./HeaderNotAuthenticated";
import HeaderAuthenticated from "./HeaderAuthenticated";



export default function Header() {
  
  const [hasToken, setHasToken] = useState(false);

  useEffect( () => {
    const token = localStorage.getItem("token")
    if (token) {
      setHasToken(true);
    } else {
      setHasToken(false);
    }
  }, [])


return (
  <>

      {hasToken ? (
        <HeaderAuthenticated onLogout={() => setHasToken(false)} />
      ) : (
        <HeaderNotAuthenticated />
      )}

  </>
);}
