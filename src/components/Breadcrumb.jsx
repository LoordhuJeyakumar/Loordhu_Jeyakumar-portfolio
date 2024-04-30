
import { Link } from "react-router-dom";
function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb order-xl-first">
      <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
        <li className="breadcrumb-item text-sm">
          <Link className="opacity-3 text-white" to={"/dashboard"}>
            <i className="bi bi-house-door-fill text-info"></i>
          </Link>
        </li>
        {/*  <li className="breadcrumb-item text-sm">
          <Link className="opacity-5 text-black" to={"/dashboard"}>
            Pages
          </Link>
        </li> */}
        <li
          className="breadcrumb-item text-sm active text-black text-capitalize"
          aria-current="page"
        >
          page 1
        </li>
      </ol>
      <h6 className="font-weight-bolder mb-0 text-capitalize">page 2</h6>
    </nav>
  );
}

export default Breadcrumb;
