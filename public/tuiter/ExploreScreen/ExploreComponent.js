import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return (`
<div class="row">
            <div class="row justify-content-between my-2 mx-3">
                <div class="col-10 mt-2 rounded-pill bg-color-grey">
                    <form class="d-flex">
                    <i class="fa fa-search opacity-75 m-auto" style="font-size: 1em"></i>
                        <input class="form-control override-bs ms-3 wd-no-border" type="search" value="Search Twitter"
                               aria-label="Search">
                    </form>
                </div>
                <div class="col-1 justify-content-end"><i class="fa fa-cog mt-2"
                                                          style="font-size: 2em; color: #2a9fd6"></i></div>
</div>
</div>
<ul class="nav mb-2 nav-tabs">
<li class="nav-item">
    <a class="nav-link" href="#">For you</a>
  </li> 
 <li class="nav-item">
    <a class="nav-link" href="#">Trending</a>
  </li>
<li class="nav-item">
    <a class="nav-link" href="#">News</a>
  </li>
<li class="nav-item">
    <a class="nav-link" href="#">Sports</a>
  </li>
<li class="nav-item">
    <a class="nav-link" href="#">Entertainment</a>
  </li>     
  </ul>
 <div class="row">
                <div class="card override-bs text-white p-0">
                    <img src="../images/starship.jpg" class="card-img-top rounded" alt="...">
                    <div class="card-img-overlay override-bs">
                        <h2 class="card-title">SpaceX's Starship</h2>
                    </div>
                </div>
            </div>
${PostSummaryList()} `);
}
export default ExploreComponent;