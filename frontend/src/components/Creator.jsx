import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Creator = ({ creators, match: { params } }) => {
  const creator = creators.find(_creator => _creator.id === params.id);
  // const {
  //   creatorId,
  //   igName,
  //   mediaCount,
  //   profilePictureUrl,
  //   biography
  // } = creator.creatorInsights;
  console.log("CREATOR", creators, params.id, creator);
  return (
    <div>
      <h1>Creator</h1>
      {/* <h1>{igName}</h1>
      <p>{biography}</p>
      <p>{mediaCount}</p> */}
    </div>
  );
};

const mapStateToProps = ({ creators }) => ({
  creators
});

export default connect(mapStateToProps)(Creator);