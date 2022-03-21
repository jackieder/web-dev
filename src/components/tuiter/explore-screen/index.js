import React from "react";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = (
    active = "For you"
) => {
    return (<>
<div className="row">
            <div className="row justify-content-between my-2 mx-3">
                <div className="col-10 mt-2 rounded-pill bg-color-grey">
                    <form className="d-flex">
                    <i className="fa fa-search opacity-75 m-auto"></i>
                        <input className="form-control override-bs ms-3 wd-no-border" type="search" value="Search Twitter"
                               aria-label="Search"/>
                    </form>
                </div>
                <div className="col-1 justify-content-end"><i className="fa fa-cog mt-2 wd-cog-format"></i></div>
</div>
</div>
<ul className="nav mb-2 nav-tabs">
<li className="nav-item">
    <a className="nav-link active" data-bs-toggle="tab" href="/">For you</a>
  </li> 
 <li className="nav-item">
    <a className="nav-link" data-bs-toggle="tab" href="/">Trending</a>
  </li>
<li className="nav-item">
    <a className="nav-link" data-bs-toggle="tab" href="/">News</a>
  </li>
<li className="nav-item">
    <a className="nav-link" data-bs-toggle="tab" href="/">Sports</a>
  </li>
<li className="nav-item">
    <a className="nav-link" data-bs-toggle="tab" href="/">Entertainment</a>
  </li>     
  </ul>
 <div>
                <div className="card override-bs text-white">
                    <img src="https://s.hdnux.com/photos/01/23/33/15/21869409/3/1200x0.jpg" className="card-img-top rounded" alt="..."/>
                    <div className="card-img-overlay">
                        <h2 className="card-title font-weight-bold">SpaceX's Starship</h2>
                    </div>
                </div>
            </div>
<PostSummaryList/>
    </>
        );
}
export default ExploreComponent;