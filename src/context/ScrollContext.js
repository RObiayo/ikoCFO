import  { createContext, useRef, useContext } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (section) => {
    if (section === "about") aboutRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "services") servicesRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "contact") contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider value={{ aboutRef, servicesRef, contactRef, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
