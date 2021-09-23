import React from "react";


export default props => (
  <div class="card col-md-8 offset-md-2 mt-1">
    <div class="card-header row" id="headingOne">
        <h7 class="col-md-4" data-toggle="collapse" data-target={"#" + props.block.name} aria-expanded="true" aria-controls={props.block.name}>
          {props.block.name}
        </h7>
        <div class="col-md-4 offset-md-4">
        <button class="btn btn-info" data-toggle="collapse" data-target={"#" + props.block.name} aria-expanded="true" aria-controls={props.block.name}>
          View details
        </button>
        </div>
    </div>
    {/* BODY OF THE ITEM */}
    <div id={props.block.name} class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
      {props.block.description}
      </div>
    </div>
    {/* IMAGES */}
    {/* THIS NEEDED MORE WORK TO MAKE THE IMAGE SECTION BEAURIFUL/REACTIVE BUT I HAD NO ENERGY TO FIX IT */}
    <div id={props.block.name} class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
    <ul>{props.block.images ? props.block.images.map((item, index) => 
                    <img src={item} alt="Italian Trulli"/>
            ) : ""}
            </ul>
      
    </div>
  </div>
);
