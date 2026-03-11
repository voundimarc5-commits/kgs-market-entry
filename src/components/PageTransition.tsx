import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<"enter" | "exit">("enter");

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage("exit");
    }
  }, [children, displayChildren]);

  const handleTransitionEnd = () => {
    if (transitionStage === "exit") {
      setDisplayChildren(children);
      setTransitionStage("enter");
    }
  };

  return (
    <div
      className={`page-transition ${transitionStage === "enter" ? "page-enter" : "page-exit"}`}
      onAnimationEnd={handleTransitionEnd}
      key={transitionStage === "enter" ? location.key : undefined}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
