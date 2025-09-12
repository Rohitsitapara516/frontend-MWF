import React, { useContext } from "react";
import ThemeContext from '/Themecontext'

function ThemedBox() {
  const { theme } = useContext(ThemeContext);


return <div>this is theme box</div>




}


export default ThemedBox