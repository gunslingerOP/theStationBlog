import Link from "next/link";

const Header = () => {
  return (
    <>
      <header id="borderhdr">
        <div className="container">
          <div className="firstHeader">
            <Link href="../">
              <a style={{ "textdecoration": "none" }}>
                <h1 className="logo">FikraCamps</h1>{" "}
              </a>
            </Link>

            <ul>
             
              <Link href={`../login`}>
                <a style={{ "textdecoration": "none", color:"white" }}>Dashboard</a>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
