import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit}
    from "../../actions/tuits-actions";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit', username: 'jd'});

    return (
        <>
            <div className="row d-flex">
      <textarea className="form-control m-1 bs-override-textarea" value={newTuit.tuit}
                onChange={(event) =>
                    setNewTuit({...newTuit,
                        tuit: event.target.value})}>
      </textarea>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="float-left">
                    <i className="fa fa-regular fa-image fa-inverse fa-xl m-1"></i>
                    <i className="fa fa-solid fa-chart-line fa-inverse fa-xl m-1"></i>
                    <i className="fa fa-solid fa-face-grin fa-inverse fa-xl m-1"></i>
                    <i className="fa fa-solid fa-calendar fa-inverse fa-xl m-1"></i>
                </div>
                <button className="btn btn-primary rounded-pill float-right m-1" onClick={() => createTuit(dispatch, newTuit)}>
                    Tuit
                </button>
            </div>

        </>
    );
}
export default WhatsHappening;