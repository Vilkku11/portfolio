import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionStore } from "../../../../store/store";
import "./SectionObserver.css";

// Observes a section's visibility and updates it to the store
const SectionObserver = ({ sectionName }: { sectionName: string }) => {
  const { setActiveSection } = useActiveSectionStore();

  const { ref, inView } = useInView({
    threshold: 0.3,
    //rootMargin: "0px 0px -5% 0px",
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView]);

  return <div className="observer" ref={ref} />;
};

export default SectionObserver;
