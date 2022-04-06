import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit, updateTuit}
    from "../../../actions/tuits-actions";

const TuitListItem = ({
                          tuit = {
                              "_id": "123",
                              "topic": "Web Development",
                              "postedBy": {
                                  "username": "ReactJS"
                              },
                              "liked": true,
                              "verified": false,
                              "handle": "ReactJS",
                              "time": "2h",
                              "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                              "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                              "attachments": {
                                  "video": "unKvMC3Y1kI"
                              },
                              "logo-image": "../../../images/react-blue.png",
                              "avatar-image": "../../../images/react-blue.png",
                              "stats": {
                                  "comments": 123,
                                  "retuits": 234,
                                  "likes": 345
                              }
                          }
                      }) => {
    const dispatch = useDispatch();


    return (
        <>
            <li className="list-group-item">
                    <i className="row d-flex justify-content-end m-1" onClick={() => deleteTuit(
                        dispatch, tuit)}
                       className="fas fa-remove fa-sm
                  fa-pull-right"></i>

                <div className="row d-flex justify-content-start align-items-center">
                    <div className="col-1 mx-2"><img src={tuit["avatar-image"]} className="wd-profile-pic" alt="..."/>
                    </div>
                    <div className="col-8">
                        <p className="h6 fw-bold text-white">{tuit.postedBy ? tuit.postedBy.username : " "}
                            {tuit.verified ? <i className="fa fa-circle-check fa-inverse ps-1"></i> : ''} <span
                                className="h6 text-white-50">@{tuit.handle} - {tuit.time}</span>
                        </p>
                        <p className="h6">{tuit.tuit}</p>
                    </div>
                    <div className="col-1">
                        <img src={tuit["logo-image"]} className="wd-feed-picture-lg" alt="..."/>
                    </div>
                    <div className="row d-flex justify-content-end align-items-center ps-4">
                        <div className="col-11">
                            {tuit.attachments ?
                                <div className="card border-dark">
                                    <div className="card-body override-bs">
                                        <img src={tuit.attachments.image} className="card-img-top rounded border-bottom"
                                             alt="..."/>
                                        {tuit.picTitle ?
                                            <span className="card-text text-white mx-2">{tuit.picTitle}</span> : " "}
                                        {tuit.picSummary ?
                                            <p className="card-text text-white-50 mx-2">{tuit.picSummary}</p> : " "}
                                        {tuit.picLink ? <span className="card-text text-white-50 mx-2"><i
                                            className="fa fa-link"></i>{tuit.picLink}</span> : " "}
                                    </div>
                                </div>
                                : ' '}
                        </div>
                    </div>
                    <div className="row d-flex justify-content-end align-items-center ps-4">
                        <div className="col my-3 ps-5">
                            <span className="text-white-50"><i
                                className="fa fa-comment"></i> {tuit.tuits ? tuit.tuits : ""}</span>
                        </div>
                        <div className="col my-3 px-0">
                            <span className="text-white-50"><i
                                className="fa fa-retweet"></i> {tuit.stats ? tuit.stats.retuits : ""}</span>
                        </div>
                        <div className="col my-3 px-0">
                            <div>
                                Likes: {tuit.stats.likes}
                                <i onClick={() => updateTuit(dispatch, {
                                    ...tuit,
                                    likes: tuit.stats.likes++
                                })} className="far fa-thumbs-up ms-2"></i>
                            </div>

                        </div>
                        <div className="col my-3 px-0">
                            <span className="text-white-50"><i className="fa fa-arrow-up-from-bracket"></i></span>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}

export default TuitListItem