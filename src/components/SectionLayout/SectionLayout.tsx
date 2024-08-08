import { ReactNode, 
  // useState, 
  // useEffect 
} from "react";
// import { Loader } from "../../components/Loader/Loader";
import "./styles.scss";

interface ISectionLayoutProps {
  hasData: boolean;
  initialLoading: boolean;
  fetchingMoreData: boolean;
}

export function SectionLayout({
  children,
  hasData,
  // fetchingMoreData,
  // initialLoading,
}: ISectionLayoutProps) {
  // const [sectionYPosition, setSectionYPosition] = useState(0);

  // function getSectionYAfterScroll() {
  //   setSectionYPosition(window.scrollY);
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", getSectionYAfterScroll);
  //   return () => window.removeEventListener("scroll", getSectionYAfterScroll);
  // }, []);

  // function backToTop() {
  //   window.scrollTo(0, 0);
  // }

  // if (initialLoading) {
  //   return <Loader />;
  // }

  return (
    <section className="sectionLayout">
      <main className="sectionLayout--content">
        {!hasData && <h2 className="no-data">Sem dados.</h2>}
        {children && <div className="children">{children}</div>}
        {/* {fetchingMoreData && <Loader size="small" />} */}
      </main>

      {/* <button
        type="button"
        className={`back-to-top ${sectionYPosition > 400 && "visible"}`}
        onClick={backToTop}
      >
        <FaArrowUp size={28} color="#FFF" />
      </button> */}
    </section>
  );
}