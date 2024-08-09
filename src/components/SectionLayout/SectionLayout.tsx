import { ReactNode, 
  useState, 
  useEffect 
} from "react";
import { Loader } from "../Loader/Loader.tsx";
import { FaArrowUp } from "react-icons/fa";
import "./styles.scss";

interface ISectionLayoutProps {
  children?: ReactNode;
  hasData: boolean;
  initialLoading: boolean;
  fetchingMoreData: boolean;
}

export function SectionLayout({
  children,
  // hasData,
  fetchingMoreData,
  initialLoading,
}: ISectionLayoutProps) {
  const [sectionYPosition, setSectionYPosition] = useState(0);

  function getSectionYAfterScroll() {
    setSectionYPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", getSectionYAfterScroll);
    return () => window.removeEventListener("scroll", getSectionYAfterScroll);
  }, []);

  function backToTop() {
    window.scrollTo(0, 0);
  }

  if (initialLoading) {
    return <Loader />;
  }

  return (
    <section className="sectionLayout">
      <h1 className="title">Harry Potter</h1>
      <p className="subtitle">Informações sobre personagens e atores do mundo bruxo!</p>
      <main className="sectionLayout--content">
        {children && <div className="children">{children}</div>}
        {fetchingMoreData && <Loader size="small" />}
      </main>

      <button
        type="button"
        className={`back-to-top ${sectionYPosition > 400 && "visible"}`}
        onClick={backToTop}
      >
        <FaArrowUp size={28} color="#FFF" />
      </button>
    </section>
  );
}
