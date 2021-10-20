import { actions } from '../redux/actions'
import { connect } from 'react-redux';
import React, { useState } from 'react';

const mapDispatchToProps = (dispatch) => ({
    getSourceImages: () => dispatch(actions.getSourceImages()),
    updateJsonObj: (value, imgPath) => dispatch(actions.updateJsonObj([value, imgPath])),
    updateSourceImages: () => dispatch(actions.updateSourceImages())
})

export default connect(null, mapDispatchToProps)(function ImageLaod(props) {
    const { getSourceImages } = props;
    const { updateSourceImages } = props;
    const { updateJsonObj } = props;
    const src = props.source;
    const [srcImage, setSrcImage] = useState(src.value);
    function handleClick() {
        updateJsonObj(srcImage, src.imgPath);
        updateSourceImages();
        getSourceImages();
        alert(`Image source was update to:: "${ srcImage }"!`);
    }
    return (
        <>
            <div class="input-group mb-3">
                <input class="form-control" value={srcImage} onChange={(e) => { setSrcImage(e.target.value) }} aria-describedby="basic-addon2">
                </input>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" onClick={() => { handleClick() }}>update</button>
                </div>
            </div>
        </>

    );
})



