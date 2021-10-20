import { connect } from 'react-redux';
import React from 'react';
import ImageLaod from './ImageLoad'

function mapStateToProps(state) {
    return {
        jsonObj: state.loadReducer.jsonObj,
        sourceImages: state.loadReducer.sourceImages
    };
}

export default connect(mapStateToProps, null)(function Images(props) {
    const { sourceImages } = props;
    return (
        <>
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col align-self-center col-lg-6" >
                        <h4>The graphical resources list ready for editing:</h4>
                    </div>
                </div>
                <div class="row justify-content-md-center ">
                    <div class="col align-self-center col-lg-6 ">
                        {
                            sourceImages.map((src, index) => <ImageLaod source={src} key={index}></ImageLaod>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
})