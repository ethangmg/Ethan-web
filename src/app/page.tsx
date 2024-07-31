"use client"
import ThemeContextProvider from "./Components/Context/ThemeContextProvider";
import MyApp from './myApp/page'



export default function Main() {
  return (
    <ThemeContextProvider>
      <MyApp />
    </ThemeContextProvider>
  );
}
